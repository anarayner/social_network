import $api from '../http';


export const fetchUsers = async (id)=>{
    const {data} = await $api.get('/user')
    console.log(data)
    return data
}


export const fetchOneUser = async (id)=>{
    const {data} = await $api.get('/user/'+id)
    console.log(data)
    return data
}