import React from 'react';
import { inject, observer } from 'mobx-react';
import AddClient from './AddClient';
import UpdateClient from './UpdateClient';

const Actions = inject('clientsStore')(observer((props) => {
    
    return (
        <div id="actions-page">
            <UpdateClient/>
            <AddClient/>
        </div>
    )
}))

export default Actions