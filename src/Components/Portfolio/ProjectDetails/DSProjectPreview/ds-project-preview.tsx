import "./ds-project-preview.scss"
import { DSProject } from "../../../../Models/project"

export const DSProjectPreview = ({projectDetails} : {projectDetails : DSProject}) => {

  return (
    <article className="ds-grid">
      <h2 className="main-grid">{projectDetails.name}</h2>
      <p className="main-grid">{projectDetails.summary}</p>
      <div className="ds-area secondary-grid">
        <div className="top-screen"><img src={projectDetails.images[0]}/></div>
        <div className="bottom-screen"><img className="bottom-img" src={projectDetails.images[0]}/></div>
        <img className="ds" src="/portfolio-resources/NintendoDSImage.png"/>
      </div>
    </article>
  )}