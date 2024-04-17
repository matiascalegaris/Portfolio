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
  const textStyle = project.backgroundStyle === "Light" ? "light-background" : "dark-background";
  return (
    <article className={"preview-card " + textStyle} style={style} onClick={onClick}>
      <h3>{project.name}</h3>
    </article>
  )
}