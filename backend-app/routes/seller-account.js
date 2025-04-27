const {signUp,logIn} = require("../CRUD/seller-account")

const router = require("express")

const SellerRouter = router()
SellerRouter.get("/log-in",logIn)
SellerRouter.post("/sign-up",signUp)

module.exports = SellerRouter