import { getAllTitles } from "./db.js";

let movies = []
let shows = []
let other = []

function isMovie(str) {
    // regex match "3h 30m"
    return str.match(/\d+h \d+m/)
}

Object.entries(getAllTitles()).forEach(([title, data]) => {
    // console.log(title)
    let arr = data.data.type?.split('‧').map(e => e.trim()) || [null, null, null]
    let year = arr[0]
    let titleLength = arr[arr.length - 1] // sometimes 2 elems
    let ratings = data.data.ratings.map(r => parseToNum(r.rating))
    if (!titleLength) {
        other.push({ title, year, titleLength, ratings })
    }
    else if (isMovie(titleLength)) {
        movies.push({ title, year, titleLength, ratings })
    }
    else {
        shows.push({ title, year, titleLength, ratings })
    }
})

function avg(arr) {
    let arr2 = arr.filter(a => a)
    return arr2.reduce((a, b) => a + b, 0) / arr2.length || 0
}

movies.sort((a, b) => avg(a.ratings) - avg(b.ratings))
shows.sort((a, b) => avg(a.ratings) - avg(b.ratings))
other.sort((a, b) => avg(a.ratings) - avg(b.ratings))

function parseToNum(str) {
    // str in format "91% liked this movie"
    if (str.includes('%'))
        return parseInt(str.split('%')[0])
    // str in format "8.5/10"
    if (str.includes('/'))
        return Math.round(parseFloat(str.split('/')[0]) / parseFloat(str.split('/')[1]) * 100)
}
// console.log(other)
// console.log(movies)
console.log(shows)
// console.log(parseToNum('88% liked this TV show'))
