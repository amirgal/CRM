import React, {useState} from 'react';

const clientsSearchBar = (props) => {
    
    return (
        <div id="search-bar">
            <input placeholder='Search' onChange={props.handleSearch}></input>
        </div>
    )
}

export default clientsSearchBar