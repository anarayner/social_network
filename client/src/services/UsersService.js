import $api from '../http';


export const fetchUsers = async ()=>{
    const {data} = await $api.get('/user')
    console.log(data)
    return data
}


export const fetchOneUser = async (id)=>{
    const {data} = await $api.get('/user/'+id)
    console.log(data)
    return data
}

export const uploadProfilePicture = async (id, img)=>{
    const {data} = await $api.put('/user/img/'+id, img)
    console.log(data)
    return data
}

export const uploadPost = async (post)=>{
    const {data} = await $api.post('/posts', post)
    console.log(data)
    return data
}