import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button, List, ListItem, ListItemText, Paper, Divider} from '@mui/material'

const Assessments = () => {
   const { CourseID } = useParams()
   const { UserID } = useParams()
   var AssessmentArray = []
   const [Assessments, setAssessments] = useState([])

   useEffect( () => {
       axios.get('http://localhost:4000/Courses/' + CourseID + '/Assessments').then(res => {
            console.log('This is the respose data', res.data)
            setAssessments(res.data)
            console.log('These are the Assessments',Assessments)
       })
   }, [])

   const showAssessments = () => {
       Assessments.map(Assessment => {
           AssessmentArray.push(
               <>
                 <ListItem>
                <ListItemText>
                <Link style={{'width': '80%'}} to={'/'+UserID+'/' + CourseID + '/' + Assessment._id}>
                  {Assessment.name}
                </Link>
                </ListItemText>
                </ListItem>
               <Divider></Divider>
               </>
           )
       })
       return AssessmentArray
   }




  return (
    <>
    <Paper style={{height:'70vh', maxHeight:'70vh', overflow:'auto'}}>
        <List>
        {showAssessments()}
        </List>
    </Paper>
    
    </>
  )
}

export default Assessments