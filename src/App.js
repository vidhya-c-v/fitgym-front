import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import PackageDetails from './components/PackageDetails';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/packagedetails' element={<PackageDetails/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
