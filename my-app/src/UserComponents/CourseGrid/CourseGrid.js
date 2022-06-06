import React, { Component } from 'react'
import CourseCard from '../CourseCard/CourseCard'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios'



export class CourseGrid extends Component {
  url = `http://localhost:4000/Courses/specific/`

  state = {
    Courses: []
  }


  componentDidMount(){
    const id = this.props.id
    axios.get(this.url + id).then(res => {
      const courses = res.data
      this.setState({Courses: courses})
    })
  }
  getCoursesInfo(){
    const course_info = []
    this.state.Courses.map(Course => {
      course_info.push(<Grid item xs={4}><CourseCard name={Course.name} description={Course.description} image={Course.course_image} id={Course._id}/></Grid>)
    })
    console.log(course_info)
    return course_info
  }


  render() {
    return (
      <>
      <Grid container spacing={2}>
         {this.getCoursesInfo()}
      </Grid>
      </>
    )
  }
}

export default CourseGrid

// const CourseGrid = () => {
//   const Courses=[]
//   //get courses from backend here
//   //const displayCourses = () => {
//     for (let i = 0; i < 10; i++){
//         Courses.push(<Grid item xs={4}><CourseCard name='Web Development' description='This is an introductory web development course.'/></Grid>)
//     }
// //   }
//   return (
//     <>
//     <Grid container spacing={2}>
//         {Courses}
//     </Grid>
//     <Link to='/admin/CreateCourse'>
//       <Button style={{'marginTop':'1.5%' }} variant='contained' fullWidth> Create New Course + </Button>
//     </Link>
//     </>
//   )
// }

