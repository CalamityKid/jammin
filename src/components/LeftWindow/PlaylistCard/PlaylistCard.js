import React from 'react';

const fakeprop = {
    playlistToRender : [
        {name:"song1", artist: "artist1"},
        {name:"song2", artist: "artist2"},
        {name:"song3", artist: "artist3"},
        {name:"song4", artist: "artist4"},
        {name:"song5", artist: "artist5"}, 
    ]
};

const arrayofSongs = fakeprop.playlistToRender;
const anotherarray = [
    {name:"song1", artist: "artist1"},
    {name:"song2", artist: "artist2"},
    {name:"song3", artist: "artist3"},
    {name:"song4", artist: "artist4"},
    {name:"song5", artist: "artist5"}, 
]

console.log(Array.isArray(fakeprop.playlistToRender));
console.log(Array.isArray(arrayofSongs));
console.log(typeof(anotherarray));