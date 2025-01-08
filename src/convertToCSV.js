import { getAllData } from "./db.js";
import { titles } from '../data/1-8-2025.js'; // replace with your file name
import { TMDB_MOVIE_GENRES, TMDB_TV_GENRES } from "./constants.js";
import { Parser } from '@json2csv/plainjs';



// Create genre ID to name mappings
const movieGenreMap = Object.fromEntries(TMDB_MOVIE_GENRES.map(g => [g.id, g.name]));
const tvGenreMap = Object.fromEntries(TMDB_TV_GENRES.map(g => [g.id, g.name]));

// Get all titles and convert to array format
const allTitles = getAllData();
// remove all object keys that are not in titles
const items = Object.entries(allTitles).filter(([title]) => titles.includes(title)).map(([title, data]) => {
    const itemData = { ...data.data, title };

    // Convert genre_ids to genre names
    if (itemData.genre_ids && Array.isArray(itemData.genre_ids)) {
        const genreMap = itemData.TYPE === 'movie' ? movieGenreMap : tvGenreMap;
        const genreNames = itemData.genre_ids
            .map(id => genreMap[id])
            .filter(name => name !== undefined); // Remove any unmapped genres
        itemData.genres = genreNames;
        delete itemData.genre_ids; // Remove the original genre_ids field
    }

    return itemData;
});

// Split into movies and TV shows
const movies = items.filter(item => item.TYPE === 'movie');
const shows = items.filter(item => item.TYPE === 'tv');


const opts = {
    // transforms: [flatten({ objects: true, arrays: true, separator: ';' })]
};
const parser = new Parser(opts);
const moviesCSV = parser.parse(movies);
const parser2 = new Parser(opts);
const showsCSV = parser2.parse(shows);

// Write to files using Node.js fs
import { writeFileSync } from 'fs';
writeFileSync('./data/movies.csv', moviesCSV);
writeFileSync('./data/shows.csv', showsCSV);

console.log(`Created movies.csv with ${movies.length} entries`);
console.log(`Created shows.csv with ${shows.length} entries`);