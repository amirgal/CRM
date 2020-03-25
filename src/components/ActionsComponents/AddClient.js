import React from 'react';
import { inject, observer } from 'mobx-react';
import {List, ListItem, Button, TextField} from '@material-ui/core';

const AddClient = inject('clientsStore', 'clientInputsStore')(observer((props) => {
    
    return (
        <div>
            <form autoComplete="off" noValidate id="add-client" >
            <List>
                <ListItem>
                    <TextField className="inputfield" id="name"
                    onChange={props.clientInputsStore.handleChange} label="Name" type="text"/>
                </ListItem>
                <ListItem>
                    <TextField className="inputfield" id="email"
                    onChange={props.clientInputsStore.handleChange} label="Email" type="text"/>
                </ListItem>
                <ListItem>
                    <TextField className="inputfield" id="country"
                    onChange={props.clientInputsStore.handleChange} label="Country" type="text"/>
                </ListItem>
                <ListItem>
                    <TextField className="inputfield" id="owner"
                    onChange={props.clientInputsStore.handleChange} label="Owner" type="text"/>
                </ListItem>
                <ListItem id="btns-list-item">
                    <Button color="primary" variant="contained"
                    onClick={props.clientInputsStore.addClient}>Add New Client</Button>
                </ListItem>
            </List>
        </form>
        </div>
    )
}))

export default AddClient