import React, { useState } from 'react';
import './App.css';
import TopWindow from './containers/TopWindow/TopWindow';
import LeftWindowContainer from './containers/LeftWindow/LeftWindowContainer';

function App() {
  // State to manage user behavior within the app
  const [userBehavior, setUserBehavior] = React.useState("searching");
  // State used to manage SeachBar value, and to make API calls
  const [searchValue, setSearchValue] = useState(""); // 
  
  return (
    <div className="App">
      {/* TopWindow component */}
      <TopWindow setUserBehavior={setUserBehavior} searchValue={searchValue} setSearchValue={setSearchValue}/>
      <p>Current Behavior: {userBehavior}</p>
      <p>Search Value: {searchValue}</p>
      <LeftWindowContainer userBehavior={userBehavior} setUserBehavior={setUserBehavior}/>
      

    </div>
  );
}

export default App;
