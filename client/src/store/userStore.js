import {makeAutoObservable} from 'mobx';
import AuthService from '../services/AuthService';
import axios from 'axios';
import {API_URL_CONST} from '../http';

export default class userStore{
    _isAuth = false;
    _user = {};
    constructor() {
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
            }
    setUser(user){
        this._user = user
    }
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }

    async login(email, password){
        try{
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('id', response.data.user.id)
            this.setIsAuth(true)
            this.setUser(response.data.user)

        }catch (e) {
            // console.log(e)
            alert(e.response?.data?.message)
        }
    }

    async registration(username, email, password){
        try{
            const response = await AuthService.registration(username, email, password)
            // console.log(response.data)
            localStorage.setItem('token', response.data.accessToken)
            this.setIsAuth(true)
            this.setUser(response.data.user)

        }catch (e) {
            console.log(e)
            alert(e.response?.data?.message)
        }
    }

    async logout(){
        try{
            await AuthService.logout()
            localStorage.removeItem('token')
            this.setIsAuth(false)
            this.setUser({})
        }catch (e) {
            alert(e.response?.data?.message)
        }
    }
    async checkAuth(){
        try{
            const response = await axios.get(`${API_URL_CONST}/auth/refresh`, {withCredentials: true})
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setIsAuth(true)
            this.setUser(response.data.user)
        }catch (e) {
            alert(e.response?.data?.message)
        }
    }

}