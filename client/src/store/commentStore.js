import {makeAutoObservable, runInAction} from 'mobx';
import * as CommentService from '../services/CommentService';

export default class commentStore{
    _comments = [];

    constructor() {
        makeAutoObservable(this)
    }

    setComments(comments){
        this._comments = comments
    }

    get comments(){
        return this._comments
    }


    async uploadComment(comment){
        try{
            const newComment = await CommentService.uploadComment(comment)
            console.log(newComment)
            runInAction(()=> {
                this.comments.unshift (newComment)
            })
        }catch (e) {
            console.log(e)
        }
    }
    async deleteComment(id){
        try{
            await CommentService.deleteComment(id)
            console.log(this.comments)
            runInAction(()=> {
                const filteredComments = this.comments.filter(post => post._id !== id)
                this._comments = filteredComments
            })
        }catch (e) {
            console.log(e)
        }
    }

    async fetchPostsComments(id){
        try{
            const comments = await CommentService.fetchPostComments(id)
            // console.log(comments)
            this.setComments(comments)
        }catch (e) {
            console.log(e)
        }
    }


}