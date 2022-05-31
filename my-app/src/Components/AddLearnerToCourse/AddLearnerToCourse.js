import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { FormControl } from '@mui/material'
import axios from 'axios'
const AddLearnerToCourse = () => {

  let url = 'http://localhost:4000/Learners'
  let courseID = useParams()
  var learners = []

  function Learners(){
    learners.map(learner => {
        learner = <Typography>{learner.name}</Typography>
    })
    return learners
  }

  useEffect(() => {
    axios.get(url).then(res => {
        learners = res.data
    }).catch(err => console.log(err))
  })

  //add learners to array.


  return (
    <>
    <FormControl className='form' style={{marginLeft:'10%'}} id="myForm" name="myForm">
        <Typography variant='h5' style={{textAlign:'center', paddingTop: '2%', paddingBottom: '2%'}}> Add Learner to Course </Typography>
        <div>
            {Learners()}
        </div>
       
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={this.saveName}></TextField>
        <TextField id="outlined-basic" label="Description" variant="outlined" multiline onChange={this.saveDescription}></TextField>
        <TextField id="outlined-basic" label="Enrollment Link" variant="outlined" multiline onChange={this.saveEnrollmentLink}></TextField>
        <input id="startDate" class="form-control" type="date" onChange={this.saveStartDate}/>
        <input id="endDate" class="form-control" type="date" onChange={this.saveEndDate}/>
        <Button variant="outlined" component="label">Upload Thumbnail Image<input type="file" hidden onChange={this.saveThumbnail}/></Button>
        <Typography variant='body2' id='thumbnail' style={{textAlign:'center'}}>No file Attached</Typography>
        <Button variant="outlined" component="label">Upload Material<input type="file" hidden onChange={this.saveMaterial}/></Button>
        <Typography variant='body2' id='material' style={{textAlign:'center'}}>No file Attached</Typography>
        <Button variant="outlined" component="label">Upload Course Certificate<input type="file" hidden onChange={this.saveCertificate}/></Button>
        <Typography variant='body2' id='certificate' style={{textAlign:'center'}}>No file Attached</Typography>
        <Button variant="contained" onClick={this.submitData}>Create</Button>
    </FormControl>    
    </>
  )
}

export default AddLearnerToCourse