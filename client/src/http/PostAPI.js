import $api from './index';

export const getPostList = async ()=>{
    const {data} = await $api.get('posts/list/')
    console.log(data)
    return data
}


