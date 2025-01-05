## netflix-queue

This is a tool to help you organize your Netflix watchlist. It lets you filter/sort by ratings, genres, release dates, etc.

### Usage

> Install deps with `npm install` first.

1. use `./src/netflixPaste.js` to scrape titles from your Netflix `My List`.

   - Paste the array of titles into a JS file inside `./data`. Export with `export const titles = [...]`
   - Replace this line with your filename [here](https://github.com/cktang88/netflix-queue/blob/c7564f2a32c98833e07c3e9efb1f5c7f25bf79ec/src/runner.js#L7)

2. `npm start` to run populate the DB with enriched data from [TMDB's API](https://developer.themoviedb.org/docs/getting-started).

3. (optional) `node ./src/analysis.js` to analyze the DB, sorting/filtering/etc.

### Dev

- uses lowDB to persist data as JSON
- uses TMDB's API to enrich data

// TODO: get video and movie details from TMDB
