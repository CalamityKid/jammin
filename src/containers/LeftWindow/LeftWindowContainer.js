import React from 'react';
import LeftToggle from '../../components/LeftWindow/LeftToggle/LeftToggle';
import PlaylistDeck from '../../components/LeftWindow/PlaylistCard/PlaylistDeck';
import NewPlaylist from '../../components/LeftWindow/NewPlaylist/NewPlaylist';
function LeftWindowContainer({userBehavior, setUserBehavior, allPlaylists, addPlaylist, playlistCache}) {
    // Displays the left window of the app
    // Left toggle sets and responds to userBehavior state
    // will display search or playlist components on that state.

    const playlistDisplay = [
    <NewPlaylist addPlaylist={addPlaylist} playlistCache={playlistCache} />, 
        <PlaylistDeck allPlaylists={allPlaylists} />]
        
    return(
        <>
        <LeftToggle userBehavior={userBehavior} setUserBehavior={setUserBehavior} />
        {userBehavior === "playlist" || userBehavior === "info" ? playlistDisplay : null}
        </>

    );
};

export default LeftWindowContainer;