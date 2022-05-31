import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import UserListItem from '../UserListItem/UserListItem';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const RegisteredUsers = (props) => {
  const Users = []
  for (let i = 0; i < 25; i++){
      Users.push( <>
                  <ListItem> 
                  <UserListItem name='Ahmed Bilal' progress='50'></UserListItem>
                  </ListItem>
                  <Divider></Divider>
                  </>
                  )
  }

  return (
    <>
    <Paper style={{maxHeight: 450, overflow: 'auto'}}>
        <List>
            {Users}
        </List>
    </Paper>
    <Link to={'/admin/'+ props.course + '/addLearner'}>
      <Button style={{'marginTop':'1.5%' }} variant='contained' fullWidth> Add New User + </Button>
    </Link>
    </>
  )
}

export default RegisteredUsers