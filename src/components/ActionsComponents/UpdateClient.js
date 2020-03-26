import React from 'react';
import { inject, observer } from 'mobx-react';
import {List, ListItem, Button, TextField, Checkbox} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {CheckBox as CheckBoxIcon, CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon} from '@material-ui/icons'
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

@inject('clientsStore')
@observer
class UpdateClient extends React.Component{
    constructor(){
        super()
        this.state = {
            chosenClientsIds: [],
            owner:'',
            emailType:''
        }
    }

    setChosenClients = (e,v) => {
        const chosenClientsIds = v.map(c => c.id)
        this.setState({chosenClientsIds})
    }

    setOwner = (e,v) => {
        this.setState({owner: v.name})
    }

    setEmailType = (e,v) => {
        this.setState({emailType: v.type})
    }
    
    declareSale = () => {
        this.props.clientsStore.declareSale(this.state.chosenClientsIds)
    }

    updateClient = (key) => {
        this.state.chosenClientsIds.forEach(cId => {
            this.props.clientsStore.editClient({id:cId, [key]: this.state[key]})
        })
    }

    render(){
        return (
            <div id="add-client-container">
                <h4>UPDATE CLIENT</h4>
                <form autoComplete="off" noValidate id="update-client" >
                <List>
                    <ListItem>
                        <Autocomplete
                            multiple onChange={this.setChosenClients}
                            id="chosen-clients"
                            options={this.props.clientsStore.clients}
                            disableCloseOnSelect
                            getOptionLabel={option => option.name}
                            renderOption={(option, { selected }) => (
                                <React.Fragment>
                                    <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                    />
                                    {option.name}
                                </React.Fragment>
                            )}
                            style={{ width: 500 }}
                            renderInput={params => (
                                <TextField {...params} variant="outlined" label="Client Name"/>
                            )}
                        />
                    </ListItem>
                    <ListItem>
                        <div className="update-client-row" id="update-owner">
                            <Autocomplete
                                id="select-owner"
                                onChange={this.setOwner}
                                options={this.props.clientsStore.owners}
                                getOptionLabel={option => option.name}
                                style={{ width: 300 }}
                                renderInput={params => <TextField {...params}
                                    label="Select Owner"/>}
                            />
                            <Button color='primary' variant='outlined'
                            onClick={() => this.updateClient('owner')}>Transfer Ownership</Button>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div className="update-client-row">
                            <Autocomplete
                                id="select-email-type"
                                onChange={this.setEmailType}
                                options={this.props.clientsStore.emailTypes}
                                getOptionLabel={option => option.type}
                                style={{ width: 300 }}
                                renderInput={params => <TextField {...params}
                                    label="Select Email To Send"/>}
                            />
                            <Button color='primary' variant='outlined'
                            onClick={() => this.updateClient('emailType')}>Send Email</Button>
                        </div>
                    </ListItem>
                    <ListItem>
                        <Button color='primary' variant='contained' 
                        onClick={this.declareSale}>Declare Sale!</Button>
                    </ListItem>
                </List>
            </form>
            </div>
        )
    }
}

export default UpdateClient