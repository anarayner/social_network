import {makeAutoObservable} from 'mobx';
import axios from 'axios';
import {API_URL_CONST} from '../http';
import * as UsersService from '../services/UsersService';
import {fetchUsers} from '../services/UsersService';

export default class currentUserStore{
    _currentUser = [];
    _followed = false
    constructor() {
        makeAutoObservable(this)
    }

    setCurrentUser(currentUser){
        this._currentUser = currentUser
    }
    setFollowed(bool){
        this._followed = bool
    }
    get followed(){
        return this._followed
    }

    get currentUser(){
        return this._currentUser
    }

    async fetchOneUser(id){
        try{
            const user = await UsersService.fetchOneUser(id)
            console.log(user)
            this.setCurrentUser(user[0])
        }catch (e) {
            console.log(e)
        }
    }

    async checkFollow(id, userId){
        try{
            const bool = await UsersService.checkFollow(id, userId)
            console.log(bool)
            this.setFollowed(bool)
        }catch (e) {
            console.log(e)
        }
    }

    async follow(id, userId){
        try{
            const bool = await UsersService.follow(id, userId)
            console.log(bool)
            this.setFollowed(true)
        }catch (e) {
            console.log(e)
        }
    }

    async unfollow(id, userId){
        try{
            const bool = await UsersService.unfollow(id, userId)
            console.log(bool)
            this.setFollowed(false)
        }catch (e) {
            console.log(e)
        }
    }
}