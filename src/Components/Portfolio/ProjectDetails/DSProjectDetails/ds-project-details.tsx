import "./ds-project-details.scss"
import { DSProject } from "../../../../Models/project"
import { useEffect, useRef } from "react"
import { SkillList } from "../skill-list";
import { DSImageCarrousel } from "../DSImageCarrousel/ds-image-carrousel";

export const DSProjectDetails = ({projectDetails} : {projectDetails : DSProject}) => {
  return (
    <article className="ds-grid">
      <h2 className="main-grid">{projectDetails.name}</h2>
      <p className="main-grid">{projectDetails.summary}
      {
        projectDetails.relatedSites.map ( sites =>(
          
          <span><h5>{sites.description}</h5><a href={sites.url}>{sites.url}</a></span>
        ))
        
      }
      <br/><br/>
      <SkillList projectDetails={projectDetails}/>
      </p>      
      {
        projectDetails.images.length > 0 ?
        <DSImageCarrousel imageList={projectDetails.images} styles="secondary-grid"/>
      : null
      }
      
    </article>
  )}