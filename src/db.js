// Remember to set type: module in package.json or use .mjs extension
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

async function initializeDB (){
    const FILENAME = './data/db.json'

    // File path
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const file = join(__dirname, FILENAME)

    // Configure lowdb to write to JSONFile
    const adapter = new JSONFile(file)
    const db = new Low(adapter)

    // Read data from JSON file, this will set db.data content
    await db.read()

    // If db.json doesn't exist, db.data will be null
    db.data ||= { titles: [] }
}

const db = await initializeDB()

function addTitleData(titleData, override = false){
    /*
    Enriches titles with data from the internet
    
    format: [
        {
            title: "title",
            data: {...}
        }
    ]
    */
    titleData.forEach(({title, data}) => {
        if(!override && db.data.titles[title]) {
            console.log('Title already exists, skipping: ' + title)
            return
        }

        db.data.titles[title] = {
            data: data || null,
            lastUpdated: Date.now()
        }
    })
}

function getTitleData(title){
    return db.data.titles[title]
}
function getAllTitles(){
    return db.data.titles
}
function removeTitles(titles){
    titles.forEach(title => {
        if(db.data.titles[title]){
            delete db.data.titles[title]
        }
    })
}
async function saveDB(){
    await db.write()
}

export {
    addTitleData,
    getTitleData,
    getAllTitles,
    removeTitles,
    saveDB
}