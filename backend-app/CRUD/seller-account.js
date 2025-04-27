const signUp = async(req,res)=>{

    try{
        const {fullNames,email,cellphone,username,password,userType} = req.body;
        console.log(fullNames,email,cellphone,username,password,userType)
        console.log("seller")
        return res.status(200).json({
            success:true
        })
    }catch(err){
        console.log(err)
        return res.end()
    }

}

const logIn = async(req,res)=>{
    try{
        const {username,password} = req.query;
        console.log(username,password)
        console.log("seller")
        res.send("done")
    }catch(err){
        console.log(err)
        return end()
    }
}

module.exports = {signUp,logIn}