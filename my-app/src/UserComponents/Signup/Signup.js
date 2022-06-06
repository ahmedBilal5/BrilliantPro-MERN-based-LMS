import React from 'react'
import { Grid } from '@mui/material'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { Typography } from '@mui/material'
import { FormControl } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../Signup/Signup.css'

const Signup = () => {
  
  const url = `http://localhost:4000/Learners/Signup`
  const [username, setUsername] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [name, setName] = React.useState("")
  const [password, setPassword] = React.useState("")
  
  function updateUsername(e){
    setUsername(e.target.value)
  }

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }

  function updateName(e){
    setName(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const submitData = () => {
    const formData= new FormData()
    formData.append("name", name)
    formData.append("username", username)
    formData.append("email", email)
    formData.append("password", password)
    console.log('signup form data', formData)
    for (let [key, value] of formData.entries()) { 
      console.log(key, value);
    }
    console.log('Nammmme',formData.get('name'))
    axios.post(url,formData).then(res => 
      {console.log('SIGNING UP USER RESPONSE:', res)
      console.log('SIGNING UP USER RESPONSE DATA:', res.data)
      }).catch(err => console.log('SIGNING UP USER ERROR: ', err))
  }


  return (        
    <Grid className='container' container direction="column" justifyContent="center" alignItems="center">
        <Button><Link to='/Login'>Login</Link></Button>
        <Typography variant="h4" gutterBottom component="div">Sign Up</Typography>
        <FormControl maxWidth>
        <TextField id="filled-basic" label="Name" variant="filled" onChange={updateName}></TextField>
        {/* <Select labelId="demo-simple-select-label" id='role' variant='filled'>
            <MenuItem value={'L'}>Learner</MenuItem>
            <MenuItem value={'A'}>Admin</MenuItem>
        </Select> */}
        <TextField id="filled-basic" label="Username" variant="filled" onChange={updateUsername}></TextField>
        <TextField id="filled-basic" label="E-mail" variant="filled" onChange={updateEmail}></TextField>
        <TextField id="filled-basic" label="Password" variant="filled" type='password' onChange={updatePassword}></TextField>
        <Button variant="contained" onClick={submitData}>Signup</Button>
        </FormControl>
        
    </Grid>
  )
}

export default Signup