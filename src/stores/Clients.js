import { observable, action, computed } from "mobx";
import Client from "./Client";

export default class ClientsStore {
    @observable clients = []

    @action addClient = client => {
        this.clients.push(new Client(client))
    }
}