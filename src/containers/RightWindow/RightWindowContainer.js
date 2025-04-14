import React from 'react';
import PropTypes from 'prop-types';
import SongDisplay from '../../components/RightWindow/SongDisplay/SongDisplay';

function RightWindowContainer({ songInfo, allPlaylists, addPlaylist, PlaylistCache }) {
    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
            {songInfo ? (
                // Pass songInfo to the SongDisplay component if it's not null
                <SongDisplay song={songInfo} 
                allPlaylists={allPlaylists}
                addPlaylist={addPlaylist} 
                Cache={PlaylistCache}/>
            ) : (
                // Display a message if songInfo is null
                <h2 style={{ textAlign: "center", color: "gray" }}>
                    NO SONG INFO BEING SHOWN ATM
                </h2>
            )}
        </div>
    );
}

RightWindowContainer.propTypes = {
    songInfo: PropTypes.object, // songInfo can be an object or null
};

export default RightWindowContainer;