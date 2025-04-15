import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NewPlaylist({ addPlaylist, Cache }) {
    const [isInputVisible, setIsInputVisible] = useState(false); // Toggle input visibility
    const [playlistName, setPlaylistName] = useState(""); // Track input value

    const handleCreatePlaylist = () => {
        if (playlistName.trim() === "") return; // Do nothing if input is empty
        addPlaylist(playlistName, Cache); // Create a new playlist
        setPlaylistName(""); // Clear the input field
        setIsInputVisible(false); // Hide the input field
    };

    const toggleInputVisibility = () => {
        setIsInputVisible((prev) => !prev); // Toggle visibility
        setPlaylistName(""); // Clear the input field when toggling
    };

    return (
        <div style={{ margin: "10px" }}>
            <div
                style={{
                    padding: "10px",
                    backgroundColor: "#EE371F",
                    color: "white",
                    cursor: "pointer",
                    textAlign: "center",
                    borderRadius: "5px",
                }}
                onClick={toggleInputVisibility} // Toggle input visibility on click
            >
                New Playlist
            </div>
            {isInputVisible && (
                // Display input and button when input is visible
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
                    <input
                        type="text"
                        value={playlistName}
                        onChange={(e) => setPlaylistName(e.target.value)} // Update input value
                        placeholder="New playlist name"
                        style={{
                            padding: "5px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            flex: "1",
                        }}
                    />
                    <button
                        onClick={handleCreatePlaylist}
                        style={{
                            padding: "5px 10px",
                            backgroundColor: "#28a745",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: playlistName.trim() ? "pointer" : "not-allowed",
                            opacity: playlistName.trim() ? "1" : "0.6",
                        }}
                    >
                        Create
                    </button>
                </div>
            )}
        </div>
    );
}

NewPlaylist.propTypes = {
    addPlaylist: PropTypes.func.isRequired, // Function to add a new playlist
    Cache: PropTypes.object.isRequired, // Cache object for the playlist
};

export default NewPlaylist;