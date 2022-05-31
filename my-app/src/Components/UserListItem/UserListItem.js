import React from 'react'
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { CircularProgress } from '@mui/material';
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography';

const UserListItem = (props) => {
  return (
    <>
    <ListItemAvatar>
            <Avatar alt='Ahmed Bilal' src="/static/images/avatar/1.jpg"/>
    </ListItemAvatar>
    <ListItemText>
        <Typography variant='body1'>Ahmed Bilal</Typography>
    </ListItemText>
    {/* <div class="progress-bar" role="progressbar" style={{"width": "15%",'marginRight':'4%', "border":"1px solid grey"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div> */}
    <div class="progress"  style={{"width": "15%",'marginRight':'4%'}}>
    <div class="progress-bar" role="progressbar" aria-valuenow={props.progress} aria-valuemin="0" aria-valuemax="100" style={{"width": props.progress + '%'}}>{props.progress}%</div>
    </div>
    {/* <CircularProgress sx={{'marginRight':'4%'}} variant="determinate" value='75'/> */}
    <Button variant="outlined">Unenrol</Button>
    </>
  )
}

export default UserListItem