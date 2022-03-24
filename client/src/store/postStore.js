import {makeAutoObservable, runInAction} from 'mobx';
import * as PostService from '../services/PostService';
import * as CommentService from '../services/CommentService';

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

    get posts(){
        return this._posts
    }
    get postLikes(){
        return this._postLikes
    }

    get postComments(){
        return this._postComments
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

    async uploadComment(data){
        try{
            const comment = await CommentService.uploadComment(data)
            // console.log(comment)
            return comment
            // runInAction(()=> {
            //     this.posts.comments.push(comment)
            // })
        }catch (e) {
            console.log(e)
        }
    }

    async deleteComment(id){
        try{
            const comment = await CommentService.deleteComment(id)
            // console.log(this.comments)
            // runInAction(()=> {
            //     const filteredCommentPosts = this.posts.comments.filter(comment => comment._id !== id)
            //     this._posts = filteredCommentPosts
            // })
            return comment
        }catch (e) {
            console.log(e)
        }
    }

}