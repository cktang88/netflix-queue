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

function addTitles(titles) {
    /*
    Adds titles to db if they don't exist
    */
    titles.forEach(title => {
        if(!db.data.titles[title]){
            db.data.titles[title] = {
                data: {},
                lastUpdated: Date.now()
            }
        }
    })
    db.data.titles = {

    } 
}

function getTitleData(title){
    return db.data.titles[title]
}
function getTitles(){
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

export default {
    addTitles,
    getTitleData,
    getTitles,
    removeTitles,
    saveDB
}