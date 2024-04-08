import React from 'react'
import { Project } from "../../Models/project"

export const PreviewCard = ({project} : {project: Project}) => {
  const style : React.CSSProperties = {
    backgroundImage: `url(${project.coverPicture})`,
    gridColumn: `span ${project.previewColumns}`,
    gridRow: `span ${project.previewRows}`
  }
  return (
    <article className="preview-card" style={style}>
      <h2>{project.name}</h2>
    </article>
  )
}