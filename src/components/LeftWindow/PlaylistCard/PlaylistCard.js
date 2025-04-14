import React from 'react';
import PropTypes from 'prop-types';
import SongCardDeck from '../SongCard/SongCardDeck';

// PlaylistCard component displays a playlist with its name and a remove button
// it displays a SongCardDeck on click.

function PlaylistCard({ playlist, removePlaylist, isDeckVisible, toggleDeckVisibility, songInfo, setSongInfo }) {
    const { name, playlistId } = playlist;

    // Retrieve all songs from the playlist
    const songArray = playlist.retrieveAllSongs();

    return (
        <div
            style={{ border: "2px solid #000", padding: "10px", margin: "10px" }}
            onClick={() => toggleDeckVisibility(playlistId)} // Toggle visibility on click
        >
            <h2>{name}</h2>
            <p>playlist id : {playlistId}</p>
            <p
                className="RemovePlaylist"
                style={{ textDecoration: "underline", cursor: "pointer", color: "blue" }}
                onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent onClick
                    removePlaylist(playlistId);
                }}
            >
                [Remove Playlist]
            </p>
            {isDeckVisible && (
                <div
                    onClick={(e) => e.stopPropagation()} // Prevent triggering the parent onClick
                >
                    <SongCardDeck songs={songArray} songInfo={songInfo} setSongInfo={setSongInfo} playlist={playlist} />
                </div>
            )}
        </div>
    );
}

PlaylistCard.propTypes = {
    playlist: PropTypes.shape({
        name: PropTypes.string.isRequired, // Playlist name must be a string and is required
        playlistId: PropTypes.number.isRequired, // Playlist ID must be a number and is required
        retrieveAllSongs: PropTypes.func.isRequired, // Must be a function and is required
    }).isRequired, // The playlist object itself is required
    isDeckVisible: PropTypes.bool.isRequired, // Whether the deck is visible
    toggleDeckVisibility: PropTypes.func.isRequired, // Function to toggle deck visibility
    removePlaylist: PropTypes.func.isRequired, // Function to remove the playlist
};

export default PlaylistCard;