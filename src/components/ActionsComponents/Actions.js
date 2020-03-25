import React from 'react';
import { inject, observer } from 'mobx-react';
import AddClient from './AddClient';

const Actions = inject('clientsStore')(observer((props) => {
    
    return (
        <div id="actions-page">
            <AddClient/>
        </div>
    )
}))

export default Actions