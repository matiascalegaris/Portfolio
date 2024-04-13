import { Project } from "../../../Models/project"

export const SkillList = ({projectDetails} : {projectDetails : Project}) => {
  return (
    <section>
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