const express = require('express')
const router = express.Router()
const Models = require('../Models/Models')
const course = Models.Course


router.get('/',async (req,res) => {
    course.find(req.query).then(courses => {res.json(courses)}).catch(err => {res.json({message: err})})
})


router.post('/add',async (req,res) => {
    console.log(req.body)
    const Course = new course({
        name: req.body.name,
        // assessments: req.body.assessments,
        // learners: req.body.learners,
        materials: [req.body.material],
        start_date: new Date(req.body.start_date) ,
        end_date: new Date(req.body.end_date),
        course_image: req.body.thumbnail_filename,
        enrollment_link: req.body.new_course.enrollment_link,
        description: req.body.description,
        // certificate: req.body.certificate
    })
    console.log(req.body.new_course.start_date,req.body.new_course.end_date,Course.enrollment_link,Course.description)
    // Course.save().then(data => {res.json(data)}).catch(err => {res.json({message: err})})
})


module.exports = router