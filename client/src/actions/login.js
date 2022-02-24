import axios from 'axios';
export const login = async (email, password)=>{
    try{
        const response = await axios.post('http://localhost:7000/api/auth/login', {
            email,
            password
        })
        console.log(response.data)
        alert(response.data.message)

    } catch (e) {
        alert(e)
    }
}

export const registration = async (email, password)=>{
    try{
        const response = await axios.post('http://localhost:7000/api/auth/registration', {
            email,
            password
        })
        console.log(JSON.stringify(response.data))
        alert(JSON.stringify(response.data))
    } catch (e) {
        alert(e.response.data.message)
    }
}