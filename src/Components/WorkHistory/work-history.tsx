import "./work-history.scss"
import { JobPosition } from "../../Models/job-position"
import { JobEntry } from "./JobEntry/job-entry"
import { useSearchParams } from "react-router-dom";

export const WorkHistory = ({jobList } : { jobList: JobPosition[]}) => {
  const [searchParams] = useSearchParams();
  const isPrintable = searchParams.has("printable");
  const orderedList = jobList.sort((a, b) => {
    return b.id - a.id;
  })
  return (
    <section className="main-grid work-history">
      {
        orderedList.map( job=> (
          <JobEntry key={job.id} jobInfo={job} className={"spacer"} hideProjects={isPrintable}/>
        ))
      }
    </section>
  )
}