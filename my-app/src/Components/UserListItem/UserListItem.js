import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const UserListItem = (props) => {

  //const [course, setCourse] = useState({})
  var the_learner = {}

  const { CourseID } = useParams()
  const url = 'http://localhost:4000/Courses/' + CourseID
  const url2 = 'http://localhost:4000/Progresses/' + props.id + '/' + CourseID
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    axios.get(url2).then(res => setProgress(res.data.progress_value)).catch(err => console.log(err))
  },[progress])

  const Unenrol = async(p) => {

    await axios.get(url).then(res => {
      var course = res.data
      console.log('old',course)
      const learners = course.learners
      for (let i = 0; i < learners.length; i++){
        console.log('p', p)
        console.log('learners[i]._id', learners[i]._id)
        if (learners[i]._id === p){
          console.log('here spliced')
          the_learner = learners[i]
          console.log(the_learner._id)
          //learners.splice(i,1)
          break
        }
      }
      //console.log('new learners', learners)
      //course.learners = learners
      //console.log('updated',course)
      //setCourse(course)
    }).catch(err => console.log(err))

    
    // await axios.delete(url).then(res => {
    //   console.log('delres', res)
    // })
    
    await axios.put('http://localhost:4000/Courses/'+CourseID+'/learners', the_learner).then(res => {
      console.log('Post Res', res)
    })

    await axios.delete('http://localhost:4000/Progresses/'+props.id+'/'+CourseID).then(res => {
      console.log('removed progress: ', res)
    })

    props.signal()
  }


  return (
    <>
    <ListItemAvatar>
            <Avatar alt={props.name} src="/static/images/avatar/1.jpg"/>
    </ListItemAvatar>
    <ListItemText>
        <Typography variant='body1'>{props.name}</Typography>
    </ListItemText>
    {/* <div class="progress-bar" role="progressbar" style={{"width": "15%",'marginRight':'4%', "border":"1px solid grey"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div> */}
    <div class="progress"  style={{"width": "15%",'marginRight':'4%'}}>
    <div class="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{"width": progress + '%'}}>{progress}%</div>
    </div>
    {/* <CircularProgress sx={{'marginRight':'4%'}} variant="determinate" value='75'/> */}
    <Button  onClick={() => Unenrol(props.id)}  variant="outlined"> Unenrol </Button>
    </>
  )
}

export default UserListItem