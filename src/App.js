import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';

import UserLogin from './components/UserLogin';

import TrainerLogin from './components/TrainerLogin';
import ViewUserList from './components/ViewUserList';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/adminlogin' element={<AdminLogin/>}/>


        <Route path='/userlogin' element = {<UserLogin/>} />

        <Route path='/trainerLogin' element={<TrainerLogin/>}/>

        <Route path='/viewuserlist' element = {<ViewUserList/>} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
