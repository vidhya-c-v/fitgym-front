import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import TrainerLogin from './components/TrainerLogin';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trainerLogin' element={<TrainerLogin/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
