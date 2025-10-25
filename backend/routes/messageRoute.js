const express = require('express')
const router = express.Router()

router.get('/send',(req,res)=>{
    res.end("Send file")
})


module.exports = router