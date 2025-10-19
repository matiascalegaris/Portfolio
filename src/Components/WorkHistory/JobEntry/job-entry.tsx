import './job-entry.scss'
import { JobPosition } from "../../../Models/job-position";
import { useNavigate } from 'react-router-dom';

function GetFormatedDate (date : Date | null) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr",
                        "May", "Jun", "Jul", "Aug",
                        "Sep", "Oct", "Nov", "Dec"];
  if (date) {
    const monthName = monthNames[date.getMonth()];
    return `${monthName} - ${date.getFullYear()}`;
  }
  return "Now";
}


export const JobEntry = ( 
  {jobInfo, className, hideProjects = false } : 
  {jobInfo : JobPosition, className : string | null, hideProjects : boolean}) => {
  const navigate = useNavigate();
  const onSelectProject = (projectId : number) => {
    navigate("../project/" + projectId)
  }
  return (
    <article key={jobInfo.id} className={`job-entry  ${className}`}>
      <h3>{jobInfo.title}</h3>
      <h4>{jobInfo.companyName} {GetFormatedDate(jobInfo.startDate)} - {GetFormatedDate(jobInfo.endDate)}</h4>
      {
        jobInfo.summary.map( (summary, index) => (
          <p key={index}>{summary}</p>
        ))        
      }
      {
        !hideProjects &&
        <section className='project-history'>
          {
            jobInfo.projectList.map( project => (
              <div className='project-link' key={project.id} onClick={()=>{onSelectProject(project.id)}}>{project.name}</div>
            ))
          }
        </section>
      }
    </article>
  )}