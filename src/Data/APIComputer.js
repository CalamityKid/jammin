// This function populates the cache with data from a parsed JSON format
//then it populated the Cache attached to it and returns a list of song objects
// it's used to populate the Search Component

function populateCacheFromJSON(data, cache) {
    try {
        let searchArray = [];
        // Iterate over each entry in the JSON object and add it to the cache
        data.forEach(({ spotifyID, songName, artist }) => {
            cache.rawToCache(spotifyID, songName, artist);
            searchArray.push(cache.retrieveSong(spotifyID));
        });
        console.log("Cache populated successfully! Returning array of song objects.");
        return searchArray; // Return the populated cache array

    } catch (error) {
        console.error("Error populating Cache:", error);
        throw error;
    }
}

export default populateCacheFromJSON;