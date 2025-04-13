import React from 'react';
import PropTypes from 'prop-types';

// This component is responsible for displaying a single song card.
// It accepts a Song object as a prop and displays its name and artist, maybe add pic later.
function SongCard({song}){

    const { songName, artist } = song; // Destructure the song object to get the name and artist
    return(
        <div style={{color:"#EE371F", border: "5px solid rgb(190, 21, 159)"}}>
            <h2>{songName}</h2>
            <h3>{artist}</h3>
        </div>

    );
};

SongCard.propTypes = {
    song: PropTypes.shape({
        songName: PropTypes.string.isRequired, // songName must be a string and is required
        artist: PropTypes.string.isRequired,   // artist must be a string and is required
    }).isRequired, // song object itself is required
};


export default SongCard;