import google from 'googlethis';

const options = {
    page: 0,
    safe: false, // Safe Search
    parse_ads: false, // If set to true sponsored results will be parsed
    additional_params: {
        // add additional parameters here, see https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters and https://www.seoquake.com/blog/google-search-param/
        hl: 'en'
    }
}

const response = await google.search('That Winter, the Wind Blows', options);
console.log(JSON.stringify(response.knowledge_panel, null, 2)); 