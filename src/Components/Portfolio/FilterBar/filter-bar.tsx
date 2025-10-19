import './filter-bar.scss'
import { Skill } from "../../../Models/skill";
import { useState } from 'react';

type SkillFilter = {
  displayName: string;
  skillFilter: string;
}

const SkillFilters : SkillFilter[] = [{ displayName:"C++", skillFilter:"C++"},
                      { displayName:"Unity", skillFilter:"Unity3D"},
                      { displayName:"Mobile", skillFilter:"Mobile"},
                      { displayName:"Web", skillFilter:"Web"}]

export const FilterBar = ({activeFilters, addFilter, removeFilter, clearFilters} : 
                          {activeFilters: string[],
                            addFilter: (skill : string)=> void, 
                            removeFilter: (skill : string)=> void,
                            clearFilters: () => void}) => {

  const selectTag = (filter : SkillFilter) => {
    if (activeFilters.includes(filter.skillFilter)) {
      removeFilter(filter.skillFilter);
    }
    else {
      addFilter(filter.skillFilter);
    }
    
  }
  const selectAll = () => {
    clearFilters();
  }
  return (
    <div className='filter-bar'>
      <div className={(activeFilters.length == 0 ? 'selected-tag' : '') + ' filter-tag '} onClick={()=> selectAll()}>All</div>
      {
        SkillFilters.map( skill => (
          <div key={skill.displayName} className={(activeFilters.includes(skill.skillFilter) ? 'selected-tag' : '') + ' filter-tag '} onClick={() => selectTag(skill)}>{skill.displayName}</div>
        ))
      }
    </div>
  )}