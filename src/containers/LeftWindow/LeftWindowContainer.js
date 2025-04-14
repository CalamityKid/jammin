import React from 'react';
import LeftToggle from '../../components/LeftWindow/LeftToggle/LeftToggle';
import PlaylistDeck from '../../components/LeftWindow/PlaylistCard/PlaylistDeck';
import NewPlaylist from '../../components/LeftWindow/NewPlaylist/NewPlaylist';
function LeftWindowContainer({userBehavior, setUserBehavior, allPlaylists, addPlaylist, removePlaylist, PlaylistCache, songInfo, setSongInfo}) {
    // Displays the left window of the app
    // Left toggle sets and responds to userBehavior state
    // will display search or playlist components on that state.

    const playlistDisplay = [
    <NewPlaylist addPlaylist={addPlaylist} Cache={PlaylistCache} />, 
        <PlaylistDeck allPlaylists={allPlaylists} removePlaylist={removePlaylist} songInfo={songInfo} setSongInfo={setSongInfo} />]
        
    return(
        <>
        <LeftToggle userBehavior={userBehavior} setUserBehavior={setUserBehavior} />
        {userBehavior === "playlist" || userBehavior === "info" ? playlistDisplay : null}
        </>

    );
};

export default LeftWindowContainer;