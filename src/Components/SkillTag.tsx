import { Skill } from "../Models/skill";
import { Link } from "react-router-dom";

export const SkillTag = ({skill} : {skill : Skill}) => {
  return (
    <div className="skill-tag">
      <li><Link to={"/" + encodeURIComponent(skill.name)}>{skill.name} {skill.time} { skill.time > 1 ? "Years" : "Year"}</Link> </li>
    </div>
  )
}