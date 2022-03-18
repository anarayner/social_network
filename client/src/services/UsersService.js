import $api from '../http';


export const fetchUsers = async ()=>{
    const {data} = await $api.get('/user')
    // console.log(data)
    return data
}


export const fetchOneUser = async (id)=>{
    const {data} = await $api.get('/user/'+id)
    // console.log(data)
    return data
}

export const uploadProfilePicture = async (id, img)=>{
    const {data} = await $api.put('/user/img/'+id, img)
    // console.log(data)
    return data
}

export const fetchUserFollowing = async (id)=>{
    const {data} = await $api.get('/user/following/'+id)
    // console.log(data)
    return data
}

export const fetchUserFollowers = async (id)=>{
    const {data} = await $api.get('/user/followers/'+id)
    // console.log(data)
    return data
}

export const follow = async (id, userId)=>{
    const {data} = await $api.patch('/user/follow/'+id, userId)
    // console.log(data)
    return data
}

export const unfollow = async (id, userId)=>{
    const {data} = await $api.patch('/user/unfollow/'+id, userId)
    // console.log(data)
    return data
}

export const checkFollow = async (id, userId)=>{
    const {data} = await $api.get('/user/follow/check/'+id, userId)
    // console.log(data)
    return data
}
