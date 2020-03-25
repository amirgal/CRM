import { observable, action } from "mobx";

export default class Client{
    
    @observable name
    @observable email
    @observable country
    @observable owner

    @action handleChange = e => {
        this[e.target.id] = e.target.value
    }

}