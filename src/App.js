import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { inject } from 'mobx-react';
import {Clients , NavBar} from './components';
import CircularProgress from '@material-ui/core/CircularProgress';
const axios = require('axios');

const App = inject('clientsStore')((props) => {
    useEffect(()=>{
      axios.get('http://localhost:4000/clients').then((result) => {
        result.data.forEach(client => {
          props.clientsStore.addClient(client)
        });
      }).catch((err) => {
        console.error(err)
      });
    },[])

    return (
      <Router>
        <NavBar />
        <Route path='/clients' exact render={() => 
          <Clients/>
        }/>
      </Router>
    );
})

export default App;
