import React, { useState } from 'react';

function SearchBar({ setUserBehavior, searchValue, setSearchValue }) {

    const handleChange = (event) => {
        setSearchValue(event.target.value); // Update the input field value
        setUserBehavior("searching"); // Set userBehavior to "searching"
    };

    return (
        <input
            type="text"
            value={searchValue}
            onChange={handleChange}
            placeholder="Seek forth!"
        />
    );
}

export default SearchBar;