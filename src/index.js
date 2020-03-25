import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Clients from './stores/Clients'
import ClientInputs from './stores/ClientInputs'
import { Provider } from 'mobx-react';

const clientsStore = new Clients()
const clientInputsStore = new ClientInputs()
const store = {clientsStore, clientInputsStore}

ReactDOM.render(<Provider {...store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
