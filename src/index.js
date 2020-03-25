import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ClientsStore from './stores/ClientsStore'
import { Provider } from 'mobx-react';

const clientsStore = new ClientsStore()
const store = {clientsStore}

ReactDOM.render(<Provider {...store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
