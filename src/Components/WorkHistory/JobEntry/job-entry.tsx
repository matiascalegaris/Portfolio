import './job-entry.scss'
import { JobPosition } from "../../../Models/job-position";

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

export const JobEntry = ( {jobInfo, className } : { jobInfo : JobPosition, className : string | null}) => {
  return (
    <article className={`job-entry  ${className}`}>
      <h3>{jobInfo.title}</h3>
      <h4>{jobInfo.companyName} {GetFormatedDate(jobInfo.startDate)} - {GetFormatedDate(jobInfo.endDate)}</h4>
      <p>{jobInfo.summary}</p>
    </article>
  )}