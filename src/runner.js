//@ts-check

import google from 'googlethis';

import {addTitleData, getSingleTitleData, getAllTitles, saveDB} from './db.js';

import { titles } from '../data/3-19-2023.js'; // replace with your file name

const options = {
    page: 0,
    safe: false, // Safe Search
    parse_ads: false, // If set to true sponsored results will be parsed
    additional_params: {
        // add additional parameters here, see https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters and https://www.seoquake.com/blog/google-search-param/
        hl: 'en'
    }
}

// async sleep
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const existingData = getAllTitles()
let filteredTitles = titles.filter(title => !existingData[title])

if(!filteredTitles?.length){
    console.log('No new titles found.')
}

const enrichedData = await Promise.all(filteredTitles.map(async title => {

    try {
        await sleep(1000)
        const response = await google.search(title, options);
        console.log('got results for: ' + title)
        // console.log(JSON.stringify(response.knowledge_panel, null, 2)); 
        return {
            title: title,
            data: response.knowledge_panel
        }
    } catch (e) {
        console.error(e)
    }
}))

addTitleData(enrichedData, false)
await saveDB()

