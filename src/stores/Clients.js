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

    @action addClient = async c => {
        // const client = await axios.post('http://localhost:4000/client',c)
        console.log(c)
        // this.clients.push(new Client(client))
    }

    @action editClient = data => {
        const client = this.clients.find(c => c.id === data.id)
        client.name = data.name
        client.country = data.country
    }
}