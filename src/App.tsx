import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './Components/Header/header';
import { Home } from './Components/Home';
import { Portfolio } from './Components/Portfolio/portfolio';
import { ProjectDetails } from './Components/Portfolio/ProjectDetails/project-details';
import { GetResume } from './Api';


function App() {
  const resume = GetResume();
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Portfolio resume={resume}/>} />
        <Route path='/aboutme' element={<Home resume={resume}/>} />
        <Route path='/project/:id' element={<ProjectDetails resume={resume}/>}/>
      </Routes>
    </div>
  );
}

export default App;
