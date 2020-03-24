import React from 'react';
import { inject, observer } from 'mobx-react';
import Client from './Client';
import ClientsHeader from './ClientsHeader';

const Clients = inject('clientsStore')(observer((props) => {
    
    return (
        <div id="clients-table">
            <ClientsHeader/>
            {props.clientsStore.clients.map(c => 
                <Client key={c.id} client={c}/>)}
        </div>
    )
}))

export default Clients
