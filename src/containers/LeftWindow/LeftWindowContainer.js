import React from 'react';
import LeftToggle from '../../components/LeftWindow/LeftToggle/LeftToggle';
import PlaylistDeck from '../../components/LeftWindow/PlaylistCard/PlaylistDeck';
function LeftWindowContainer({userBehavior, setUserBehavior, allPlaylists}) {
    // Displays the left window of the app
    // Left toggle sets and responds to userBehavior state
    // will display search or playlist components on that state.

    return(
        <>
        <LeftToggle userBehavior={userBehavior} setUserBehavior={setUserBehavior} />
        {userBehavior === "playlist" || userBehavior === "info" ? <PlaylistDeck allPlaylists={allPlaylists} /> : null}
        </>

    );
};

export default LeftWindowContainer;