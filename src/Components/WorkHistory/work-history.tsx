import "./work-history.scss"
import { JobPosition } from "../../Models/job-position"
import { JobEntry } from "./JobEntry/job-entry"

export const WorkHistory = ({jobList } : { jobList: JobPosition[]}) => {
  return (
    <section className="main-grid">
      {
        jobList.map( job=> (
          <JobEntry key={job.id} jobInfo={job} className={"spacer"}/>
        ))
      }
    </section>
  )
}