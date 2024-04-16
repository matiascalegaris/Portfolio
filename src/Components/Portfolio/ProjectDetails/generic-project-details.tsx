import { Project } from "../../../Models/project";
import { Carrousel } from "./carrousel";
import { SkillList } from "./skill-list";

export const GenericProjectDetails = ({projectDetails} : {projectDetails : Project}) => {
  return (
    <article className="profile-grid" >
      <h2 className="center-columns">{projectDetails.name}</h2>
      <p className="center-columns">{projectDetails.summary}
      {
        projectDetails.relatedSites.map ( sites =>(
          
          <span><br/><br/>{sites.description}<br/><a href={sites.url}>{sites.url}</a></span>
        ))        
      }      
      </p>
      {
        projectDetails.images.length > 0 ? 
        <Carrousel styles="centered-in-grid center-multicolumn-element" imageList={projectDetails.images}/> : null
      }
      {
        projectDetails.video && 
        <div className="centered-in-grid center-multicolumn-element">
          <iframe  width="1024" height="576" src={projectDetails.video}>
          </iframe>
        </div>
      }
      <SkillList styles="center-columns" projectDetails={projectDetails}/>
    </article>
)}