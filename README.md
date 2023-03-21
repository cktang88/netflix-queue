netflix-queue
---

> Install deps with `npm install` first.

1. use `./src/netflixPaste.js` to scrape titles from your Netflix `My List`. 
    - Paste the array of titles into a JS file inside `./data`. Export with `export const titles = [...]`
2. `npm start` to run populate the DB.


### Dev
- uses lowDB to persist data as JSON
- uses `googlethis` to scrape Google search
