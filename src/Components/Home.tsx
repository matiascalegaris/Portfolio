import { GetResume, GetSkillList } from "../Api";
import { WorkHistory } from "./WorkHistory/work-history"

export const Home = () => {
  const resume = GetResume();
  let skillList = GetSkillList(resume.projectHistory)
  skillList = skillList.map( el => {
    el.time = Math.round(el.time);
    return el;
  })
  skillList = skillList.filter( el => (el.time > 0 && !el.hideOnMain))
  skillList.sort( (a,b) => (a.priorityGroup - b.priorityGroup))
  return(
    <section className='profile-grid'>
        <div className='main-grid'>
          <WorkHistory jobList={resume.workHistory}/>
        </div>
        <div className='secondary-grid'>
          <h3>About me</h3>
          <p>{resume.summary}</p>
          <ul>
            {
              skillList.map( (el, index) => (
                <li key={index}>{el.name} {el.time} Years</li>
              ))
            }
            
          </ul>
        </div>
      </section>
  )}