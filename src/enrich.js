//@ts-check

import { addTitleData, getAllTitles, saveDB } from './db.js';
import { searchMovies, searchTVShows } from './tmdb.js';

// import { titles } from '../data/3-19-2023.js'; // replace with your file name
import { titles } from '../data/test_data.js'; // small list just for development
const OVERRIDE = true

// async sleep
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const existingData = getAllTitles()
let filteredTitles = OVERRIDE ? titles : titles.filter(title => !existingData[title])

if (!filteredTitles?.length) {
    console.log('No new titles found.')
}

let enrichedData = await Promise.all(filteredTitles.map(async title => {
    await sleep(100) // let's do 10/s
    // use tmdb api to get data
    const movie = await searchMovies(title)
    const tv = await searchTVShows(title)

    console.log(movie.results[0], tv.results[0])


    /*
    HOW TO TIE BREAK if both movies and tv shows are found?
    - see which ones have more ratings?
    - or which title in first search result is closer match?
    
    TOOD: need to warn if low rating count...
    */
    return {
        title,
        data: {
            movie: movie.results[0],
            tv: tv.results[0],
        }
    }
}));
addTitleData(enrichedData, OVERRIDE)
await saveDB()

