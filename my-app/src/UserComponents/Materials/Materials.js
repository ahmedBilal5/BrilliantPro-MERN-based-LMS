import React, { useEffect, useState } from 'react'
import {  List, ListItem, Divider, ListItemText,Paper } from '@mui/material'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Materials = () => {
   
   const { CourseID } = useParams()
   const url ='http://localhost:4000/Courses/'
   const [materials, setMaterials] = useState([])
   const [course, setCourse] = useState({})
   const [flag, setFlag] = useState(false)
   var uploadedFile = ''
   const MaterialArray = []


   useEffect(() => {
        
        axios.get(url + CourseID).then(res => {
            const materials = res.data.materials
            console.log(materials)
            setMaterials(materials)
            setCourse(res.data)
            console.log(course)
            console.log('learners', course.learners)
        })

   }, 
   [flag])

   const extractMaterial = () => {
       materials.map((mat)=> {
            MaterialArray.push(
                <>
                <ListItem>
                <ListItemText>
                    {/* <Typography variant='body1'>{props.name}</Typography> */}
                    <a href={'http://localhost:4000/'+ mat} download >{extractString(mat)}</a>
                </ListItemText>   
                {/* <Button onClick={() => removeMaterial(mat)}> Remove </Button> */}
                </ListItem>
                <Divider></Divider>
                </>
            )
       })
    return (
       MaterialArray
    )
   }

   const extractString = (str) => {
        for (let i = 0; i < str.length; i++){
            if (str[i] === '-')
                return str.substring(i+1)
        }
   }

  

//    const uploadFile = (e) => {
//        uploadedFile = e.target.files[0]
//        document.getElementById('material').innerHTML = uploadedFile.name
    
//    }
//    const addNew = async () => {
//         const file = uploadedFile
//         const formData = new FormData()
//         await formData.append('files', file)
//         for (let [key, value] of formData.entries()) { 
//             console.log(key, value);
//         }
//         await axios.post(url + CourseID + '/addMaterial', formData).then(res => console.log('putting course', res)).catch(err => console.log(err))
//         rerender()
//    }

//    const removeMaterial = async (mat) => {
//     console.log('material-->', mat)
//     await axios.put(url + CourseID + '/removeMaterial', {mat}).then(res => console.log('removing course', res)).catch(err => console.log(err))
//     rerender()
//    }


  return (
    <>
    <Paper style={{height: '70vh', maxHeight: '70vh',overflow: 'auto'}}>
    <List>
        {extractMaterial()}
    </List>
    </Paper>
    {/* <Button variant="contained" component="label" style={{'width': '60%', 'marginLeft': '20%'}}>Upload new Material<input type="file" hidden onChange={uploadFile}/></Button>
    <Typography variant='body2' id='material' style={{'marginBottom': '2%', 'textAlign': 'center'}}>No file Attached</Typography>
    <Button variant="contained" component="label" style={{'width': '80%', 'marginLeft': '10%'}} onClick={addNew}>Save</Button> */}
    </>
    
  )
}

export default Materials