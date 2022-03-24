import {makeAutoObservable, runInAction} from 'mobx';
import * as UsersService from '../services/UsersService';

export default class currentUserStore{
    _currentUser = [];
    _followed = false;
    _userFollowing = [];
    _userFollowers = [];

    constructor() {
        makeAutoObservable(this)
    }

    setCurrentUser(currentUser){
        this._currentUser = currentUser
    }
    setFollowed(bool){
        this._followed = bool
    }
    setUserFollowing(userFollowing){
        this._userFollowing = userFollowing
    }
    setUserFollowers(userFollowers){
        this._userFollowers = userFollowers
    }

    get followed(){
        return this._followed
    }

    get currentUser(){
        return this._currentUser
    }
    get userFollowing(){
        return this._userFollowing
    }
    get userFollowers(){
        return this._userFollowers
    }


    async fetchOneUser(id){
        try{
            const user = await UsersService.fetchOneUser(id)
            // console.log(user)
            this.setCurrentUser(user[0])
        }catch (e) {
            console.log(e)
        }
    }

    async checkFollow(id, userId){
        try{
            const bool = await UsersService.checkFollow(id, userId)
            this.setFollowed(bool)
        }catch (e) {
            console.log(e)
        }
    }

    async follow(id, userId){
        try{
            const user = await UsersService.follow(id, userId)
            this.setFollowed(true)
            runInAction(()=>{
                this.userFollowers.unshift(user)
            })
        }catch (e) {
            console.log(e)
        }
    }

    async unfollow(id, userId){
        try{
            const user = await UsersService.unfollow(id, userId)
            this.setFollowed(false)
            runInAction(()=>{
                this.userFollowers.shift(user)

            })
        }catch (e) {
            console.log(e)
        }
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

    async uploadProfilePicture(id, img){
        try{
            await UsersService.uploadProfilePicture(id,img)
        }catch (e) {
            console.log(e)
        }
    }

    async updateUser(id, info){
        try{
            const user = await UsersService.updateUser(id, info)
            console.log(user)
            runInAction(()=> {

            })
        }catch (e) {
            console.log(e)
        }
    }
}