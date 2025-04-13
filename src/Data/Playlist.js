class Playlist {
    constructor (name, cache, playlistId){
        this.name = name;
        this.playlistId = playlistId;
        this.songs = [];
        this.cache = cache; // Cache the playlist reads from
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
        // Add the playlist to the song's inPlaylists array
        this.cache.retrieveSong(spotifyID).inPlaylists.push(this);
    }

    removeSong(song) {
        const { spotifyID } = song;
        if (!spotifyID || typeof spotifyID !== "string") {
            throw new Error("Song must have a valid spotifyID");
        }
        // Remove the song's spotifyID from the playlist's songs array
        this.songs = this.songs.filter(id => id !== spotifyID);
        // Remove the playlist from the song's inPlaylists array
        const songObj = this.cache.retrieveSong(spotifyID); 
        songObj.inPlaylists = songObj.inPlaylists.filter(pl => pl !== this);
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

export default Playlist;