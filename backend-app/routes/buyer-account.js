const {signUp,logIn} = require("../CRUD/buyer-account")
const express = require("express")

const BuyerRouter = express()

BuyerRouter.get("/log-in",logIn)
BuyerRouter.post("/sign-up",signUp)

module.exports = BuyerRouter