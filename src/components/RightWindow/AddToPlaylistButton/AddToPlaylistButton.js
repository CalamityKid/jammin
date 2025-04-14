import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewPlaylist from '../../LeftWindow/NewPlaylist/NewPlaylist';

function AddToPlaylistButton({ song, allPlaylists, addPlaylist, PlaylistCache }) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Toggle dropdown visibility

    const handleAddToPlaylist = (playlist) => {
        playlist.addSong(song); // Invoke the playlist's addSong method
        setIsDropdownVisible(false); // Hide the dropdown after adding the song
    };

    return (
        <div style={{ margin: "10px" }}>
            <div
                style={{
                    padding: "10px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    cursor: "pointer",
                    textAlign: "center",
                    borderRadius: "5px",
                }}
                onClick={() => setIsDropdownVisible((prev) => !prev)} // Toggle dropdown visibility
            >
                Add to Playlist
            </div>
            {isDropdownVisible && (
                <div
                    style={{
                        marginTop: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "10px",
                        backgroundColor: "#f9f9f9",
                    }}
                >
                    {allPlaylists.map((playlist) => (
                        <div
                            key={playlist.playlistId}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "5px",
                            }}
                        >
                            <span>{playlist.name}</span>
                            <button
                                onClick={() => handleAddToPlaylist(playlist)}
                                style={{
                                    padding: "5px 10px",
                                    backgroundColor: "#28a745",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Add
                            </button>
                        </div>
                    ))}
                    {/* NewPlaylist component */}
                    <NewPlaylist addPlaylist={addPlaylist} PlaylistCache={PlaylistCache} />
                </div>
            )}
        </div>
    );
}

AddToPlaylistButton.propTypes = {
    song: PropTypes.shape({
        spotifyID: PropTypes.string.isRequired,
        songName: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        inPlaylists: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    allPlaylists: PropTypes.arrayOf(
        PropTypes.shape({
            playlistId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            addSong: PropTypes.func.isRequired,
        })
    ).isRequired,
    addPlaylist: PropTypes.func.isRequired, // Function to add a new playlist
    PlaylistCache: PropTypes.object.isRequired, // Cache object for the playlist
};

export default AddToPlaylistButton;