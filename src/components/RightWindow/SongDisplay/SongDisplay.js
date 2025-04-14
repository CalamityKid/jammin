import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddToPlaylistButton from '../AddToPlaylistButton/AddToPlaylistButton';

function SongDisplay({ song, allPlaylists, addPlaylist, PlaylistCache }) {
    const { songName, artist, inPlaylists } = song;

    // Local state to track the song's playlists
    const [playlists, setPlaylists] = useState(song.inPlaylists);

    // Update the local state whenever the song's playlists change
    useEffect(() => {
        setPlaylists(song.inPlaylists);
    }, [song.inPlaylists]);

    // Get unique playlist names
    const uniquePlaylists = [...new Set(playlists.map((playlist) => playlist.name))];


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

            {/* Included in Playlists */}
            {uniquePlaylists.length > 0 && (
                <div style={{ marginTop: "10px", color: "gray" }}>
                    <span>Included in: {uniquePlaylists.join(", ")}</span>
                </div>
            )}
                
                {/* Add to Playlist Button */}  
                <AddToPlaylistButton
                    song={song}
                    allPlaylists={allPlaylists}
                    addPlaylist={addPlaylist} 
                    PlaylistCache={PlaylistCache} />
        </div>
    );
}

SongDisplay.propTypes = {
    song: PropTypes.shape({
        songName: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        inPlaylists: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string, // Validate that each playlist object has a name property
            })
        ),
    }).isRequired,
};

export default SongDisplay;