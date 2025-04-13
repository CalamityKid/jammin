import Cache from './Cache.js'; // Import the Cache class
import MockData from '../fakeinfo/MockData.json' with { type: "json" };; // Import the JSON file directly

const SearchCache = new Cache(); // Create an instance of Cache for search results

function populateSearchCacheFromJSON(data, cache) {
    try {
        // Iterate over each entry in the JSON object and add it to the cache
        data.forEach(({ spotifyID, songName, artist }) => {
            cache.rawToCache(spotifyID, songName, artist);
        });

        console.log("SearchCache populated successfully!");
    } catch (error) {
        console.error("Error populating SearchCache:", error);
        throw error;
    }
}

// Populate the SearchCache using the imported JSON data
populateSearchCacheFromJSON(MockData, SearchCache);
console.log(SearchCache.retrieveSong("spotifyid2").artist); // Verify the cache is populated

export default SearchCache;