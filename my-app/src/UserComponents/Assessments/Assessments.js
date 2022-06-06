import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button} from '@mui/material'

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
                <Link to={'/'+UserID+'/' + CourseID + '/' + Assessment._id}>
                    <Button variant="outlined" style={{'width': '80%', 'marginLeft': '10%', 'marginTop': '2%'}}> {Assessment.name}</Button>
                </Link>
               </>
           )
       })
       return AssessmentArray
   }




  return (
    <>
    {showAssessments()}
    </>
  )
}

export default Assessments