import { observable } from "mobx";

export default class Client{
    
    @observable name
    @observable email
    @observable emailType
    @observable sold
    @observable owner
    @observable country

    constructor(client) {
        this.id = client.id
        this.firstContact = client.first_contact

        this.name = client.name
        this.email = client.email
        this.emailType = client.emailType
        this.sold = client.sold
        this.owner = client.owner
        this.country = client.country
    }
}