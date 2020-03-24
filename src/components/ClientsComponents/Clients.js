import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Client from './Client';
import ClientsHeader from './ClientsHeader';
import ClientEditor from './ClientEditor';

const Clients = inject('clientsStore')(observer((props) => {
    const [showEditor, setShowEditor] = useState(false)

    return (
        <div id="clients-page">
            <div id="clients-table">
                <ClientsHeader/>
                {props.clientsStore.clients.map(c => 
                    <Client key={c.id} setShowEditor={() => setShowEditor} client={c}/>)}
            </div>
            {showEditor ? <ClientEditor setShowEditor={() => setShowEditor}/> : null}
        </div>
    )
}))

export default Clients
