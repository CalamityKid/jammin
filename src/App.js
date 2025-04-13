import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TopWindow from './containers/TopWindow/TopWindow';
import LeftWindowContainer from './containers/LeftWindow/LeftWindowContainer';
import Playlist from './Data/Playlist'; // Importing playlist data
import Cache from './Data/Cache';
import SearchCache from './Data/APIComputer'; // Importing search cache data

const PlaylistCache = new Cache(); // Create a cache for the playlist

function App() {
  // State to manage user behavior within the app
  const [userBehavior, setUserBehavior] = React.useState("searching");

  // State used to manage SeachBar value, and to make API calls
  const [searchValue, setSearchValue] = useState(""); // 
  const [songInfo, setSongInfo] = useState(null); // State to manage song information

  // State to manage all playlists
  const [allPlaylists, setAllPlaylists] = useState([]);
  const [playlistCounter, setPlaylistCounter] = useState(0); // to create unique playlist IDs

  const addPlaylist = (playlistName, cache, playlistId = playlistCounter) => {
    const newPlaylist = new Playlist(playlistName, cache, playlistId);
    setAllPlaylists((prevPlaylists) => [...prevPlaylists, newPlaylist]);
    setPlaylistCounter((prevCounter) => prevCounter + 1); // Increment the counter
  return newPlaylist;
  }


  const isInitialized = useRef(false);
// Initialize playlists and songs using useEffect
  useEffect(() => {
    if (isInitialized.current) return; // Prevent running the logic twice
    isInitialized.current = true;

  //const PlaylistCache = new Cache(); // Create a cache for the playlist

  // Create and populate the first playlist
  const pl1 = addPlaylist("My Playlist 1", PlaylistCache, 0);
  pl1.addSong(SearchCache.retrieveSong("spotifyid1"));
  pl1.addSong(SearchCache.retrieveSong("spotifyid2"));
  pl1.addSong(SearchCache.retrieveSong("spotifyid3"));

  // Create and populate the second playlist
  const pl2 = addPlaylist("My Playlist 2", PlaylistCache, 1);
  pl2.addSong(SearchCache.retrieveSong("spotifyid4"));
  pl2.addSong(SearchCache.retrieveSong("spotifyid5"));
}, []);


  return (
    <div className="App">
      {/* TopWindow component */}
      <TopWindow setUserBehavior={setUserBehavior} searchValue={searchValue} setSearchValue={setSearchValue}/>
      <p>Current Behavior: {userBehavior}</p>
      <p>Search Value: {searchValue}</p>
      <p>Playlist Counter: {playlistCounter}</p>
      <LeftWindowContainer allPlaylists={allPlaylists} 
      PlaylistCache= {PlaylistCache} addPlaylist={addPlaylist} 
      userBehavior={userBehavior} setUserBehavior={setUserBehavior}/>
      

    </div>
  );
}

export default App;
