import "./ds-project-details.scss"
import { Project } from "../../../../Models/project"
import { SkillList } from "../skill-list";
import { DSImageCarrousel } from "../DSImageCarrousel/ds-image-carrousel";

export const DSProjectDetails = ({projectDetails} : {projectDetails : Project}) => {
  return (
    <article className="ds-grid margin-top20">
      <div className="ds-grid-main">
      <h2>{projectDetails.name}</h2>
      {
        projectDetails.summary.map( summary => (
          <p className="center-columns">{summary}</p>
        ))        
      }    
      {
        projectDetails.relatedSites.map ( sites =>(
          
          <span><h5>{sites.description}</h5><a href={sites.url}>{sites.url}</a></span>
        ))        
      }
      <SkillList projectDetails={projectDetails}/>
      </div>
      <DSImageCarrousel imageList={projectDetails.images} styles="ds-grid-secondary"/>      
    </article>
  )}