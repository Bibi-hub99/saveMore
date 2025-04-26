const signUp = async(req,res)=>{

    try{
        const {fullNames,email,cellphone,username,password,userType} = req.body;
        console.log(fullNames,email,cellphone,username,password,userType)
        return res.status(200).json({
            success:true
        })
    }catch(err){
        console.log(err)
        return res.status(201).json({
            success:false
        })
    }

}

module.exports = {signUp}