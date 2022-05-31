const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');




const app = express();
const CoursesRoute = require('./Routes/Courses');
const LearnersRoute = require('./Routes/Learners')
app.use(cors());
app.use(bodyparser.json());
app.use('/Assets',express.static('Assets'))
app.use('/Learners', LearnersRoute)

app.use('/Courses', CoursesRoute)


app.get('/',(req,res) => {
    res.send('we are home')
})


mongoose.connect('mongodb://localhost:27017/LMS-db', () => {
    console.log('connected to database!')
})

app.listen(4000, () => (console.log('Here we go!')))
