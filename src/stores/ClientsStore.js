import { observable, action, computed } from "mobx";
import Client from "./Client";
const axios = require('axios');

export default class ClientsStore {
    @observable clients = []
    @observable owners = []
    @observable emailTypes = [{type:'A'},{type:'B'},{type:'C'},{type:'D'}]

    @action loadClients = async () => {
        const clientsData = await axios.get('http://localhost:4000/clients')
        this.clients = clientsData.data.map(c => new Client(c))
        const ownersData = await axios.get('http://localhost:4000/owners')
        this.owners = ownersData.data
    }

    @action addClient = async c => {
        c.sold = 0
        c.firstContact = (new Date()).toDateString()
        c.emailType = '.'
        const response = await axios.post('http://localhost:4000/client',c)
        c.id = response.data.clientId
        c.id ? this.clients.push(new Client(c)) : alert('client exists')
    }

    @action editClient = data => {
        axios.put('http://localhost:4000/client', data)
        const client = this.clients.find(c => c.id === data.id)
        Object.keys(data).forEach(k => client[k] = data[k])
    }

    @action declareSale = clientsIds => {
      clientsIds.forEach(id => {
        this.clients.find(c => c.id === id).sold = 1
      });
      axios.put(`http://localhost:4000/sold`, clientsIds)
    }
} 