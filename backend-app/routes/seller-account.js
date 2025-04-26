const {signUp} = require("../CRUD/seller-account")

const router = require("express")

const SellerRouter = router()

SellerRouter.post("/sign-up",signUp)

module.exports = SellerRouter