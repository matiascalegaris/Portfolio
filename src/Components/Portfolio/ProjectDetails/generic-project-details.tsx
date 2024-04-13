import { Project } from "../../../Models/project";
import { SkillList } from "./skill-list";

export const GenericProjectDetails = ({projectDetails} : {projectDetails : Project}) => {
  const style : React.CSSProperties = {
    gridColumnStart: 2,
    gridColumnEnd: 4,
  }
  return (
    <article className="profile-grid" >
      <h2 className="main-grid" style={ style}>{projectDetails.name}</h2>
      <p className="main-grid" style={ style}>{projectDetails.summary}
      {
        projectDetails.relatedSites.map ( sites =>(
          
          <span><br/><br/>{sites.description}<br/><a href={sites.url}>{sites.url}</a></span>
        ))        
      }
      <br/><br/>
      <SkillList projectDetails={projectDetails}/>
      </p>
      
    </article>
)}