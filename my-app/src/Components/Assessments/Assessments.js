import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button, Divider, Paper,ListItem, ListItemText, List} from '@mui/material'

const Assessments = () => {
   const { CourseID } = useParams()
   var AssessmentArray = []
   const [Assessments, setAssessments] = useState([])

   useEffect( () => {
       axios.get('http://localhost:4000/Courses/' + CourseID + '/Assessments').then(res => {
            console.log('This is the respose data', res.data)
            setAssessments(res.data)
            console.log('These are the Assessments',Assessments)
       })
   }, [])

   useEffect(() => {

   }, [Assessments])

   const removeAssessment = (assessment) => {
    
    const body = {
        _id: assessment
    }

    axios.put('http://localhost:4000/Courses/' + CourseID + '/removeAssessment', body).then(res => {console.log(res)
    setAssessments(Assessments.filter((assess) => {
        return assess._id != assessment
    }))
    })
   }

   const showAssessments = () => {
       Assessments.map(Assessment => {
           AssessmentArray.push(
               <>
               <ListItem>
                <ListItemText>
                <Link style={{'width': '80%'}} to={"/admin/" + CourseID + '/' + Assessment._id}>
                        {/* <Button variant="outlined" style={{'width': '80%', 'marginLeft': '10%', 'marginTop': '2%'}}> </Button> */}
                        {Assessment.name}
                    </Link>
                </ListItemText>
                    <Button onClick={() => removeAssessment(Assessment._id)}> Remove </Button>
               </ListItem>
                <Divider></Divider>
               </>
           )
       })
       return AssessmentArray
   }




  return (
    <>
    <Paper style={{height: '60vh', maxHeight: '60vh',overflow: 'auto'}}>
        <List>
            {showAssessments()}
        </List>
    </Paper>
   
    <Link to={"/admin/" + CourseID + '/addAssessment'}>
            <Button variant="contained" style={{'width': '100%', 'marginTop': '2%'}}> Add Assessment</Button>
    </Link>
    </>
  )
}

export default Assessments