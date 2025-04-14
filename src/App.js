import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TopWindow from './containers/TopWindow/TopWindow';
import LeftWindowContainer from './containers/LeftWindow/LeftWindowContainer';
import Playlist from './Data/Playlist'; // Importing playlist data
import Cache from './Data/Cache';
import SearchCache from './Data/APIComputer'; // Importing search cache data
import RightWindowContainer from './containers/RightWindow/RightWindowContainer';

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

  const removePlaylist = (playlistId) => {
    // Find the playlist to be removed
    const playlistToRemove = allPlaylists.find((playlist) => playlist.playlistId === playlistId);

    if (playlistToRemove) {
        // Call removeFromPlaylist on each song in the playlist
        playlistToRemove.songs.forEach((spotifyID) => {
            const song = PlaylistCache.retrieveSong(spotifyID);
            if (song) {
                // Keep removing the song from the playlist until it's no longer in it
                while (playlistToRemove.songs.includes(spotifyID)) {
                    song.removeFromPlaylist(playlistId);
                }
            }
        });

        // Remove the playlist from the allPlaylists array
        setAllPlaylists((prevPlaylists) =>
            prevPlaylists.filter((playlist) => playlist.playlistId !== playlistId)
        );
    }
};


  const isInitialized = useRef(false);
// Initialize playlists and songs using useEffect
  useEffect(() => {
    if (isInitialized.current) return; // Prevent running the logic twice
    isInitialized.current = true;

  // Create and populate the first playlist
  const pl1 = addPlaylist("My Playlist 1", PlaylistCache, 0);
  pl1.addSong(SearchCache.retrieveSong("spotifyid1"));
  console.log("in playlist names: ", SearchCache.retrieveSong("spotifyid1").inPlaylistNames())
  pl1.addSong(SearchCache.retrieveSong("spotifyid2"));
  pl1.addSong(SearchCache.retrieveSong("spotifyid3"));

  // Create and populate the second playlist
  const pl2 = addPlaylist("My Playlist 2", PlaylistCache, 1);
  pl2.addSong(SearchCache.retrieveSong("spotifyid4"));
  pl2.addSong(SearchCache.retrieveSong("spotifyid5"));
  pl1.addSong(SearchCache.retrieveSong("spotifyid5"));
}, []);


  return (
    <div className="App">

      {/* TopWindow component */}
    <div className="TopWindow">
      <TopWindow setUserBehavior={setUserBehavior} searchValue={searchValue} setSearchValue={setSearchValue}/>
      <p>Current Behavior: {userBehavior}</p>
      <p>Search Value: {searchValue}</p>
      <p>Playlist Counter: {playlistCounter}</p>
    </div>

    <div className="SideBySide">

      {/* LeftWindow component */}
      <div className="LeftWindowContainer">
      <LeftWindowContainer allPlaylists={allPlaylists} 
      PlaylistCache= {PlaylistCache} addPlaylist={addPlaylist}
      removePlaylist= {removePlaylist} songInfo={songInfo} setSongInfo={setSongInfo}
      userBehavior={userBehavior} setUserBehavior={setUserBehavior}/>
      </div>

      <div className="RightWindowContainer">
      <RightWindowContainer songInfo={songInfo} 
      allPlaylists={allPlaylists}
      addPlaylist={addPlaylist} 
      PlaylistCache={PlaylistCache}/>
      </div>
    
    </div>
      

    </div>
  );
}

export default App;
