import { GetResume } from '../../Api';
import './portfolio.scss'
import { PreviewCard } from './preview-card';

export const Portfolio = ()=> {
  const resume = GetResume();
  const projectList = resume.projectHistory.sort( (a,b) => {
    return b.id - a.id;
  })
  return (
    <section className='porfolio-grid'>
      {
        resume.projectHistory.map( project=> (
          <PreviewCard key={project.id} project={project}/>
        ))
      }
    </section>
  )}