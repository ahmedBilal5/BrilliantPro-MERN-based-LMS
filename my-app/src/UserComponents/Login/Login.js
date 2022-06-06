import React, { useEffect, useState } from 'react'
// import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { FormControl } from '@mui/material'
import axios from 'axios'
import {useNavigate }from 'react-router-dom'
import './Login.css'

const Login = () => {
  
  const [user, setUser] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [pass, setPass] = useState(false)
  let navigate = useNavigate()
  useEffect(() => {

  }, [])

  const updatePassword = (e) =>{
    setPassword(e.target.value)
  }

  const updateUsername = (e) =>{
    setUsername(e.target.value)
  }

  const submit = async () => {
    const body = {
      username: username,
      password: password
    }
    console.log(body)
    // await axios.post('http://localhost:4000/Learners/login', body).then(res => {
    //   console.log('res data password', res.data[0].password)
    //   console.log('res data username', res.data[0].username)
    //   console.log('res data id', res.data[0]._id)
    //   setUser(res.data[0])

    //   if (body.password === res.data[0].password && body.username === res.data[0].username){
    //     console.log('here')
    //     setPass(true)
    //   }
    //   // else{
    //   //   setPass(false)
    //   // }
    //   console.log('pass', pass)
    //   if (pass === true){
    //     //window.location = 'http://localhost:3000/' + res.data[0]._id
    //     navigate('/'+ res.data[0]._id)
    //   }
    //   console.log('userid', user._id)
    // })

    const res = await axios.post('http://localhost:4000/Learners/login', body)
    if (body.password === res.data[0].password && body.username === res.data[0].username){
      console.log('here')
      await setPass(true)
      console.log(pass)
      navigate('/'+ res.data[0]._id)
    }
    // if (pass === true){
    //     //window.location = 'http://localhost:3000/' + res.data[0]._id
        
    //   }



    // if (user.length === 1 && user.username === username && user.password === password){
    //   document.getElementById('show').innerHTML = <Link to={'/:UserID'}><Button variant='outlined'> Go to Home </Button></Link>
    // }

    // else {
    //   return(
    //     document.getElementById('show').innerHTML = <Typography variant='body1'>Try Again</Typography>
    //   )
    // } 
  }


  return (
    <>
      <Grid className='container' container direction="column" justifyContent="center" alignItems="center">
        <Button><Link to='/Signup'>Sign Up</Link></Button>
        <Typography variant="h4" gutterBottom component="div">Login</Typography>
        <FormControl maxWidth>
          <TextField id="filled-basic" label="Username" variant="filled" onChange={updateUsername}></TextField>
          <TextField id="filled-basic" label="Password" variant="filled" type='password' onChange={updatePassword}></TextField>
          <Button variant="contained" onClick={submit}>Login</Button>
          <div id='show'></div>
        </FormControl>
    </Grid>
    </>
  )
}

export default Login
