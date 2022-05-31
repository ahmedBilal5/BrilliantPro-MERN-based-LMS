import React, { Component } from 'react'
import { FormControl } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import axios from 'axios';
import './CreateCourse.css'

export class CreateCourse extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      description: "",
      enrollment_link: "",
      thumbnail_image: "",
      material: "",
      material_filename: "",
      thumbnail_filename: "",
      start_date: "",
      end_date: ""
    }
    this.url = `http://localhost:4000/Courses/add`
    
  }

  saveName = (e) => {
    this.state.name = e.target.value
  }

  saveDescription = (e) => {
    this.state.description = e.target.value
  }

  saveEnrollmentLink = (e) => {
    this.state.enrollment_link = e.target.value
  }
  
  saveThumbnail = (e) => {
    this.state.thumbnail_image = e.target.files[0]
    this.state.thumbnail_filename = e.target.files[0].name
  }

  saveMaterial = (e) => {
    this.state.material = e.target.files[0]
    this.state.material_filename = e.target.files[0].name
  }

  saveStartDate = (e) => {
    this.state.start_date = e.target.value
  }
  
  saveEndDate = (e) => {
    this.state.end_date = e.target.value
  }
  
  submitData =  () => {
    // let formData = new FormData()
    // await formData.append("newcourse", this.state)
    // formData.getAll("newcourse", (item) => {
    //   console.log(item)

    // console.log(this.state.description)
    // console.log(this.state.end_date)
    // console.log(this.state.start_date)
    // console.log(this.state.start_date)
    // console.log(this.state.material)
    // console.log(this.state.material_filename)

    const new_course = {
      name: this.state.name,
      description: this.state.description,
      enrollment_link: this.state.enrollment_link,
      thumbnail_image: this.state.thumbnail_image,
      material: this.state.material,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      thumbnail_filename: this.state.thumbnail_filename
    }
    axios.post(this.url, {new_course}).then(res => {
      console.log(res)
      console.log(res.data)
    }).catch(err => console.log(err))

  }

  render() {
    return (
      <>
      <FormControl className='form' style={{marginLeft:'10%'}} id="myForm" name="myForm">
          <Typography variant='h5' style={{textAlign:'center', paddingTop: '2%', paddingBottom: '2%'}}>Create Course</Typography>
          <TextField id="outlined-basic" label="Name" variant="outlined" onChange={this.saveName}></TextField>
          <TextField id="outlined-basic" label="Description" variant="outlined" multiline onChange={this.saveDescription}></TextField>
          <TextField id="outlined-basic" label="Enrollment Link" variant="outlined" multiline onChange={this.saveEnrollmentLink}></TextField>
          <input id="startDate" class="form-control" type="date" onChange={this.saveStartDate}/>
          <input id="endDate" class="form-control" type="date" onChange={this.saveEndDate}/>
          <Button variant="outlined" component="label">Upload Thumbnail Image<input type="file" hidden onChange={this.saveThumbnail}/></Button>
          <Button variant="outlined" component="label">Upload Material<input type="file" hidden onChange={this.saveMaterial}/></Button>
          <Button variant="contained" onClick={this.submitData}>Create</Button>
      </FormControl>    
      </>
    )
  }
}

export default CreateCourse





// const CreateCourse = () => {

//   function submitData(){
//     let createCourseForm = document.getElementById('myForm')
//     let formData = new FormData(createCourseForm)
//     console.log(formData)
//   }

//   return (
//     <>
//     <FormControl className='form' style={{marginLeft:'10%'}} id="myForm" name="myForm">
//         <Typography variant='h5' style={{textAlign:'center', paddingTop: '2%', paddingBottom: '2%'}}>Create Course</Typography>
//         <TextField id="outlined-basic" label="Name" variant="outlined"></TextField>
//         <TextField id="outlined-basic" label="Description" variant="outlined" multiline></TextField>
//         <TextField id="outlined-basic" label="Enrollment Link" variant="outlined" multiline></TextField>
//         <input id="startDate" class="form-control" type="date"/>
//         <input id="endDate" class="form-control" type="date"/>
//         <Button variant="outlined" component="label">Upload Thumbnail Image<input type="file" hidden/></Button>
//         <Button variant="outlined" component="label">Upload Material<input type="file" hidden/></Button>
//         <Button variant="contained" onClick={submitData}>Create</Button>
//     </FormControl>    
//     </>
//   )
// }

// export default CreateCourse