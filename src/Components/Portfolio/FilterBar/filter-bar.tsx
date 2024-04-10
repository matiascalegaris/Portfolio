import './filter-bar.scss'
import { Skill } from "../../../Models/skill";

export const FilterBar = ({skillList} : {skillList : Skill[]}) => {
  return (
    <div className='filter-bar'>
      <svg viewBox="0 0 16 16" className="search-icon">
        <path d="m10.582 9.874 4.625 4.626-.707.707-4.626-4.625a6 6 0 1 1 .707-.707ZM6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10Z"></path>
      </svg>
      <input></input>
    </div>
  )}