const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGZiODZlYjhmODkwNjc3ZjkzOGRlYjZhNjk5ODVkOSIsInN1YiI6IjY0ZGE5YjQzNTllOGE5MDBlMjI3MzJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oeiiAb6NCLfYV2g03alG6EU4kOHsXP4w8b_so5AjM_Y'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    const fetch = require('node-fetch');

    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + API_KEY
    }};

    fetch(url, options)
    .then(res => res.json())
    .then(jsonData => {
        res.json(jsonData)
    })
    .catch(err => console.error('error:' + err));

})


app.listen('4000', () => {
    console.log("Server running on Port 4000")
})