import React from 'react';
import PropTypes from 'prop-types';

// This component is responsible for displaying a single song card.
// It accepts a Song object as a prop and displays its name and artist, maybe add pic later.
function SongCard({song, songInfo, setSongInfo, playlist, onSongRemoved, index}){

    const { songName, artist } = song; // Destructure the song object to get the name and artist
    return(
        <div style={{color:"#EE371F", border: "5px solid rgb(190, 21, 159)"}}
        onClick={() => songInfo === song ? setSongInfo(null):setSongInfo(song)}>
            <h2>{songName}</h2>
            <h3>{artist}</h3>
            <p
                className="RemovePlaylist"
                style={{ textDecoration: "underline", cursor: "pointer", color: "blue" }}
                onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent onClick
                    song.removeFromPlaylist(playlist.playlistId);
                    onSongRemoved(song, index);
                }}
            >
                [Remove from Playlist]
            </p>
        </div>

    );
};

SongCard.propTypes = {
    song: PropTypes.shape({
        songName: PropTypes.string.isRequired, // songName must be a string and is required
        artist: PropTypes.string.isRequired,   // artist must be a string and is required
    }).isRequired, // song object itself is required
    songInfo: PropTypes.object, // songInfo can be an object or null
    setSongInfo: PropTypes.func.isRequired, // setSongInfo must be a function and is required
    playlist: PropTypes.shape({
        playlistId: PropTypes.number.isRequired, // playlistId must be a number and is required
        removeSong: PropTypes.func.isRequired,   // removeSong must be a function and is required
    }).isRequired, // playlist object itself is required
};

export default SongCard;