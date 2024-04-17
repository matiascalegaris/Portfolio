import { MobileProject, Project } from "../../../../Models/project"
import { CellphoneFrame } from "../CellphoneFrame/cellphone-carrousel"
import { Carrousel } from "../carrousel"
import { SkillList } from "../skill-list"

export const CellphoneProjectDetail = ({projectDetails} : {projectDetails : MobileProject}) => {
  return (
    <article className="ds-grid">
      <h2 className="ds-grid-main">{projectDetails.name}</h2>
      <div className="ds-grid-main">
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
      {
        projectDetails.images.length > 0 ?
        <CellphoneFrame styles="ds-grid-secondary" cellType={projectDetails.cellType}><Carrousel imageList={projectDetails.images}/></CellphoneFrame>
      : null
      }
      
    </article>
  )}