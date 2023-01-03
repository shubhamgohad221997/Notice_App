const express = require('express')
const connect=require("./Connect/Connect")

const userRouter=require("./Controller/User.Router")
const cors = require("cors")
const noticeRoute=require("./Controller/Notice.Router")
const { default: mongoose } = require('mongoose')
mongoose.set('strictQuery', true)

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


// app.use("/login",userRouter)

app.use("/notice", noticeRoute)


app.get('/', (req, res) => res.send('hello'))



app.listen(8000, async () => {
    await connect()
    console.log('server started on port 8000')

})