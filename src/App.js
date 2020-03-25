import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { inject } from 'mobx-react';
import {Clients , NavBar, Actions} from './components';

const App = inject('clientsStore')((props) => {

    useEffect(()=>{
      props.clientsStore.loadClients()
    },[])

    return (
      <Router>
        <NavBar />
        <Route path='/clients' exact render={() => 
          <Clients/>
        }/>
        <Route path='/actions' exact render={() => 
          <Actions/>
        }/>
      </Router>
    );
})

export default App;
