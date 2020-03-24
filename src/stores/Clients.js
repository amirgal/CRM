import { observable, action, computed } from "mobx";
import Client from "./Client";

export default class ClientsStore {
    @observable clients = []

    @action addClient = client => {
        this.clients.push(new Client(client))
    }

    @action editClient = data => {
        const client = this.clients.find(c => c.id === data.id)
        client.name = data.name
        client.country = data.country
    }
}