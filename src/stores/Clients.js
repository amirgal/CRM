import { observable, action, computed } from "mobx";
import Client from "./Client";
const axios = require('axios');

export default class ClientsStore {
    @observable clients = []

    @action loadClients = () => {
        axios.get('http://localhost:4000/clients').then((result) => {
        this.clients = result.data.map(c => new Client(c))
      }).catch((err) => {
        console.error(err)
      });
    }

    @action addClient = client => {
        this.clients.push(new Client(client))
    }

    @action editClient = data => {
        const client = this.clients.find(c => c.id === data.id)
        client.name = data.name
        client.country = data.country
    }
}