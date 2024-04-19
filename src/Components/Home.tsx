import { Tooltip } from "react-tooltip";
import { GetSkillList } from "../Api";
import { Profile } from "../Models/profile";
import { SkillTag } from "./SkillTag";
import { WorkHistory } from "./WorkHistory/work-history"

export const Home = ({resume} : {resume: Profile}) => {
  let skillList = GetSkillList(resume.projectHistory)
  skillList = skillList.map( el => {
    el.time = Math.round(el.time);
    return el;
  })
  skillList = skillList.filter( el => (el.time > 0 && !el.hideOnMain))
  const programmingLanguages = skillList.filter( e => (e.skillType === "language"))
  programmingLanguages.sort( (a,b) => (b.time - a.time))
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
                <SkillTag key={index} skill={el}/>
              ))
            }            
          </ul>
          <Tooltip anchorSelect="skill-tag" place="bottom">
            Hello world!
          </Tooltip>
          <h4>Techonologies</h4>
          <ul>
            {
              techologies.map( (el, index) => (
                <SkillTag key={index} skill={el}/>
              ))
            }            
          </ul>
        </div>
      </section>
  )}