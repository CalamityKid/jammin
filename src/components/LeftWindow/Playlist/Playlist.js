import React from 'react';
import SongCard from '../SongCard/SongCard';


function Playlist() {
    //accepts an array of songInfo objects and returns a deck of SongCard components
    const arrayofSongs = fakeprop.playlistToRender;
    console.log("is this an array? " + Array.isArray(fakeprop.playlistToRender));
    console.log(fakeprop);
    const SongCardDeck = fakeprop.playlistToRender.map( (song) => {
        return <SongCard prop={song} />
    });
    return (
        <>{SongCardDeck}</>
    );
}

export default Playlist;