import React from 'react';
import SearchBar from '../../components/TopWindow/SearchBar/SearchBar';
import styles from './TopWindow.module.css';

function TopWindow(){
    
    return (
        <>
        <h1 style={styles.h1}>Logo</h1>
        <SearchBar className={styles.searchBar}/>
        
        </>
    )
}

export default TopWindow;