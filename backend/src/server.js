const express = require('express')
const app = express();
const dotenv = require('dotenv')
const userRoutes = require('../routes/authRoute')
const messageRoutes = require('../routes/messageRoute')


dotenv.config()

app.use('/api/auth',userRoutes)
app.use('/api/message',messageRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})