import { getAllTitles } from "./db.js";

let movies = []
let shows = []
let other = []

Object.entries(getAllTitles()).forEach(([title, data]) => {
    // console.log(title)
    let arr = data.data.type?.split('‧').map(e => e.trim()) || [null, null, null]
    let year = arr[0]
    let length = arr[arr.length - 1] // sometimes 2 elems
    if (!length) {
        other.push({ title, year, length, ratings: data.data.ratings })
    }
    else if (length.includes('season')) {
        shows.push({ title, year, length, ratings: data.data.ratings })
    }
    else {
        movies.push({ title, year, length, ratings: data.data.ratings })
    }
})
console.log(other)
// console.log(movies)
// console.log(shows)