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
    }catch(err){
        console.log(err)
        return false
    }
}