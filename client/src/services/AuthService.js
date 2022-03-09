import $api from '../http/index';

export  default class AuthService{
    static async login(email, password){
        return $api.post('/auth/login', {email, password})
    }
    static async registration(username, email, password){
        return $api.post('/auth/registration', {username, email, password})
    }
    static async logout(){
        return $api.post('/auth/logout')
    }
}