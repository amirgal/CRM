import React from 'react';
import { inject, observer } from 'mobx-react';
import {List, ListItem, Button, TextField} from '@material-ui/core';


@inject('clientsStore')
@observer
class AddClient extends React.Component{
    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            country:'',
            owner:'',
        }
    }

    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }
    
    render(){
        return (
            <div id="add-client-container">
                <h4>ADD CLIENT</h4>
                <form autoComplete="off" noValidate id="add-client" >
                <List>
                    <ListItem>
                        <TextField className="inputfield" id="name"
                        onChange={this.handleChange} label="Name" type="text"/>
                    </ListItem>
                    <ListItem>
                        <TextField className="inputfield" id="email"
                        onChange={this.handleChange} label="Email" type="text"/>
                    </ListItem>
                    <ListItem>
                        <TextField className="inputfield" id="country"
                        onChange={this.handleChange} label="Country" type="text"/>
                    </ListItem>
                    <ListItem>
                        <TextField className="inputfield" id="owner"
                        onChange={this.handleChange} label="Owner" type="text"/>
                    </ListItem>
                    <ListItem id="btns-list-item">
                        <Button color="primary" variant="contained"
                        onClick={()=>this.props.clientsStore.addClient(this.state)}>Add New Client</Button>
                    </ListItem>
                </List>
            </form>
            </div>
        )
    }
}

export default AddClient
