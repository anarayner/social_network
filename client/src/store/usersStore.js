import {makeAutoObservable} from 'mobx';
import axios from 'axios';
import {API_URL_CONST} from '../http';
import * as UsersService from '../services/UsersService';
import {fetchUsers} from '../services/UsersService';

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

    async fetchUsers(){
        try{
            const users = await UsersService.fetchUsers()
            console.log(users)
            this.setUsers(users)
        }catch (e) {
            console.log(e)
        }
    }
}