import {makeAutoObservable} from 'mobx';
import axios from 'axios';
import {API_URL_CONST} from '../http';

export default class usersStore{
    _users = [];
    constructor() {
        makeAutoObservable(this)
    }

    setUsers(users){
        this._users = users
    }

    get users(){
        return this._users
    }
}