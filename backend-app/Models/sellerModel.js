const mongoose = require("../mongoose")

const sellerSchema = new mongoose.Schema({
    fullNames:{type:String,required:true,minLength:1},
    email:{type:String,required:true,unique:true,minLength:10},
    cellphone:{type:String,required:true,unique:true,minLength:10,maxLength:10},
    username:{type:String,required:true,unique:true,minLength:5},
    password:{type:String,required:true,minLength:10},
    userType:{type:String,required:true}
})

sellerSchema.statics.signUp = async function signUp({fullNames,email,cellphone,username,password,userType}){

    try{
        const newUser = new this({
            fullNames,
            email,
            cellphone,
            username,
            password,
            userType
        })
        const savedUser = await newUser.save()
        return savedUser
    }catch(err){
        console.log(err)
        return false
    }

}

sellerSchema.statics.logIn = async function logIn({username,password}){
    try{
        const findUser = await this.findOne({
            $and:[
                {
                    username:{$eq:username}
                },
                {
                 password:{$eq:password}   
                }
            ]
        },{username:1,password:1,_id:1})
        return findUser
    }catch(err){
        console.log(err)
        return false
    }
}

const SellerModel = mongoose.model("sellers",sellerSchema,"sellers")
module.exports = SellerModel