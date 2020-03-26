import React from 'react';
import { inject, observer } from 'mobx-react';
import {List, ListItem, Button, TextField, Checkbox} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {CheckBox as CheckBoxIcon, CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon} from '@material-ui/icons'
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

@inject('clientsStore')
@observer
class UpdateClient extends React.Component{
    constructor(){
        super()
        this.state = {
            chosenClientsIds: []
        }
    }

    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }
    setChosenClients = (e,v) => {
        const chosenClientsIds = v.map(c => c.id)
        this.setState({chosenClientsIds})
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
                   
                </List>
            </form>
            </div>
        )
    }
}

export default UpdateClient