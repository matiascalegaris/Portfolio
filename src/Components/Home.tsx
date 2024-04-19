import { GetSkillList } from "../Api";
import { Profile } from "../Models/profile";
import { WorkHistory } from "./WorkHistory/work-history"

export const Home = ({resume} : {resume: Profile}) => {
  let skillList = GetSkillList(resume.projectHistory)
  skillList = skillList.map( el => {
    el.time = Math.round(el.time);
    return el;
  })
  skillList = skillList.filter( el => (el.time > 0 && !el.hideOnMain))
  skillList.sort( (a,b) => (a.priorityGroup - b.priorityGroup))
  const programmingLanguages = skillList.filter( e => (e.skillType === "language"))
  const techologies = skillList.filter( e => (e.skillType === "technology"))
  return(
    <section className='profile-grid'>
        <div className='main-grid'>
          <WorkHistory jobList={resume.workHistory}/>
        </div>
        <div className='secondary-grid about-me-style'>
          <h3>About me</h3>
          {
            resume.summary.map( summary => (
              <p>{summary}</p>
            ))        
          }

          <h4>Programming Languages</h4>
          <ul>
            {
              programmingLanguages.map( (el, index) => (
                <li key={index}>{el.name} {el.time} { el.time > 1 ? "Years" : "Year"}</li>
              ))
            }            
          </ul>
          <h4>Techonologies</h4>
          <ul>
            {
              techologies.map( (el, index) => (
                <li key={index}>{el.name} {el.time} { el.time > 1 ? "Years" : "Year"}</li>
              ))
            }            
          </ul>
        </div>
      </section>
  )}