import React from 'react';

function LeftToggle({userBehavior, setUserBehavior}) {
    //this component requires the userBehavior State and the LeftWSelection state
    //on click it should toggle and change display of the LeftWindow Container

    const shadowStyle = {
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    };

    return (
        <span style={{ display: "flex", width: 600 }}>
            <div
                style={{
                    backgroundColor: "#EE371F",
                    width: "50%",
                    cursor: "pointer",
                    ...(userBehavior === "searching" ? shadowStyle : {}), // Apply shadow if userBehavior is "searching"
                }}
                onClick={() => setUserBehavior("searching")}
            >
                Search
            </div>
            <div
                style={{
                    backgroundColor: "#EE284F",
                    width: "50%",
                    cursor: "pointer",
                    ...(userBehavior === ("playlist" || "info")  ? shadowStyle : {}), // Apply shadow if userBehavior is "playlist"
                }}
                onClick={() => setUserBehavior("playlist")}
            >
                Playlists
            </div>
        </span>
    );
};

export default LeftToggle;