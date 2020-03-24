import React from 'react';
import { observer } from 'mobx-react';

const Client = observer((props) => {
    
    return (
        <div className="client-row">
            <div className="client-row-item">{props.client.name}</div>
            <div className="client-row-item">{props.client.country}</div>
            <div className="client-row-item">{props.client.firstContact.substring(0,9)}</div>
            <div className="client-row-item">{props.client.emailType}</div>
            <div className="client-row-item">{props.client.sold}</div>
            <div className="client-row-item">{props.client.owner}</div>
        </div>
    )
})

export default Client