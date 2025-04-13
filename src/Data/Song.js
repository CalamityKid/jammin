//Each Song object has a Spotify ID, a name and an artist. 
// They are created in a Cache object. 

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

    getInPlaylists() {
        return this.inPlaylists;
    }
}

export default Song;