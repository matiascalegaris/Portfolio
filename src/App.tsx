import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './Components/Header/header';
import { GetResume } from './Api';
import { WorkHistory } from './Components/WorkHistory/work-history';

function App() {
  const resume = GetResume();
  return (
    <div className="App">
      <Header/>
      <section className='profile-grid'>
        <div className='main-grid'>
          <WorkHistory jobList={resume.workHistory}/>
        </div>
        <div className='secondary-grid'>
          <h3>About me</h3>
          <p>{resume.summary}</p>
        </div>
      </section>
      
    </div>
  );
}

export default App;
