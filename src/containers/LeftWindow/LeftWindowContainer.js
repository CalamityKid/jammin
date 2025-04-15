import React from 'react';
import LeftToggle from '../../components/LeftWindow/LeftToggle/LeftToggle';
import PlaylistDeck from '../../components/LeftWindow/PlaylistCard/PlaylistDeck';
import NewPlaylist from '../../components/LeftWindow/NewPlaylist/NewPlaylist';
import SongCardDeck from '../../components/LeftWindow/SongCard/SongCardDeck';
function LeftWindowContainer({userBehavior, setUserBehavior, allPlaylists, addPlaylist, removePlaylist, PlaylistCache, songInfo, setSongInfo, searchPlaylist}) {
    // Displays the left window of the app
    // Left toggle sets and responds to userBehavior state
    // will display search or playlist components on that state.
    const searchSongArray = searchPlaylist.retrieveAllSongs();

    const playlistDisplay = [
    <NewPlaylist addPlaylist={addPlaylist} Cache={PlaylistCache} />, 
        <PlaylistDeck allPlaylists={allPlaylists} removePlaylist={removePlaylist} songInfo={songInfo} setSongInfo={setSongInfo} />]
    

    const searchDisplay = <SongCardDeck key={0} songs={searchSongArray} songInfo={songInfo} setSongInfo={setSongInfo} playlist={searchPlaylist} />
    return(
        <>
        <LeftToggle userBehavior={userBehavior} setUserBehavior={setUserBehavior} />
        {userBehavior === "playlist" || userBehavior === "info" ? playlistDisplay : searchDisplay}
        </>

    );
};

export default LeftWindowContainer;