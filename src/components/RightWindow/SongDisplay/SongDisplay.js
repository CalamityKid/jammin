import React from 'react';
import PropTypes from 'prop-types';

function SongDisplay({ song }) {
    const { songName, artist } = song;

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            {/* White square */}
            <div
                style={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: "white",
                    border: "2px solid black",
                    margin: "0 auto",
                }}
            ></div>
            {/* Song details */}
            <h2 style={{ margin: "10px 0 5px" }}>{songName}</h2>
            <h3 style={{ margin: "0", color: "gray" }}>{artist}</h3>
        </div>
    );
}

SongDisplay.propTypes = {
    song: PropTypes.shape({
        songName: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
    }).isRequired,
};

export default SongDisplay;