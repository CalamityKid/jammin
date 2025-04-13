import React, { useState } from 'react';
import PlaylistCard from './PlaylistCard';

function PlaylistDeck({allPlaylists}) {
    const [visibleDeckId, setVisibleDeckId] = useState(null); // Track the visible deck's ID

    const toggleDeckVisibility = (playlistId) => {
        setVisibleDeckId((prevId) => (prevId === playlistId ? null : playlistId)); // Toggle visibility
    };

    return (
        <div>
            {allPlaylists.map((playlist, index) => (
                <PlaylistCard key={index} playlist={playlist} 
                isDeckVisible={visibleDeckId === playlist.playlistId} // Check if this deck is visible
                toggleDeckVisibility={toggleDeckVisibility}/>
            ))}
        </div>
    );
}

export default PlaylistDeck;