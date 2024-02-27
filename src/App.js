import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import UserLogin from './components/UserLogin';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userlogin' element = {<UserLogin/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
