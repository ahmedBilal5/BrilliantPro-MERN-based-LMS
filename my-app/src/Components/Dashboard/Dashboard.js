import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import axios from 'axios'
import { PieChart } from 'react-minimal-pie-chart';

const Dashboard = () => {
  const url_courses_count = 'http://localhost:4000/Courses/count'
  const url_learners_count = 'http://localhost:4000/Learners/count'

  const [usernum,setUsernum] = useState(0)
  const [coursenum, setCoursenum] = useState(0)
  
  useEffect(() => {
    axios.get(url_courses_count).then(res => {
      setCoursenum(res.data)
    })
    axios.get(url_learners_count).then(res => {
      setUsernum(res.data)
    })


  }, [])


  return (
    <>
    <div style={{'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'gap': '20%'}}>
      <Typography variant='h3'> Total Courses: {coursenum}</Typography>
      <Typography variant='h3'> Total Users: {usernum}</Typography>
    </div>

      <PieChart style={{marginLeft: '35%', marginTop: '4%'}} viewBoxSize={[300,300]} reveal animate={true} animationDuration={1000}
    data={[
      { title: 'Courses', value: coursenum, color: '#428df5'},
      { title: 'Users', value: usernum, color: '#42e3f5'},
    ]}
    />;


   


    </>

  )
}

export default Dashboard