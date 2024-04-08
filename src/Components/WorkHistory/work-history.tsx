import "./work-history.scss"
import { JobPosition } from "../../Models/job-position"
import { JobEntry } from "./JobEntry/job-entry"

export const WorkHistory = ({jobList } : { jobList: JobPosition[]}) => {
  const orderedList = jobList.sort((a, b) => {
    return b.id - a.id;
  })
  return (
    <section className="main-grid">
      {
        orderedList.map( job=> (
          <JobEntry key={job.id} jobInfo={job} className={"spacer"}/>
        ))
      }
    </section>
  )
}