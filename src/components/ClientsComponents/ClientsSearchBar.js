import React, {useState} from 'react';

const clientsSearchBar = (props) => {
    
    return (
        <div id="search-bar">
            <input placeholder='Search' defaultValue={''} onChange={props.handleSearch}></input>
        </div>
    )
}

export default clientsSearchBar