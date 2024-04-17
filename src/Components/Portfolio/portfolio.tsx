import { useState } from 'react';
import { GetSkillList } from '../../Api';
import { FilterBar } from './FilterBar/filter-bar';
import './portfolio.scss'
import { PreviewCard } from './preview-card';
import { Skill } from '../../Models/skill';
import { Profile } from '../../Models/profile';

export const Portfolio = ({resume} : {resume: Profile})=> {
  const [activeFilters, setActiveFilters] = useState<Skill[]>([])
  const skillList = GetSkillList(resume.projectHistory);
  let filteredList = resume.projectHistory.filter(e => (!e.hideInGrid))
  if (activeFilters.length > 0) {
    filteredList = resume.projectHistory.filter( e => 
      e.usedTechologies.some( 
        el => (activeFilters.find( 
          (skill => skill.name === el))
        )
      ));
  }
  const projectList = filteredList.sort( (a,b) => {
    return b.id - a.id;
  })
  const addFilter = ( skill : Skill) => {
    setActiveFilters([...activeFilters, skill])
  }
  const removeFilter = (skill : Skill) => {
    setActiveFilters(activeFilters.filter( el => (el.name !== skill.name)))
  }
  return (
    <div className='portfolio'>
      <FilterBar skillList={skillList} activeFilters={activeFilters} addFilter={addFilter}/>
      <div className='active-filters'>
        {
          activeFilters.map( filter => (
            <div className='filter'>{filter.name}
              <span aria-label="delete icon" role="button" className="close-button" onClick={() => (removeFilter(filter))}>
                <svg viewBox="0 0 16 16">
                  <path d="m8.707 8 3.5 3.5-.707.707-3.5-3.5-3.5 3.5-.707-.707 3.5-3.5-3.5-3.5.707-.707 3.5 3.5 3.5-3.5.707.707-3.5 3.5Z"></path>
                </svg>
              </span>
            </div>
          ))
        }
        
      </div>
      <section className='porfolio-grid'>
        {
          projectList.map( project=> (
            <PreviewCard key={project.id} project={project}/>
          ))
        }
      </section>
    </div>
  )}