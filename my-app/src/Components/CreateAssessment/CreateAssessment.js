import React, { useEffect, useState } from 'react'
import { FormControl, Typography,TextField, Button, Paper } from '@mui/material'
import CreateQuestion from '../CreateQuestion/CreateQuestion'
import '../CreateCourse/CreateCourse.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CreateAssessment = () => {

  const { CourseID } = useParams()
  const [name, setName] = useState('')
  const [passingCriteria, setPassingCriteria] = useState('')
  const [time, setTime] = useState('')
  const [questions,setQuestions] = useState([])

  const AddQuestion = async (data) => {
    const Data = data
    console.log('Data', data)
    
    const tempArr = [...questions]
    tempArr.push(data)
    setQuestions(tempArr)

    //console.log('pushed.', questions)
  }

  const updateName = (e) => {
    setName(e.target.value)
  }

  const updatePassingCriteria = (e) => {
    setPassingCriteria(e.target.value)
  }

  const updateTime = (e) => {
    setTime(e.target.value)
  }


  useEffect(() => {
    console.log('Questions',questions)
  },[questions])

  const createAssessment = async () => {
    const Assessment = {
      name: name,
      passing_criteria: parseInt(passingCriteria),
      time: parseInt(time),
      questions: questions
    }

    await axios.put('http://localhost:4000/Courses/' + CourseID +'/addAssessment', Assessment).then(res => console.log('putted Assessment', res)).catch(err => console.log('error', err))


  }


  return (
    <FormControl className='form' style={{marginLeft:'10%'}} id="myForm" name="myForm">
      <Typography variant='h5' style={{textAlign:'center', paddingTop: '2%', paddingBottom: '2%'}}>Create Assessment</Typography>
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={updateName}></TextField>
      <TextField id="outlined-basic" label="Passing Criteria (in percentage)" variant="outlined" onChange={updatePassingCriteria}></TextField>
      <TextField id="outlined-basic" label="Time (in Minutes)" variant="outlined" onChange={updateTime}></TextField>
      <Paper>
      <Typography variant='body2' id='thumbnail' style={{textAlign:'center'}}>Questions Added: {questions.length}</Typography>
      </Paper>

      <Paper style={{"paddingBottom": "4%"}}>
        <CreateQuestion callParent={AddQuestion}></CreateQuestion>
      </Paper>
      <Button variant="contained" style={{"marginBottom": "4%"}} component="label" onClick={createAssessment}>Create Assessment</Button>
    </FormControl>
  )
}

export default CreateAssessment