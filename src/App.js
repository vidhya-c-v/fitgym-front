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
import Search from './components/Search';
import SearchTrainer from './components/SearchTrainer';
import AddTrainer from './components/AddTrainer';


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

        <Route path='/viewuserlist' element = {<ViewUserList/>} />
        <Route path='/viewtrainerlist' element = {<ViewTrainerList/>} />
        <Route path='/addtrainer' element = {<AddTrainer/>} />

        <Route path='/addpackage' element = {<AddPackage/>} />
        <Route path='/updatepackage' element = {<UpdatePackage/>} />
        <Route path='/searchuser' element = {<Search/>} />
        <Route path='/searchtrainer' element = {<SearchTrainer/>} />


      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
