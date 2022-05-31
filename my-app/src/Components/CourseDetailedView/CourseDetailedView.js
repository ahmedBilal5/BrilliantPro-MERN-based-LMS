import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CourseGrid from '../CourseGrid/CourseGrid';
import RegisteredUsers from '../RegisteredUsers/RegisteredUsers';

const CourseDetailedView = () => {
  const [value, setValue] = React.useState('Materials')

  const updateState = (event, newValue) => {
      setValue(newValue)

  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={updateState} aria-label="Course tabs">
          <Tab label="Materials" value="Materials"/>
          <Tab label="Assessments" value="Assessments"/>
          <Tab label="Settings" value="Settings"/>
          <Tab label="Users" value="Users"/>
        </TabList>
      </Box>

      <TabPanel value="Materials">Materials</TabPanel>
      <TabPanel value="Assessments">Assessments</TabPanel>
      <TabPanel value="Settings">Settings</TabPanel>
      <TabPanel value="Users"><RegisteredUsers></RegisteredUsers></TabPanel>


    </TabContext>
  </Box>
  )
}

export default CourseDetailedView