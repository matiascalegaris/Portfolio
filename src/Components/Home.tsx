import { GetResume } from "../Api";
import { WorkHistory } from "./WorkHistory/work-history"

export const Home = () => {
  const resume = GetResume();
  return(
    <section className='profile-grid'>
        <div className='main-grid'>
          <WorkHistory jobList={resume.workHistory}/>
        </div>
        <div className='secondary-grid'>
          <h3>About me</h3>
          <p>{resume.summary}</p>
        </div>
      </section>
  )}