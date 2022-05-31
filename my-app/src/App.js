import logo from './logo.svg';
import {BrowserRouter, Router, Routes,Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import './App.css';
import AdminPortal from './Components/AdminPortal/AdminPortal';
import CourseDetailedView from './Components/CourseDetailedView/CourseDetailedView';
import CreateCourse from './Components/CreateCourse/CreateCourse';
import AddLearnerToCourse from './Components/AddLearnerToCourse/AddLearnerToCourse';
function App() {
  return (
  <>
  
  
  <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path='/Signup' element={<Signup></Signup>}></Route>
      <Route path='/admin' element={<AdminPortal></AdminPortal>}></Route>
      <Route path='/admin/CreateCourse' element={<CreateCourse></CreateCourse>}></Route>
      <Route path='/admin/:CourseID' element={<CourseDetailedView></CourseDetailedView>}></Route>
      <Route path='/admin/:CourseID/addLearner' element={<AddLearnerToCourse></AddLearnerToCourse>}></Route>
    </Routes>
  </BrowserRouter>
  </>
  
  );
}

export default App;
