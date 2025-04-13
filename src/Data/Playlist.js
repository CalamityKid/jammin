import Cache from "./Cache.js";
import SearchCache from "./APIComputer.js"; //this should be deleted later
// figure out a programming pattern to deal with global variables
// for now ill pass this allPlaylists object around.

const allPlaylists = {
    counter : 0, 
    listOfPlaylists: [], //list of playlist objects,
    }

class Playlist {
    constructor (name, cache){
        this.name = name;
        this.playlistId = allPlaylists.counter++;
        this.songs = [];
        this.cache = cache; // Cache the playlist reads from
        allPlaylists.listOfPlaylists.push(this);
        }
    

    set name (enteredName) {
        if (typeof(enteredName) !== "string") {
            throw new Error("Playlist name must be a string")
        } else {
            this._name = enteredName; 
        };
    }
    
    get name () {
        return this._name;
    }
    
    addSong(song) {
        const { spotifyID } = song;
        if (!spotifyID || typeof spotifyID !== "string") {
            throw new Error("Song must have a valid spotifyID");
        }
        // Add the song to the cache using the songToCache method
        this.cache.songToCache(song);
        // Add the song's spotifyID to the playlist's songs array
        this.songs.push(spotifyID);
    }

    removeSong(song) {
        const { spotifyID } = song;
        if (!spotifyID || typeof spotifyID !== "string") {
            throw new Error("Song must have a valid spotifyID");
        }
        // Remove the song's spotifyID from the playlist's songs array
        this.songs = this.songs.filter(id => id !== spotifyID);
    }

    retrieveSong(spotifyID) {
        if (!spotifyID || typeof spotifyID !== "string") {
            throw new Error("spotifyID must be a valid string");
        }
    
        // Check if the spotifyID is in the playlist's songs array
        if (this.songs.includes(spotifyID)) {
            // Retrieve the song object from the cache
            return this.cache.retrieveSong(spotifyID);
        } else {
            throw new Error("Song not found in this playlist");
        }
    }

    retrieveAllSongs() {
        return this.songs.map(spotifyID => this.retrieveSong(spotifyID));
    }
}

const PlaylistCache = new Cache(); // Create a cache for the playlist
const pl1 = new Playlist("My Playlist 1", PlaylistCache);
pl1.addSong(SearchCache.retrieveSong("spotifyid1"));
pl1.addSong(SearchCache.retrieveSong("spotifyid2"));
pl1.addSong(SearchCache.retrieveSong("spotifyid3"));
const pl2 = new Playlist("My Playlist 2", PlaylistCache);
pl2.addSong(SearchCache.retrieveSong("spotifyid4"));
pl2.addSong(SearchCache.retrieveSong("spotifyid5"));

console.log(allPlaylists.listOfPlaylists); // Log the list of playlists to verify
//export default Playlist;
//should be fixed later
export default allPlaylists; // Export the allPlaylists object