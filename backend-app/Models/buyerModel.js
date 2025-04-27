const mongoose = require("../mongoose")

const buyerSchema = new mongoose.Schema({
    fullNames:{type:String,required:true,minLength:1},
    email:{type:String,required:true,unique:true,minLength:10},
    cellphone:{type:String,required:true,unique:true,minLength:10},
    username:{type:String,required:true,unique:true,minLength:5},
    password:{type:String,required:true,minLength:10},
    userType:{type:String,required:true}
})

buyerSchema.statics.signUp = async function signUp({fullNames,email,cellphone,username,password,userType}){
    try{
        const user = new this({
            fullNames,
            email,
            cellphone,
            username,
            password,
            userType
        })
        const savedUser = await user.save()
        return savedUser
    }catch(err){
        console.log(err)
        return false;
    }
}

buyerSchema.statics.logIn = async function logIn({username,password}){
    try{
        const user = await this.findOne({
            $and:[
                {
                    username:{$eq:username}
                },
                {
                    password:{$eq:password}
                }
            ]
        },{username:1,password:1,_id:1})
        return user
    }catch(err){
        console.log(err)
        return err;
    }
}

const BuyerModel = mongoose.model("buyers",buyerSchema,"buyers")
module.exports = BuyerModel