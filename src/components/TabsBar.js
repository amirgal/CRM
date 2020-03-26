import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Tabs, Tab} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
    flexGrow: 1,
    },
});

export default function TabsBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return ( 
        // paper className={classes.root}
        <Paper id="tabs-bar"> 
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
            >
            <Tab label="Clients" onClick={() => history.push('/clients')}/>
            <Tab label="Actions" onClick={() => history.push('/actions')}/>
            <Tab label="Analytics" onClick={() => history.push('/analytics')}/>
            </Tabs>
        </Paper>
    );
}
