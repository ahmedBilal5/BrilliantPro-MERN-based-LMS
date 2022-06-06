import React, { Component } from 'react'
import { FormControl } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import axios from 'axios';
import '../CreateCourse/CreateCourse.css'


export default class CourseSettings extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      description: "",
      enrollment_link: "",
      start_date: "",
      end_date: "",
    }
    this.url1 = `http://localhost:4000/Courses/`+ this.props.id
    this.url2 = `http://localhost:4000/Courses/settings/update/`+ this.props.id
  }

  componentDidMount(){
    this.getCourse()

  }


  getCourse = async () => {
    await axios.get(this.url1).then(res => {
      
      this.setState({ name: res.data.name})
      this.setState({ description: res.data.description})
      this.setState({ enrollment_link: res.data.enrollment_link})
      this.setState({ start_date: this.extractDate(res.data.start_date)})
      this.setState({ end_date: this.extractDate(res.data.end_date)})
    })
    console.log(this.state)
  }

 

  extractDate = (str) => {
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'T')
            return str.substring(0,i)
    }
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
  
  
  

  saveStartDate = (e) => {
    this.state.start_date = e.target.value
  }
  
  saveEndDate = (e) => {
    this.state.end_date = e.target.value
  }
  submitData =  () => {
   
    const body = {
      name: this.state.name,
      description: this.state.description,
      enrollment_link: this.state.enrollment_link,
      start_date: this.state.start_date,
      end_date: this.state.end_date
    }
    
    axios.put(this.url2, body).then(res => {
      console.log(res)
      console.log(res.data)
    }).catch(err => console.log('This is the update course response error',err))

  }

  deleteCourse = () => {
    axios.delete(this.url1).then(res => {
      console.log(res)
      console.log(res.data)
    }).catch(err => console.log('This is the delete course response error',err))
  }
  
  render() {

  
    return (
      <>
      <FormControl className='form' style={{marginLeft:'10%'}} id="myForm" name="myForm">
          <Typography variant='h5' style={{textAlign:'center', paddingTop: '2%', paddingBottom: '2%'}}>Course Settings</Typography>
          <Typography variant='body1' style={{textAlign:'center', paddingTop: '2%', paddingBottom: '2%'}}><u>Current Name</u>: {this.state.name}</Typography>
          <TextField id="outlined-basic" label="New Name" variant="outlined" onChange={(e) => this.saveName(e)}></TextField>
          <Typography variant='body1' style={{textAlign:'center', paddingTop: '2%', paddingBottom: '2%'}}><u>Current Description</u>: {this.state.description}</Typography>
          <TextField id="outlined-basic" label="Description"  variant="outlined" multiline onChange={this.saveDescription}></TextField>
          <Typography variant='body1' style={{textAlign:'center', paddingTop: '2%', paddingBottom: '2%'}}><u>Current Enrollment Link</u>: {this.state.enrollment_link}</Typography>
          <TextField id="outlined-basic" label="Enrollment Link" variant="outlined" multiline onChange={this.saveEnrollmentLink}></TextField>
          <Typography variant='body1' style={{textAlign:'center', paddingTop: '2%', paddingBottom: '2%'}}><u>Current Start Date</u>: {this.state.start_date}</Typography>
          <input id="startDate" class="form-control" type="date"  onChange={this.saveStartDate}/>
          <Typography variant='body1' style={{textAlign:'center', paddingTop: '2%', paddingBottom: '2%'}}><u>Current End Date</u>: {this.state.end_date}</Typography>
          <input id="endDate" class="form-control" type="date"  onChange={this.saveEndDate}/>
          <Button variant="contained" onClick={this.submitData}>Update Course</Button>
          <Button variant="contained" style={{ marginTop: "4%"}} color='error' onClick={this.deleteCourse}>Delete Course</Button>
      </FormControl>    
      </>
    )
  
  }
}


