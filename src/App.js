import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import { useEffect } from 'react';
import { inject } from 'mobx-react';
import {Clients} from './components';
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
          <div id="clients-page"><Clients/></div>
        }/>
      </Router>
    );
})

export default App;
