import $api from '../http/index';
import axios from 'axios';

export  default class AuthService{
    static async login(email, password){
        return $api.post('/auth/login', {email, password})
    }
    static async registration(email, password){
        return $api.post('http://localhost:7000/api/auth/registration', {email, password})
    }
    static async logout(){
        return $api.post('/auth/login', )
    }
}