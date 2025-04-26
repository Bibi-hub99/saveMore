const express = require("express")
const cors = require("cors")
require("dotenv").config()
const ConnectDB = require("./connectDB/connect")
const SellerRouter = require("./routes/seller-account")

const app = express()

ConnectDB()

app.use(cors())
app.use(express.json())

app.use("/seller",SellerRouter)

const PORT = process.env.PORT || 8888

app.listen(PORT,()=>{
    console.log('listening on port 8888')
})