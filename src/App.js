import React, { useState, useEffect, useRef } from 'react';
import './App.css';
//import API functions
import { updateSearchValue, triggerAPICall, returnStringifiedTracks } from './API/Spotify';
import populateCacheFromJSON from './Data/APIComputer';
//import data structures
import Playlist from './Data/Playlist';
import Cache from './Data/Cache';
//import components
import TopWindow from './containers/TopWindow/TopWindow';
import LeftWindowContainer from './containers/LeftWindow/LeftWindowContainer';
import RightWindowContainer from './containers/RightWindow/RightWindowContainer';
//create Caches
const PlaylistCache = new Cache(); // Cache for the playlist
const SearchCache = new Cache(); // Cache for Search Results

function App() {
  const [userBehavior, setUserBehavior] = React.useState("searching"); // mandates display flow of components
  const [searchValue, setSearchValue] = useState(""); // Top Window search value, used to make API calls
  const [songInfo, setSongInfo] = useState(null); // Song information displayed in right window
  const [searchPlaylist, setSearchPlaylist] = useState(new Playlist("Search", SearchCache, 0)); // Playlist created from search results

  // States to manage all playlists
  const [allPlaylists, setAllPlaylists] = useState([]);
  const [playlistCounter, setPlaylistCounter] = useState(0); // to create unique playlist IDs

  // Playlist functions
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

        setAllPlaylists((prevPlaylists) =>
            prevPlaylists.filter((playlist) => playlist.playlistId !== playlistId)
        );
    }
};

//UseEffect to handle search value changes and API calls
useEffect(() => {
  if (!searchValue) return;

  const timeoutId = setTimeout(async () => {
    try {
      // Update the search value in Spotify.js
      updateSearchValue(searchValue);

      // Trigger the API call and get the profile
      let rawTracks = await triggerAPICall();
      const parsed = JSON.parse(rawTracks); // Parse the raw tracks

      // Add to SearchCache and return song object array
      let searchedSongs = populateCacheFromJSON(parsed, SearchCache);

      // Create a new playlist and add the songs to it
      const newPlaylist = new Playlist("Search", SearchCache, 0)
      searchedSongs.forEach((song) => {
        newPlaylist.addSong(song);
      });
      setSearchPlaylist(newPlaylist); // Update the state with the new playlist

    } catch (error) {
      console.error("Error during search and playlist creation:", error);
    }
  }, 1000); // Wait for 1 second before executing

  return () => clearTimeout(timeoutId); // Cleanup timeout if searchValue changes
}, [searchValue]);

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
      userBehavior={userBehavior} setUserBehavior={setUserBehavior} searchPlaylist={searchPlaylist}/>
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
