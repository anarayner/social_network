import {makeAutoObservable} from 'mobx';
import axios from 'axios';
import {API_URL_CONST} from '../http';

export default class userStore{
    _posts = [
        {id: 1, content: 'This impressive paella is a perfect party dish and a fun meal to cook\n' +
                '                    together with your guests. Add 1 cup of frozen peas along with the mussels,\n' +
                '                    if you like.', createdBy: 'Victoria Rayner', img: 'https://ik.imgkit.net/3vlqs5axxjf/TAW/ik-seo/uploadedImages/All_Gateways/Europe/Features/SwitzerlandReopening_Hero/How-to-Travel-to-Switzerland-From-the-U.S.-Now.jpg?tr=w-1008%2Ch-567%2Cfo-auto'},
        {id: 2, content: 'This impressive paella is a perfect party dish and a fun meal to cook\n' +
                '                    together with your guests. Add 1 cup of frozen peas along with the mussels,\n' +
                '                    if you like.', createdBy: 'Victoria Rayner', img: 'https://ik.imgkit.net/3vlqs5axxjf/TAW/ik-seo/uploadedImages/All_Gateways/Europe/Features/SwitzerlandReopening_Hero/How-to-Travel-to-Switzerland-From-the-U.S.-Now.jpg?tr=w-1008%2Ch-567%2Cfo-auto'},
        {id: 3, content: 'This impressive paella is a perfect party dish and a fun meal to cook\n' +
                '                    together with your guests. Add 1 cup of frozen peas along with the mussels,\n' +
                '                    if you like.', createdBy: 'Victoria Rayner', img: 'https://ik.imgkit.net/3vlqs5axxjf/TAW/ik-seo/uploadedImages/All_Gateways/Europe/Features/SwitzerlandReopening_Hero/How-to-Travel-to-Switzerland-From-the-U.S.-Now.jpg?tr=w-1008%2Ch-567%2Cfo-auto'},
        {id: 4, content: 'This impressive paella is a perfect party dish and a fun meal to cook\n' +
                '                    together with your guests. Add 1 cup of frozen peas along with the mussels,\n' +
                '                    if you like.', createdBy: 'Victoria Rayner', img: 'https://ik.imgkit.net/3vlqs5axxjf/TAW/ik-seo/uploadedImages/All_Gateways/Europe/Features/SwitzerlandReopening_Hero/How-to-Travel-to-Switzerland-From-the-U.S.-Now.jpg?tr=w-1008%2Ch-567%2Cfo-auto'}
    ];
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