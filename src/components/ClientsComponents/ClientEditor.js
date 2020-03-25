import React from 'react';
import { inject, observer } from 'mobx-react';
import {List, ListItem, Button, Divider, TextField} from '@material-ui/core';

const ClientEditor = inject('clientsStore')(observer((props) => {
    
    const saveChanges = () => {
        props.setShowEditor(false)
    }
    
    return (
        <form autoComplete="off" noValidate id="client-editor" >
            <List>
                <ListItem>
                    <TextField className="inputfield" id="name" label="Name" type="text" defaultValue={props.client.name}/>
                </ListItem>
                <ListItem>
                    <TextField className="inputfield" id="country" label="Country" type="text" defaultValue={props.client.country}/>
                </ListItem>
                <Divider id="divider" />
                <ListItem id="btns-list-item">
                    <Button color="primary" variant="contained" onClick={saveChanges}>Save Changes</Button>
                </ListItem>
            </List>
        </form>
    )
}))

export default ClientEditor