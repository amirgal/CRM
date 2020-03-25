import React, {useState} from 'react';

const ClientsSearchBar = (props) => {
    const [input,setInput] = useState('')

    const handleSearch = e => {
        setInput(e.target.value)
        props.handleSearch(e.target.value)
    }

    return (
        <div id="search-bar">
            <input placeholder='Search' value={input} onChange={handleSearch}></input>
        </div>
    )
}

export default ClientsSearchBar
