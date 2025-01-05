//@ts-check

import { addTitleData, getAllData, saveDB } from './db.js';
import { searchMovies, searchTVShows } from './tmdb.js';
import stringSimilarity from 'string-similarity';

import { titles } from '../data/1-5-2024.js'; // replace with your file name
// import { titles } from '../data/test_data.js'; // small list just for development


const OVERRIDE = true
const filteringOpts = {
    minReleaseYear: 1985,
    onlyReleased: true,
    hasVotes: true
}

// async sleep
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const existingData = getAllData()
let filteredTitles = OVERRIDE ? titles : titles.filter(title => !existingData[title])

console.log('Enriching', filteredTitles.length, 'titles...')

if (!filteredTitles?.length) {
    console.log('No new titles found.')
    process.exit(0)
}

let enrichedData = [];
for (const title of filteredTitles) {
    // await sleep(100) // Rate limit to 10/s
    console.log('Enriching', title)

    // use tmdb api to get data
    const movie = await searchMovies(title)
    const tv = await searchTVShows(title)

    // filter results to only after 1990
    if (filteringOpts.minReleaseYear) {
        movie.results = movie.results.filter(result => result.release_date && new Date(result.release_date) >= new Date(`${filteringOpts.minReleaseYear}-01-01`))
        tv.results = tv.results.filter(result => result.first_air_date && new Date(result.first_air_date) >= new Date(`${filteringOpts.minReleaseYear}-01-01`))
    }

    // filter results to only released
    if (filteringOpts.onlyReleased) {
        movie.results = movie.results.filter(result => result.release_date && new Date(result.release_date) <= new Date())
        tv.results = tv.results.filter(result => result.first_air_date && new Date(result.first_air_date) <= new Date())
    }

    // filter results to only have votes
    if (filteringOpts.hasVotes) {
        movie.results = movie.results.filter(result => result.vote_count && result.vote_count > 0)
        tv.results = tv.results.filter(result => result.vote_count && result.vote_count > 0)
    }

    // Sort movie results by string similarity and popularity
    if (movie.results?.length) {
        movie.results.sort((a, b) => {
            const aSimilarity = stringSimilarity.compareTwoStrings(title, a.title);
            const bSimilarity = stringSimilarity.compareTwoStrings(title, b.title);
            if (aSimilarity !== bSimilarity) {
                return bSimilarity - aSimilarity;
            }
            return b.popularity - a.popularity;
        });
    }

    // Sort TV results by string similarity and popularity
    if (tv.results?.length) {
        tv.results.sort((a, b) => {
            const aSimilarity = stringSimilarity.compareTwoStrings(title, a.name);
            const bSimilarity = stringSimilarity.compareTwoStrings(title, b.name);
            if (aSimilarity !== bSimilarity) {
                return bSimilarity - aSimilarity;
            }
            return b.popularity - a.popularity;
        });
    }

    // console.log(movie, tv) // for debugging

    let data = {}

    // if has both movie and tv, pick the one that is more string similar
    if (movie.results[0] && tv.results[0]) {
        const movieSimilarity = stringSimilarity.compareTwoStrings(title, movie.results[0].title)
        const tvSimilarity = stringSimilarity.compareTwoStrings(title, tv.results[0].name)
        const IS_MOVIE = movieSimilarity > tvSimilarity
        data = IS_MOVIE ? movie.results[0] : tv.results[0];
        data.TYPE = IS_MOVIE ? 'movie' : 'tv';
    } else if (movie.results[0]) {
        data = movie.results[0];
        data.TYPE = 'movie';
    } else if (tv.results[0]) {
        data = tv.results[0];
        data.TYPE = 'tv';
    }

    data.WARNING = []
    if (data.vote_count < 20) {
        data.WARNING.push('LOW_RATING_COUNT')
    }
    if (data.popularity < 10) {
        data.WARNING.push('LOW_POPULARITY')
    }
    if (movie.results[0] && tv.results[0]) {
        data.WARNING.push('BOTH_MOVIE_AND_TV')
    }
    if (movie.results.length > 1) {
        data.WARNING.push('MULTIPLE_MOVIES')
    }
    if (tv.results.length > 1) {
        data.WARNING.push('MULTIPLE_TV')
    }


    /*
    TODO: need to warn if low rating count/popularity...
    */
    enrichedData.push({
        title,
        data
    });
}

addTitleData(enrichedData, OVERRIDE)
await saveDB()

