import React, { useState } from "react";
import SongCard from "./SongCard";

// This component is responsible for displaying a deck of song cards.
//it must be passed an array of song components.
function SongCardDeck({ songInfo, setSongInfo, playlist }) {

    const [playlistSongs, setPlaylistSongs] = useState(playlist.retrieveAllSongs());
    const handleSongRemoved = (removedSong, index) => {
        setPlaylistSongs((prevSongs) => {
            const updatedSongs = [...prevSongs];
            updatedSongs.splice(index, 1); // Remove the song at the specified index
            return updatedSongs;
        });
    };

    return (
        <div>
            {playlistSongs.map((song, index) => (
                <SongCard key={index} song={song} songInfo={songInfo} setSongInfo={setSongInfo} playlist={playlist} onSongRemoved={handleSongRemoved}/>
            ))}
        </div>
    );
}

export default SongCardDeck;