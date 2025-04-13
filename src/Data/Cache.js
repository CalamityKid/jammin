import Song from "./Song.js"; // Import the Song class
// la data pasa por el cache primero, si no está, se agrega
// luego, se le pasa solo el id al playlist

class Cache {
    constructor() {
        this.songCache = {}; // Dictionary to store Song objects
    }

    // Given raw data by API, creates a song object and stores it in cache
    //should be used by the Search Cache
    rawToCache(spotifyID, songName, artist) {
        if (!this.songCache.hasOwnProperty(spotifyID)) {
            const song = new Song(spotifyID, songName, artist);
            this.songCache[spotifyID] = song;
        }
    }

    // Given a song object, stores it in cache
    // should be used by the Playlist Chache
    songToCache(song) {
        const { spotifyID } = song;
    
        if (!this.songCache.hasOwnProperty(spotifyID)) {
            this.songCache[spotifyID] = song; // Add the song object to the cache
        }
    }

    // Returns bool if song is in cache
    inCache(spotifyID) {
        return this.songCache.hasOwnProperty(spotifyID);
    }

    // Returns a song object if it exists in cache
    retrieveSong(spotifyID) {
        if (this.inCache(spotifyID)) {
            return this.songCache[spotifyID];
        } else {
            throw new Error("Song not in Cache");
        }
    }
}

export default Cache;