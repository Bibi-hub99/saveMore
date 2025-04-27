import axios from "axios"
const baseURL = "http://localhost:8888"

export const signUp = async({fullNames,email,cellphone,username,password,userType})=>{
    try{

        const response = await axios.post(`${baseURL}/${userType}/sign-up`,{
            fullNames,
            email,
            cellphone,
            username,
            password,
            userType
        })

        return response

    }catch(err){
        console.log(err)
        return false
    }
}

export const logIn = async({userType,username,password})=>{
    try{
        const response = await axios.get(`${baseURL}/${userType}/log-in?username=${username}&password=${password}`)
        return response
    }catch(err){
        console.log(err)
        return false
    }
}