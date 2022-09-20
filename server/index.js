const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

const cors = require('cors') // allow to connect this api to react

mongoose.connect("mongodb+srv://user_hd03:Qwerty%40123@cluster0.d1b0xzd.mongodb.net/?retryWrites=true&w=majority")

app.use(express.json())
app.use(cors()) // we need to write this too

app.get('/getUsers', (req,res) => {
    UserModel.find({},(err,result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    });
   
})

app.post('/createUser',async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()
    res.json(user)
})

app.listen(3001, () => {
    console.log('server is connected');
})