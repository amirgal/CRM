import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import {List, ListItem, Button, Divider, TextField} from '@material-ui/core';

const ClientEditor = inject('clientsStore')(observer((props) => {
    
    const [inputValues, setInputValues] = useState({
        name: props.client.name,
        country: props.client.country
    })
    const handleInputChange = e => {
        const {id,value} = e.target
        setInputValues({...inputValues, [id]: value})
    }

    const saveChanges = () => {
        props.setShowEditor(false)
        props.clientsStore.editClient({...inputValues,id:props.client.id})
    }
    
    return (
        <form autoComplete="off" noValidate id="client-editor" >
            <List>
                <ListItem>
                    <TextField className="inputfield" id="name" label="Name"
                     type="text" value={inputValues.name} onChange={handleInputChange}/>
                </ListItem>
                <ListItem>
                    <TextField className="inputfield" id="country" label="Country"
                     type="text" value={inputValues.country} onChange={handleInputChange}/>
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