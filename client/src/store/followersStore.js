import {makeAutoObservable} from 'mobx';
import axios from 'axios';
import {API_URL_CONST} from '../http';
import * as UsersService from '../services/UsersService';
import {fetchUserFollowing, fetchUsers} from '../services/UsersService';

export default class followersStore{

    _userFollowing = [];
    _userFollowers = [];

    constructor() {
        makeAutoObservable(this)
    }


    setUserFollowing(userFollowing){
        this._userFollowing = userFollowing
    }
    setUserFollowers(userFollowers){
        this._userFollowers = userFollowers
    }


    get userFollowing(){
        return this._userFollowing
    }
    get userFollowers(){
        return this._userFollowers
    }


    async fetchUserFollowing(id){
        try{
            const users = await UsersService.fetchUserFollowing(id)
            this.setUserFollowing(users)
        }catch (e) {
            console.log(e)
        }
    }

    async fetchUserFollowers(id){
        try{
            const users = await UsersService.fetchUserFollowers(id)
            this.setUserFollowers(users)
        }catch (e) {
            console.log(e)
        }
    }
}