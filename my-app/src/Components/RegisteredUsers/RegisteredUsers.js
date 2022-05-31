import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import UserListItem from '../UserListItem/UserListItem';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';

const RegisteredUsers = () => {
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
    <Button style={{'marginTop':'1.5%' }} variant='contained' fullWidth> Add New User + </Button>
    </>
  )
}

export default RegisteredUsers