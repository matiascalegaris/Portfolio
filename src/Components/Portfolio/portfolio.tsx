import { GetResume, GetSkillList } from '../../Api';
import { FilterBar } from './FilterBar/filter-bar';
import './portfolio.scss'
import { PreviewCard } from './preview-card';

export const Portfolio = ()=> {
  const resume = GetResume();
  const skillList = GetSkillList(resume.projectHistory);
  const projectList = resume.projectHistory.filter( e => (!e.hideInGrid)).sort( (a,b) => {
    return b.id - a.id;
  })
  return (
    <div className='portfolio'>
      <FilterBar skillList={skillList}/>
      <section className='porfolio-grid'>
        {
          projectList.map( project=> (
            <PreviewCard key={project.id} project={project}/>
          ))
        }
      </section>
    </div>
  )}