import { Tooltip } from "react-tooltip";
import { Skill } from "../Models/skill";

export const SkillTag = ({skill} : {skill : Skill}) => {
  return (
    <div className="skill-tag">
      <li>{skill.name} {skill.time} { skill.time > 1 ? "Years" : "Year"}</li>
    </div>
    
  )
}