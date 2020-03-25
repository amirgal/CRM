import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Client from './Client';
import ClientsHeader from './ClientsHeader';
import ClientEditor from './ClientEditor';
import ClientsSearchBar from './ClientsSearchBar'
import CircularProgress from '@material-ui/core/CircularProgress';

const Clients = inject('clientsStore')(observer((props) => {
    const [showEditor, setShowEditor] = useState(false)
    const [editedClient, setEditedClient] = useState({})
    const [clients, setClients] = useState(props.clientsStore.clients)
    
    const handleSearch = input => {
        setClients(props.clientsStore.clients.filter(c => c.name.toLowerCase().includes(input)))
    }

    

    return (
        <div id="clients-page">
            <ClientsSearchBar handleSearch={handleSearch}/>
            {clients.length === 0 ? <CircularProgress/> : 
                <div id="clients-table">
                    <ClientsHeader/>
                    {clients.map(c => 
                        <Client key={c.id} setEditedClient={setEditedClient} setShowEditor={setShowEditor} client={c}/>)}
                </div>
            }
            {showEditor ? <ClientEditor client={editedClient} setShowEditor={setShowEditor} /> : null}
        </div>
    )
}))

export default Clients
