import { MobileProject, Project } from "../../../../Models/project"
import { CellphoneFrame } from "../CellphoneFrame/cellphone-carrousel"
import { Carrousel } from "../carrousel"
import { SkillList } from "../skill-list"

export const CellphoneProjectDetail = ({projectDetails} : {projectDetails : MobileProject}) => {
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
      {
        projectDetails.images.length > 0 ?
        <CellphoneFrame styles="ds-grid-secondary" cellType={projectDetails.cellType}><Carrousel imageList={projectDetails.images}/></CellphoneFrame>
      : null
      }
      
    </article>
  )}