import {makeAutoObservable} from 'mobx';
import axios from 'axios';
import {API_URL_CONST} from '../http';

export default class userStore{
    _posts = [];
    constructor() {
        makeAutoObservable(this)
    }

    setPosts(posts){
        this._posts = posts
    }

    get posts(){
        return this._posts
    }

    async getAll(email, password){
        try{

        }catch (e) {

        }
    }
}