import React from 'react';
import LeftToggle from '../../components/LeftWindow/LeftToggle/LeftToggle';

function LeftWindowContainer(){
    // this should change what is being displayed under the left toggle depending
    //on the LeftWSelection state that is defined in LeftToggle "search" OR "playlist"

    return(
        <>
        <LeftToggle />
        </>

    );
};

export default LeftWindowContainer;