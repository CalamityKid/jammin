import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SongCardDeck from '../SongCard/SongCardDeck';

//given a playlist object
// this component will display the name of the playlist 
// and a deck of its song cards
function PlaylistCard({ playlist }) {
    const {name} = playlist;

    // State to toggle the visibility of the SongCardDeck
    const [isDeckVisible, setIsDeckVisible] = useState(false);

    // Retrieve all songs from the playlist
    const songArray = playlist.retrieveAllSongs();

    return (
        <div
            style={{ border: "2px solid #000", padding: "10px", margin: "10px", cursor: "pointer" }}
            onClick={() => setIsDeckVisible(!isDeckVisible)} // Toggle visibility on click
        >
            <h2>{name}</h2>
            {isDeckVisible && <SongCardDeck songs={songArray} />}
        </div>
    );
}

PlaylistCard.propTypes = {
    playlist: PropTypes.shape({
        name: PropTypes.string.isRequired, // Playlist name must be a string and is required
        retrieveAllSongs: PropTypes.func.isRequired, // Must be a function and is required
    }).isRequired, // The playlist object itself is required
};

export default PlaylistCard;