import React, { useEffect, useState } from 'react'
import { Project } from "../../Models/project"
import { useNavigate } from 'react-router-dom'

export const PreviewCard = ({project} : {project: Project}) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const style : React.CSSProperties = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3) ), url(${project.coverPicture})`,
    gridColumn: `span ${project.previewColumns}`,
    gridRow: `span ${project.previewRows}`,
    minHeight: `${project.previewRows * width > 600 ? 250 : 150}px`
  }
  const navigate = useNavigate();
  const onClick = (evt : React.MouseEvent<HTMLElement>) => {
    navigate("project/" + project.id)
  }
  const textStyle = "dark-background"//project.backgroundStyle === "Light" ? "light-background" : "dark-background";
  return (
    <article className={"preview-card " + textStyle} style={style} onClick={onClick}>
      
      <h3>{project.name}</h3>
    </article>
  )
}