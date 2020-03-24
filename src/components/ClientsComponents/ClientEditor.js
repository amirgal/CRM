import React, {useState} from 'react';
import { inject, observer } from 'mobx-react';

const ClientEditor = inject('clientsStore')(observer((props) => {
    
    return (
        <div id="client-editor">edit here</div>
    )
}))

export default ClientEditor