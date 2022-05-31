const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const CoursesRoute = require('./Routes/Courses');
app.use(cors());
app.use(bodyparser.json());

app.use('/Courses', CoursesRoute)

app.get('/',(req,res) => {
    res.send('we are home')
})


mongoose.connect('mongodb://localhost:27017/LMS-db', () => {
    console.log('connected to database!')
})

app.listen(4000, () => (console.log('Here we go!')))
