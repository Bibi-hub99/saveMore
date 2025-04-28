const BuyerModel = require("../Models/buyerModel")

const signUp = async(req,res)=>{

    try{
        const {fullNames,email,cellphone,username,password,userType} = req.body;
        console.log(fullNames,email,cellphone,username,password,userType)
        const buyer = await BuyerModel.signUp({
          fullNames,
          email,
          cellphone,
          username,
          password,
          userType  
        })

        if(buyer){
            const {userType,_id} = buyer
            return res.status(200).json({
                success:true,
                userPath:`/${userType}/${_id}`
            })
        }else{
            return res.status(200).json({
                success:false,
                userPath:""
            })
        }

    }catch(err){
        console.log(err)
        res.end()
    }
}

const logIn = async(req,res)=>{
    try{
        const {username,password} = req.query
        const buyer = await BuyerModel.logIn({
            username,
            password
        })
        if(buyer){
            return res.status(200).json({
                success:true,
                userPath:`/buyer/${buyer._id}`
            })
        }else{
            return res.status(202).json({
                success:false,
                userPath:""
            })
        }
    }catch(err){
        console.log(err)
        return end()
    }
}

module.exports = {signUp,logIn}