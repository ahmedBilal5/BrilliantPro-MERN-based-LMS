import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import { List, ListItemAvatar, ListItemText, Paper } from '@mui/material'

const Dashboard = () => {
  const { UserID } = useParams()
  const url1 = 'http://localhost:4000/Learners/' + UserID
  const url2 = 'http://localhost:4000/Progresses/learner/' + UserID
  const url3 = 'http://localhost:4000/Courses/specific/' + UserID
  const [learner, setLearner] = useState({})
  const [progresses, setProgresses] = useState([])
  const [courses, setCourses] = useState([])
  const ProgressArray = []
  const MergedArray = []

  useEffect(() => {
    axios.get(url1).then(res => {
      setLearner(res.data)
    })
    axios.get(url2).then(res => {
      setProgresses(res.data)
    })
    axios.get(url3).then(res => {
      setCourses(res.data)
    })

  }, [])

  const merge = () => {
    for(let i=0; i<progresses.length; i++) {
      MergedArray.push({
       ...progresses[i], 
       ...(courses.find((course) => course._id === progresses[i].course_id))}
      );
    }
    console.log(MergedArray)
  }


  const getCourseProgresses = () => {
    merge()
    if (MergedArray.length >= 1){
      MergedArray.map((progress,i) => {
        ProgressArray.push(
          <>
             <Paper elevation={1} style={{'display': 'flex', 'flexDirection': 'row', 'marginTop': '2%'}}>
                <ListItemText>
                    <Typography variant='h6'> {progress.name} </Typography>
                </ListItemText>
                  <div class="progress"  style={{"width": "70%",'marginRight':'4%', 'marginTop':'1%'}}>
                    <div class="progress-bar" role="progressbar" aria-valuenow={progress.progress_value} aria-valuemin="0" aria-valuemax="100" style={{"width": progress.progress_value + '%'}}>{progress.progress_value}%</div>
                </div>
              </Paper>
          </>
        )
      })
      return ProgressArray
    }
    else{
      return(
        <>
        <Typography variant='h5' style={{textAlign: 'center'}}>You have not been added to any courses yet.</Typography>
        </>
      )
    }
  } 


  return (
    <>
    <div style={{'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'gap': '20%'}}>
      <Typography variant='h3'> Welcome, {learner.name} </Typography>
    </div>
    <List>
        {getCourseProgresses()}
    </List>
    </>
  )
}

export default Dashboard