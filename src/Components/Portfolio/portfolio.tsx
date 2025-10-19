import { useState } from 'react';
import { GetSkillList } from '../../Api';
import { FilterBar } from './FilterBar/filter-bar';
import './portfolio.scss'
import { PreviewCard } from './preview-card';
import { Profile } from '../../Models/profile';
import { useParams } from 'react-router-dom';

export const Portfolio = ({resume} : {resume: Profile})=> {
  const params = useParams<{filters: string}>();
  const urlFilters = params.filters?.split(",")
  const [activeFilters, setActiveFilters] = useState<string[]>(urlFilters || [])
  let filteredList = resume.projectHistory.filter(e => (!e.hideInGrid))
  if (activeFilters.length > 0) {
    filteredList = resume.projectHistory.filter( e => 
      e.usedTechologies.some( 
        el => (activeFilters.find( 
          (skill => skill === el))
        )
      ));
  }
  const projectList = filteredList.sort( (a,b) => {
    return b.id - a.id;
  })
  const addFilter = ( skill : string) => {
    setActiveFilters([...activeFilters, skill])
  }
  const removeFilter = (skill : string) => {
    setActiveFilters(activeFilters.filter( el => (el !== skill)))
  }
  const clearFilters = () => {
    setActiveFilters([])
  }
  return (
    <div className='portfolio'>
      <FilterBar activeFilters={activeFilters} removeFilter={removeFilter} addFilter={addFilter} clearFilters={clearFilters}/>
      <section className='porfolio-grid'>
        {
          projectList.map( project=> (
            <PreviewCard key={project.id} project={project}/>
          ))
        }
      </section>
    </div>
  )}