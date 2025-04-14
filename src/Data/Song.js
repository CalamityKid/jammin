class Song {
    constructor(spotifyID, songName, artist) {
        this.spotifyID = spotifyID;
        this.songName = songName;
        this.artist = artist;
        this.inPlaylists = [];
    }

    // Setter and getter for spotifyID
    set spotifyID(id) {
        if (typeof id !== "string" || id.trim() === "") {
            throw new Error("spotifyID must be a non-empty string");
        }
        this._spotifyID = id;
    }

    get spotifyID() {
        return this._spotifyID;
    }

    // Setter and getter for songName
    set songName(name) {
        if (typeof name !== "string" || name.trim() === "") {
            throw new Error("songName must be a non-empty string");
        }
        this._songName = name;
    }

    get songName() {
        return this._songName;
    }

    // Setter and getter for artist
    set artist(artistName) {
        if (typeof artistName !== "string" || artistName.trim() === "") {
            throw new Error("artist must be a non-empty string");
        }
        this._artist = artistName;
    }

    get artist() {
        return this._artist;
    }

    // Method to get playlist names
    inPlaylistNames() {
        return this.inPlaylists.map(playlist => playlist.name);
    }

    // Method to remove a playlist by its ID
    removeFromPlaylist(playlistId) {
        const playlist = this.inPlaylists.find(pl => pl.playlistId === playlistId);
    
        if (playlist) {
            const songIndex = playlist.songs.indexOf(this.spotifyID);
            if (songIndex !== -1) {
                playlist.songs.splice(songIndex, 1); // Remove one instance
            }
    
            const remainingInstances = playlist.songs.filter(id => id === this.spotifyID).length;
            if (remainingInstances === 0) {
                this.inPlaylists = this.inPlaylists.filter(pl => pl.playlistId !== playlistId);
            }
        }
    }
}

export default Song;