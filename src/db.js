//@ts-check
import { join } from 'node:path'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import assert from 'node:assert'

async function initializeDB() {
    const FILENAME = './data/db.json'

    // File path
    const dir = process.cwd()
    const file = join(dir, FILENAME)

    // Configure lowdb to write to JSONFile
    const adapter = new JSONFile(file)
    const db = new Low(adapter)

    // Read data from JSON file, this will set db.data content
    await db.read()

    // If db.json doesn't exist, db.data will be null
    db.data ||= { titles: {} }
    return db
}

const db = await initializeDB()

function addTitleData(titleData, override = false) {
    /*
    Enriches titles with data from the internet
    
    format: [
        {
            title: "title",
            data: {...}
        }
    ]
    */
    titleData.forEach(({ title, data }) => {
        if (!override && db.data.titles[title]) {
            console.log('Title already exists, skipping: ' + title)
            return
        }

        db.data.titles[title] = {
            data: data || null,
            lastUpdated: Date.now()
        }
    })
}

function getSingleTitleData(title) {
    assert(title)
    return db.data.titles[title]
}
function getAllData() {
    return db.data.titles
}
function removeTitles(titles) {
    assert(titles)
    titles.forEach(title => {
        if (db.data.titles[title]) {
            delete db.data.titles[title]
        }
    })
}
async function saveDB() {
    await db.write()
}

export {
    addTitleData,
    getSingleTitleData,
    getAllData,
    removeTitles,
    saveDB
}