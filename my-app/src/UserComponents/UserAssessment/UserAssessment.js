import React from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Paper, Button } from '@mui/material'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Assessments from '../Assessments/Assessments'
import Timer from '../ReusableComponents/Timer/Timer' 

const UserAssessment = () => {
    const { CourseID } = useParams()
    const { UserID } = useParams()
    const { AssessmentID } = useParams()
    const [ assessment, setAssessment ] = useState({})
    const [questions, setQuestions] = useState([])
    const [result, setResult] = useState(null)
    // const [time, setTime] = useState(0)
    // const [rem, setRem] = useState(0)


    const url = 'http://localhost:4000/Courses/'+ CourseID + '/Assessments/' + AssessmentID
    const url2 = 'http://localhost:4000/Courses/'+ CourseID + '/Assessments/' + AssessmentID + '/qs'
    useEffect(() => {
        axios.get(url).then(res => {
            console.log('This is the respose data', res.data)
            setAssessment(res.data)
            console.log(assessment)
        }).catch(err => console.log(err))

        axios.get(url2).then(res => {
            console.log('This is the respose data', res.data)
            setQuestions(res.data)
            console.log('questions', questions)
        }).catch(err => console.log(err))
    }, [])




    const getQuestions = () => {

        const QuestionArray = []
            
        questions.map(question => {
            QuestionArray.push(
                <>
                    <Paper style={{paddingLeft: '2%', paddingBottom: '2%', paddingTop: '2%', margin: "2% 2% 2% 2%"}}>
                        <Typography variant='body1'> Question:  {question.statement} </Typography>
                        <div style={{marginTop: '1%', marginBottom: '1%'}}>
                            <Typography variant='body1'> <input type="radio" name={question.statement} value={question.options[0]}/> Option 1:  {question.options[0]} </Typography>
                            <Typography variant='body1'> <input type="radio" name={question.statement} value={question.options[1]}/> Option 2:  {question.options[1]} </Typography>
                            <Typography variant='body1'> <input type="radio" name={question.statement} value={question.options[2]}/> Option 3:  {question.options[2]} </Typography>
                            <Typography variant='body1'> <input type="radio" name={question.statement} value={question.options[3]}/> Option 4:  {question.options[3]} </Typography>
                        </div>
                        {/* <div>
                            <Typography variant='body1'> Correct Answer:  {question.answer} </Typography>
                        </div> */}
                    </Paper>
                </>
            )
        })
            return QuestionArray
    }
    
    // const getTime = () => {
    //     const time = assessment.time
    //     console.log('time', time)
    //     const rem = time%60
    //     console.log(rem)
    //     if(rem === 0){
    //         return ('0' + (toString(time/60))) + ':00:00'
    //     }
    //     else{
    //         if (rem > 10){
    //             return ('0' + (toString((time-rem)/60)) + ':' + toString(rem) + ':00')
    //         }
    //         else{
    //             return ('0' + (toString((time-rem)/60)) + ':0' + toString(rem) + ':00')
    //         }
    //     }
    // }
    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

    const CalculateResult = () => {
        const ResultArray = []
        questions.map(question => {
            const elem = document.getElementsByName(question.statement)
            
            for(let i = 0; i < elem.length; i++) {
                if(elem[i].checked){
                    console.log(elem[i].value)
                    if(elem[i].value === question.answer){
                        console.log('Reached the truth value: ', elem[i].value)
                        ResultArray.push(true)
                    }
                    else{
                        ResultArray.push(false)
                    }
                }    
            }
        })
        const trues = countOccurrences(ResultArray, true)
        const percentage = (trues/(ResultArray.length))*100
        var message = ''
        var reward = 0
        if (percentage >= assessment.passing_criteria){
            message = 'You pass'
            reward += 10
        }
        else{
            message = 'You fail'
        }
        const body ={
            points: reward
        }

        // await axios.put('http://localhost:4000/Progresses/' + UserID + '/' + CourseID,body).then(res => {
        //     console.log('updating progress', res)
        // }).catch(err => console.log(err))
        updateProgress(body)

        return (<>
                <Typography variant='h6'style={{textAlign:'center', paddingBottom: '2%',paddingRight: '4%'}}> <b>Your score is:</b> {trues}/{ResultArray.length} </Typography>
                <Typography variant='h6'style={{textAlign:'center', paddingBottom: '2%',paddingRight: '4%'}}> <b>Percentage:</b> {percentage}</Typography>
                <Typography variant='h6'style={{textAlign:'center', paddingBottom: '2%',paddingRight: '4%'}}> <b>Result:</b> {message} </Typography>
                </>)
    }

    const updateProgress = async (body) => {
        return await axios.put('http://localhost:4000/Progresses/' + UserID + '/' + CourseID,body)
    }
  return (
     <>
     <Typography variant='h4' style={{textAlign:'center', paddingTop: '2%', paddingBottom: '2%',paddingRight: '4%'}}>Learner Assessment: {assessment.name}</Typography>
     <div style={{'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'gap': '20%'}}>
        <Typography variant='h6'>Time: {assessment.time} mins</Typography>
        <Typography variant='h6'>Passing Criteria: {assessment.passing_criteria}%</Typography>
        <Timer time={assessment.time}></Timer>
     </div>
     <>
     {
         getQuestions()
     }   
     </> 
     <Button variant="outlined" style={{width:'96%', margin: "0% 2% 2% 2%"}} onClick={() => setResult(CalculateResult())}> Submit Assessment</Button>
     {result}
     </> 
  )
}

export default UserAssessment