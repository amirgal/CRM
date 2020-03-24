import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
    const history = useHistory()
    return (
        <div id='navbar'>
            <div className="nav-item" onClick={() => history.push('/clients')}>CLIENTS</div>
            <div className="nav-item" onClick={() => history.push('/actions')}>ACTIONS</div>
            <div className="nav-item" onClick={() => history.push('/analytics')}>ANALYTICS</div>
        </div>
    )
}

export default NavBar