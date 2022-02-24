import {makeAutoObservable} from 'mobx';
import AuthService from '../services/AuthService';

export default class Store{
    isAuth = false;
    user = {};
    constructor() {
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this.isAuth = bool
            }
    setUser(user){
        this.user = user
    }

    async login(email, password){
        try{
            console.log('response')

            const response = await AuthService.login(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setIsAuth(true)
            alert(response.data)
            this.setUser(response.data.user)
        }catch (e) {
            alert(e.response?.data?.message)
        }
    }

    async registration(email, password){
        try{
            console.log('response')
            const response = await AuthService.registration(email, password)
            console.log(response.data)
            localStorage.setItem('token', response.data.accessToken)
            this.setIsAuth(true)
             this.setUser(response.data.user)
        }catch (e) {
            alert(e.response?.data?.message)
        }
    }

    async logout(){
        try{
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setIsAuth(false)
            alert(response.data.user)
            this.setUser({})
        }catch (e) {
            alert(e.response?.data?.message)
        }
    }
}