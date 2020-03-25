import React, {useState} from 'react';
import { inject, observer } from 'mobx-react';
import {List, ListItem, Button, Divider, TextField} from '@material-ui/core';

const AddClient = inject('clientsStore')(observer((props) => {
    
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [country,setCountry] = useState('')
    const [owner,setOwner] = useState('')

    return (
        <div>
            <form autoComplete="off" noValidate id="add-client" >
            <List>
                <ListItem>
                    <TextField className="inputfield" id="name" label="Name" type="text"/>
                </ListItem>
                <ListItem>
                    <TextField className="inputfield" id="email" label="Email" type="text"/>
                </ListItem>
                <ListItem>
                    <TextField className="inputfield" id="country" label="Country" type="text"/>
                </ListItem>
                <ListItem>
                    <TextField className="inputfield" id="owner" label="Owner" type="text"/>
                </ListItem>
                <ListItem id="btns-list-item">
                    <Button color="primary" variant="contained">Add New Client</Button>
                </ListItem>
            </List>
        </form>
        </div>
    )
}))

export default AddClient