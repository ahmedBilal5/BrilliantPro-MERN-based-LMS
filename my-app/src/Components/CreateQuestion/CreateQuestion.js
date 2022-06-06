import React from 'react'
import { FormControl, Typography,TextField, Button } from '@mui/material'
import '../CreateCourse/CreateCourse.css'
import { useState } from 'react'


const CreateQuestion = (props) => {

  const [statement,setStatement] = useState('')
  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')
  const [option3, setOption3] = useState('')
  const [option4, setOption4] = useState('')
  const [answer, setAnswer] = useState('')

  const updateAnswer = (e) => {
    setAnswer(e.target.value)
  }

  const updateOption1 = (e) => {
    setOption1(e.target.value)
  }

  const updateOption2 = (e) => {
    setOption2(e.target.value)
  }

  const updateOption3 = (e) => {
    setOption3(e.target.value)
  }

  const updateOption4 = (e) => {
    setOption4(e.target.value)
  }

  const updateStatement = (e) => {
    setStatement(e.target.value)
  }

  const sendData = () => {
    const options = [option1, option2, option3, option4]
    const data = {
      statement: statement,
      options: options,
      answer: answer 
    }
    console.log(data)
    props.callParent(data)
  }


  return (

    <FormControl className='form' style={{marginLeft:'10%'}} id="myForm" name="myForm">
      <Typography variant='h5' style={{textAlign:'center', paddingTop: '2%', paddingBottom: '2%'}}>Add Question</Typography>
      <TextField id="outlined-basic" label="Statement" variant="outlined" onChange={updateStatement}></TextField>
      <TextField id="outlined-basic" label="Option 1" variant="outlined" onChange={updateOption1}></TextField>
      <TextField id="outlined-basic" label="Option 2" variant="outlined" onChange={updateOption2}></TextField>
      <TextField id="outlined-basic" label="Option 3" variant="outlined" onChange={updateOption3}></TextField>
      <TextField id="outlined-basic" label="Option 4" variant="outlined" onChange={updateOption4}></TextField>
      <TextField id="outlined-basic" label="Answer " variant="outlined" onChange={updateAnswer}></TextField>
      <Button variant="outlined" component="label" onClick={sendData}>Add Question</Button>
    </FormControl>

  )
}

export default CreateQuestion
