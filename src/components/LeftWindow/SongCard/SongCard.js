import React from 'react';

function SongCard({name, artist}){
    //should accept an object songInfo with a song name and an artist, maybe a picture later

    return(
        <div style={{color:"#EE371F", border:5, borderColor:"rgb(190, 21, 159)"}}>
            <h2>{name}</h2>
            <h3>{artist}</h3>
        </div>

    );
};

export default SongCard;