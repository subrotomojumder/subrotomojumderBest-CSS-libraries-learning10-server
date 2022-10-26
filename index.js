
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const libraries = require('./data/courses.json')

app.get('/courses', (req, res)=> {
    res.send(libraries)
})

app.listen(port, ()=> {
    console.log('this is port', port)
})