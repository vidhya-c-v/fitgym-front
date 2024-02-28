import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import PackageDetails from './components/PackageDetails';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import TrainerLogin from './components/TrainerLogin';

import AdminHomePage from './components/AdminHomePage';


import ViewUserList from './components/ViewUserList';
import ViewTrainerList from './components/ViewTrainerList';
import AddPackage from './components/AddPackage';
import UpdatePackage from './components/UpdatePackage';

import SearchTrainer from './components/SearchTrainer';

import AddUser from './components/AddUser';

import AddTrainer from './components/AddTrainer';
import UserHomePage from './components/UserHomePage';
import TrainerHomePage from './components/TrainerHomePage';
import SearchUser from './components/SearchUser';
import TrainerSearch from './components/TrainerSearch';





function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/packagedetails' element={<PackageDetails/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/userlogin' element = {<UserLogin/>} />
        <Route path='/trainerLogin' element={<TrainerLogin/>}/>


        <Route path='/adminHomePage' element={<AdminHomePage/>} />
        <Route path='/userhomepage' element={<UserHomePage/>}/>
        <Route path='/trainerhomepage' element={<TrainerHomePage/>} />

        <Route path='/viewuserlist' element = {<ViewUserList/>} />
        <Route path='/viewtrainerlist' element = {<ViewTrainerList/>} />
        <Route path='/addtrainer' element = {<AddTrainer/>} />

        <Route path='/addpackage' element = {<AddPackage/>} />
        <Route path='/updatepackage' element = {<UpdatePackage/>} />
        
        <Route path='/searchtrainer' element = {<SearchTrainer/>} />
        <Route path='/adduser' element = {<AddUser/>} />
        <Route path='/searchmember' element = {<SearchUser/>} />
        <Route path='/trainersearch' element = {<TrainerSearch/>} />
       


      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
