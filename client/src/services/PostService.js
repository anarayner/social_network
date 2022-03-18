import $api from '../http/index';


export const fetchProfilePosts = async (id)=>{
    const {data} = await $api.get('posts/profile/'+id)
    // console.log(data)
    return data
}

export const fetchPosts = async ()=>{
    const {data} = await $api.get('posts/list')
    // console.log(data)
    return data
}

export const uploadPost = async (post)=>{
    const {data} = await $api.post('/posts', post)
    // console.log(data)
    return data
}


