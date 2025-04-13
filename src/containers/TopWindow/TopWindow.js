import React from 'react';
import SearchBar from '../../components/TopWindow/SearchBar/SearchBar';

function TopWindow({setUserBehavior, searchValue, setSearchValue}) {
    
    return (
        <>
        <h1>Logo</h1>
        <SearchBar setUserBehavior={setUserBehavior} searchValue = {searchValue} setSearchValue={setSearchValue}/>
        
        </>
    )
}

export default TopWindow;