import $api from '../http/index';


export const getProfilePosts = async (id)=>{
    const {data} = await $api.get('posts/profile/'+id)
    console.log(data)
    return data
}

export const getPosts = async ()=>{
    const {data} = await $api.get('posts/list')
    console.log(data)
    return data
}
