import React from 'react';
import LeftToggle from '../../components/LeftWindow/LeftToggle/LeftToggle';
import PlaylistDeck from '../../components/LeftWindow/PlaylistCard/PlaylistDeck';
function LeftWindowContainer({userBehavior, setUserBehavior}) {
    // this should change what is being displayed under the left toggle depending
    //on the LeftWSelection state that is defined in LeftToggle "search" OR "playlist"

    return(
        <>
        <LeftToggle userBehavior={userBehavior} setUserBehavior={setUserBehavior} />
        {userBehavior === "playlist" || userBehavior === "info" ? <PlaylistDeck /> : null}
        </>

    );
};

export default LeftWindowContainer;