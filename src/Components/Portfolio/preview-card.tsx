import React from 'react'
import { Project } from "../../Models/project"
import { useNavigate } from 'react-router-dom'

export const PreviewCard = ({project} : {project: Project}) => {
  const style : React.CSSProperties = {
    backgroundImage: `url(${project.coverPicture})`,
    gridColumn: `span ${project.previewColumns}`,
    gridRow: `span ${project.previewRows}`
  }
  const navigate = useNavigate();
  const onClick = (evt : React.MouseEvent<HTMLElement>) => {
    navigate("project/" + project.id)
  }
  return (
    <article className="preview-card" style={style} onClick={onClick}>
      <h2>{project.name}</h2>
    </article>
  )
}