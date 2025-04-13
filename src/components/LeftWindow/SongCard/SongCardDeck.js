import React from "react";
import SongCard from "./SongCard";

// This component is responsible for displaying a deck of song cards.
//it must be passed an array of song components.
function SongCardDeck({ songs }) {
    return (
        <div>
            {songs.map((song, index) => (
                <SongCard key={index} song={song} />
            ))}
        </div>
    );
}

export default SongCardDeck;