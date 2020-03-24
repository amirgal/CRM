import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navbar';


const App = () => {

    return (
      <Router>
        <NavBar />
        <Route path='/clients' exact render={() => 
          <div className='container'></div>
        }/>
      </Router>
    );
}

export default App;
