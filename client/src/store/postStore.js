import {makeAutoObservable} from 'mobx';
import axios from 'axios';
import {API_URL_CONST} from '../http';
import * as PostService from '../services/PostService';
import {fetchProfilePosts} from '../services/PostService';

export default class postsStore{
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

    async uploadPost(post){
        try{
            const newPost = await PostService.uploadPost(post)
            console.log(newPost)
            this.posts.unshift(newPost)
        }catch (e) {
            console.log(e)
        }
    }

    async fetchProfilePosts(id){
        try{
            const posts = await PostService.fetchProfilePosts(id)
            console.log(posts)
            this.setPosts(posts.reverse())
        }catch (e) {
            console.log(e)
        }
    }

    async fetchPosts(){
        try{
            const posts = await PostService.fetchPosts()
            console.log(posts)
            this.setPosts(posts.reverse())
        }catch (e) {
            console.log(e)
        }
    }
}