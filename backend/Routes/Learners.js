const express = require('express')
const { Learner } = require('../Models/Models')
const router = express.Router()
const Models = require('../Models/Models')
const learner = Models.Learner
const multer = require('multer');
const upload = multer({ dest: "Assets/" });

router.get('/', async (req, res) => {
    learner.find(req.query).then(data => {res.json(data)}).catch(err => {res.json({message: err})})
})

router.get('/:id', async (req, res) => {
    learner.findById(req.params.id).then(data => {res.json(data)}).catch(err => {res.json({message: err})})
})


router.post('/Signup', upload.none(),(req, res) => {
    console.log('signup post req', req.body)
    console.log(req.body.name)
    const Learner = new learner({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    Learner.save().then(data => {res.json(data)}).catch(err => {res.json({message: err})})
})





module.exports = router