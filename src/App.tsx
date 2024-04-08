import { Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import { Header } from './Components/Header/header';
import { Home } from './Components/Home';
import { Portfolio } from './Components/Portfolio/portfolio';


function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
