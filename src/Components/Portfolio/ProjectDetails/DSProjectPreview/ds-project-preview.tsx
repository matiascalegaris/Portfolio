import "./ds-project-preview.scss"
import { DSProject } from "../../../../Models/project"

export const DSProjectPreview = ({projectDetails} : {projectDetails : DSProject}) => {
  const dsStyle : React.CSSProperties = {
    maxWidth: `500px`,
  }
  return (
    <article className="ds-grid">
      <h2 className="main-grid">{projectDetails.name}</h2>
      <p className="main-grid">{projectDetails.summary}</p>

      <img style={dsStyle} className="secondary-grid" src="/portfolio-resources/NintendoDSImage.png"/>
    </article>
  )}