import React, { useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import UserListItem from '../UserListItem/UserListItem';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import axios from 'axios';



const RegisteredUsers = (props) => {
  const LearnersArray = []
  let url = 'http://localhost:4000/Courses/'
  let { CourseID } = useParams()

  const [learners,setLearners] = useState([])
  const [flag, setFlag] = useState(false)

  
  // for (let i = 0; i < 25; i++){
  //     Users.push( <>
  //                 <ListItem> 
  //                 <UserListItem name='Ahmed Bilal' progress='50'></UserListItem>
  //                 </ListItem>
  //                 <Divider></Divider>
  //                 </>
  //                 )
  // }

  const updateSelf = () => {
    if (flag === false)
      setFlag(true)
    else
      setFlag(false)
    console.log('I have been called (updateSefl)')
    return flag
  }
//changes-----------------------
  // const getProgress = async (learner_id) => {
  //   console.log('id', learner_id)
  //   await axios.get('http://localhost:4000/Progresses/' + learner_id + '/' + CourseID).then(res => {
  //     return(res.data.progress_value)
  //   })
  // }
//changes-----------------------

  function Learners(){
    learners.map(learner => {
      // console.log('names', learner._id)
      // const Progress = getProgress(learner._id)
      // console.log(Progress, 'Progress value')
      LearnersArray.push(
        <>
          <ListItem> 
          <UserListItem name={learner.name} id={learner._id} progress={50} signal={updateSelf}></UserListItem>
          </ListItem>
          <Divider>
          </Divider>
        </>
      )
    })
    return LearnersArray
  }

  useEffect(() => {
    axios.get(url + CourseID).then(res => {
      const Course = res.data
      const learners = Course.learners
      setLearners(learners)
      console.log('learners',learners)
    }).catch(err => console.log(err))


  },[flag])

  return (
    <>
    <Paper style={{height: '60vh',maxHeight: '60vh', overflow: 'auto'}}>
        <List>
            {Learners()}
        </List>
    </Paper>
  


    <Link to={'/admin/addLearner/'+ CourseID }> 
    <Button style={{'marginTop':'2%' }} variant='contained' fullWidth> Add New User + 
    </Button>
    </Link>
   

  </>
  )
}

export default RegisteredUsers