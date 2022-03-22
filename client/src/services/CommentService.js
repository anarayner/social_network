import $api from '../http/index';

export const deleteComment = async (id)=>{
    const {data} = await $api.delete('/comments/'+id)
    // console.log(data)
    return data
}

export const fetchPostComments = async (id)=>{
    const {data} = await $api.get('comments/'+id)
    // console.log(data)
    return data
}

export const uploadComment = async (comment)=>{
    const {data} = await $api.post('/comments', comment)
    // console.log(data)
    return data
}



