const express = require('express')
const router = express.Router()

router.get('/login',(req,res)=>{
 res.end("login")
})
router.get('/signup',(req,res)=>{
 res.end("signup")
})

router.get('/logout',(req,res)=>{
 res.end("logout")
})





module.exports = router