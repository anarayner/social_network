import {makeAutoObservable, runInAction} from 'mobx';
import * as PostService from '../services/PostService';

export default class postsStore{
    _posts = [];
    _postLikes = [];
    _postComments = []

    constructor() {
        makeAutoObservable(this)
    }

    setPosts(posts){
        this._posts = posts
    }
    setPostLikes(postLikes){
        this._postLikes = postLikes
    }
    get posts(){
        return this._posts
    }
    get postLikes(){
        return this._postLikes
    }

    async uploadPost(post){
        try{
            const newPost = await PostService.uploadPost(post)
            console.log(newPost)
            runInAction(()=> {
                this.posts.unshift (newPost)
            })
        }catch (e) {
            console.log(e)
        }
    }
    async deletePost(id){
        try{
            await PostService.deletePost(id)
            console.log(this.posts)
            runInAction(()=> {
                const filteredPosts = this.posts.filter(post => post._id !== id)
                this._posts = filteredPosts
            })
        }catch (e) {
            console.log(e)
        }
    }

    async fetchProfilePosts(id){
        try{
            const posts = await PostService.fetchProfilePosts(id)
            // console.log(posts)
            this.setPosts(posts.reverse())
        }catch (e) {
            console.log(e)
        }
    }

    async fetchPosts(){
        try{
            const posts = await PostService.fetchPosts()
            // console.log(posts)
            this.setPosts(posts.reverse())
        }catch (e) {
            console.log(e)
        }
    }

    async likePost(data){
        try{
            const post = await PostService.likePost(data)
            console.log(post)
        }catch (e) {
            console.log(e)
        }
    }

    // async fetchPostLikes(post){
    //     try{
    //         const likes = await PostService.fetchPostLikes(post)
    //         console.log(likes)
    //         this.setPostLikes(likes)
    //         // this.postLikes(likes)
    //     }catch (e) {
    //         console.log(e)
    //     }
    // }
}