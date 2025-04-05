import React from 'react';

function LeftToggle(props) {
    //this component requires the userBehavior State and the LeftWSelection state
    //on click it should toggle and change display of the LeftWindow Container

    return (

        <span style={{display: "flex", width: 600}}>
        <div style={{backgroundColor:"#EE371F", width: "50%"}}>Search</div>
        <div style={{backgroundColor:"#EE284F", width: "50%"}}>Playlists</div>
        </span>


    );
};

export default LeftToggle;