import React from 'react';
import SearchBar from '../../components/TopWindow/SearchBar/SearchBar';

function TopWindow({setUserBehavior, searchValue, setSearchValue}) {
    
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100px", margin: "20 10"}}>
        <h1>Logo</h1>
        <SearchBar setUserBehavior={setUserBehavior} searchValue = {searchValue} setSearchValue={setSearchValue}/>
        
        </div>
    )
}

export default TopWindow;