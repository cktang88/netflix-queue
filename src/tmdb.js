import 'dotenv/config';

// NOTE: TMDB API is not really limited, but protected against abuse like 50/s.
// NOTE: tmdb ratings very similar to IMDB usually
const TMDB_SEARCH_URL = 'https://api.themoviedb.org/3/search'; // v3

export async function fetchFromTMDB(endpoint, options = {}) {
    const url = `${TMDB_SEARCH_URL}${endpoint}`;
    const headers = {
        'Authorization': `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    };

    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                ...headers,
                ...options.headers,
            },
        });

        if (!response.ok) {
            throw new Error(`TMDB API error: ${response.status} ${response.statusText} for ${url}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching from TMDB:', error);
        throw error;
    }
}


// Add more specific API methods as needed:
export async function searchMovies(title, options = {
    include_adult: true,
    page: 1,
    language: 'en-US',
}) {
    const queryParams = {
        ...options,
        query: title,
    };
    return await fetchFromTMDB(`/movie?${new URLSearchParams(queryParams)}`);
}

export async function searchTVShows(title, options = {
    include_adult: true,
    page: 1,
    language: 'en-US',
}) {
    const queryParams = {
        ...options,
        query: title,
    };
    return await fetchFromTMDB(`/tv?${new URLSearchParams(queryParams)}`);
}

/**
movie result format is:
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/sCzcYW9h55WcesOqA12cgEr9Exw.jpg",
      "genre_ids": [
        18,
        10749
      ],
      "id": 597,
      "original_language": "en",
      "original_title": "Titanic",
      "overview": "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
      "popularity": 164.402,
      "poster_path": "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      "release_date": "1997-11-18",
      "title": "Titanic",
      "video": false,
      "vote_average": 7.907,
      "vote_count": 25497
    },
    ...
  ],
  "total_pages": 11,
  "total_results": 218
}
 */