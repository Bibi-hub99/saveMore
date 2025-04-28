const SellerModel = require("../Models/sellerModel")

const signUp = async(req,res)=>{

    try{
        const {fullNames,email,cellphone,username,password,userType} = req.body;

        const newSeller = await SellerModel.signUp({
            fullNames,
            email,
            cellphone,
            username,
            password,
            userType
        })

        if(newSeller){
            const {userType,_id} = newSeller
            return res.status(200).json({
                success:true,
                userPath:`/${userType}/${_id}`
            })
        }

        return res.status(200).json({
            success:false,
            userType:""
        })
    }catch(err){
        console.log(err)
        return res.end()
    }

}

const logIn = async(req,res)=>{
    try{

        const {username,password} = req.query;
        const findSeller = SellerModel.logIn({
            username,
            password
        })

        if(findSeller){
            return res.status(200).json({
                success:"true",
                userPath:`/seller/${findSeller._id}`
            })
        }
        return res.status(202).json({
            success:false,
            userPath:""
        })

    }catch(err){
        console.log(err)
        return end()
    }
}

module.exports = {signUp,logIn}