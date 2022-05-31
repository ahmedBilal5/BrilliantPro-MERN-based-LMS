import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
const CourseCard = (props) => {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image="https://i0.wp.com/codingindian.com/wp-content/uploads/2022/02/Web-Development-Trends.jpg?fit=%2C&ssl=1"/>
        <CardContent>
            <Typography variant='h5'>
                {props.name}
            </Typography>
            <Typography variant='body2'>
                {props.description} 
            </Typography>
        </CardContent>
        <CardActions>
            <Link to='/admin/CourseID'>
                <Button size='small'>Open Course</Button>
            </Link>
        </CardActions>
    </Card>
    </>
  )
}

export default CourseCard