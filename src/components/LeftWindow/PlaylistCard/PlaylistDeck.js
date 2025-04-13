import React from 'react';
import PlaylistCard from './PlaylistCard';
import allPlaylists from '../../../Data/Playlist';

function PlaylistDeck() {
    return (
        <div>
            {allPlaylists.listOfPlaylists.map((playlist, index) => (
                <PlaylistCard key={index} playlist={playlist} />
            ))}
        </div>
    );
}

export default PlaylistDeck;