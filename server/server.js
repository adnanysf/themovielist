const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGZiODZlYjhmODkwNjc3ZjkzOGRlYjZhNjk5ODVkOSIsInN1YiI6IjY0ZGE5YjQzNTllOGE5MDBlMjI3MzJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oeiiAb6NCLfYV2g03alG6EU4kOHsXP4w8b_so5AjM_Y'
const User = require('./models/User')
const Card = require('./models/Card')


mongoose.connect("mongodb+srv://admin:admin@cluster.hohcheu.mongodb.net/?retryWrites=true&w=majority",{
    useNewURLParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("CONNECTED TO MONGODB")
}).catch(console.error)

const app = express()
app.use(express.json())
app.use(cors())

app.get('/users', async (req,res) => {
    const users = await User.find()
    res.json(users)
})

app.post('/registeruser', (req,res) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
    })
    user.save()
    res.json(user)
})


app.get('/loginuser', async (req,res) => {
    const user = await User.findOne({username: req.body.username, password: req.body.password})
    if(!user){
        res.json("USER NOT FOUND")
    }
    else{
        res.json(user)
    }
})



app.listen('4000', () => {
    console.log("Server running on Port 4000")
})