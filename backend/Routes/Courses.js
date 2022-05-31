const express = require('express')
const router = express.Router()
const Models = require('../Models/Models')
const course = Models.Course
const multer = require('multer')
const path = require('path')
//const upload = multer({ dest: "Assets/" });

//Multer configurations
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Assets/')
    },
    filename: function (req, file, cb) {
      /*Appending extension with original name*/
      //path.extname(file.originalname)
      file.originalname = file.originalname.replace(/ /g,"_");

      cb(null,  Date.now() +'-' +file.originalname) 
    
    }
  })
  

  var upload = multer({ storage: storage });



router.get('/',async (req,res) => {
    course.find(req.query).then(courses => {res.json(courses)}).catch(err => {res.json({message: err})})
})

router.get('/:id', async (req, res) => {
    course.findById(req.params.id).then(data => {res.json(data)}).catch(err => {res.json({message: err})})
})

router.post('/add',upload.array("files"),async (req,res) => {
    console.log('body',req.body)
    
    // console.log(req.body.name,
    // // assessments: req.body.assessments,
    // // learners: req.body.learners,
    // [req.files[0].path],
    // req.body.start_date ,
    // req.body.end_date,
    // req.files[1].path,
    // req.body.enrollment_link, req.body.description)
    for(let i = 0; i < 3; i++){
        req.files[i].path = req.files[i].path.replace(/\\/g,"/");
    }
    
    console.log('files',req.files)


    const Course = new course({
        name: req.body.name,
        // assessments: req.body.assessments,
        // learners: req.body.learners,
        materials: [req.files[0].path],
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        course_image: req.files[1].path,
        enrollment_link: req.body.enrollment_link,
        description: req.body.description,
        certificate: req.files[2].path
    })
    // console.log(req.body.new_course.start_date,req.body.new_course.end_date,Course.enrollment_link,Course.description)
    Course.save().then(data => {res.json(data)}).catch(err => {res.json({message: err})})
})


module.exports = router