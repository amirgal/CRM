import { observable, action } from "mobx";

export default class ClientInputs{
    
    @observable name
    @observable email
    @observable country
    @observable owner

    @action handleChange = e => {
        this[e.target.id] = e.target.value
    }

    @action addClient = () => {
        console.log(this.name,this.email,this.country,this.owner)
    }

}