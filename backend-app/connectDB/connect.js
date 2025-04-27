const mongoose = require("mongoose")

const ConnectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGOURL)
        console.log('connection established successfully')
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = ConnectDB