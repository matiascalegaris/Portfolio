import { Project } from "../../../Models/project"

export const SkillList = ({projectDetails, styles = ""} : 
                          {projectDetails : Project, styles?:string}) => {
  return (
    <section className={styles}>
      <h4>Techonologies required for this project</h4>
      <ul>
      {
        projectDetails.usedTechologies.map( techName => (
          <li>{techName}</li>
        ))
      }
      </ul>
    </section>
  )}