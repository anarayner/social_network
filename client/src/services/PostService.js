import $api from '../http/index';

export const deletePost = async (id)=>{
    const {data} = await $api.delete('/posts/'+id)
    console.log(data)
    return data
}

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

export const fetchPostLikes = async (id)=>{
    const {data} = await $api.get('/posts/likes/'+id)
    console.log(data)
    return data
}

export const likePost = async (postData)=>{
      const {data} = await $api.post('/posts/like', postData)
    console.log(data)
    return data
}


