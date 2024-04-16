import "./ds-project-details.scss"
import { Project } from "../../../../Models/project"
import { SkillList } from "../skill-list";
import { DSImageCarrousel } from "../DSImageCarrousel/ds-image-carrousel";

export const DSProjectDetails = ({projectDetails} : {projectDetails : Project}) => {
  return (
    <article className="ds-grid">
      <h2 className="ds-grid-main">{projectDetails.name}</h2>
      <p className="ds-grid-main">{projectDetails.summary}
      {
        projectDetails.relatedSites.map ( sites =>(
          
          <span><h5>{sites.description}</h5><a href={sites.url}>{sites.url}</a></span>
        ))
        
      }
      <br/><br/>
      <SkillList projectDetails={projectDetails}/>
      </p>      
      <DSImageCarrousel imageList={projectDetails.images} styles="ds-grid-secondary"/>      
    </article>
  )}