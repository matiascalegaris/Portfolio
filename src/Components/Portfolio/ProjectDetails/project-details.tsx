import { useParams } from "react-router-dom";
import { Profile } from "../../../Models/profile"
import { DSProject } from "../../../Models/project";
import { DSProjectDetails } from "./DSProjectDetails/ds-project-details";
import { GenericProjectDetails } from "./generic-project-details";

export const ProjectDetails = ({resume} : {resume: Profile}) => {
  const params = useParams<{id: string}>();
  const id = Number(params.id)
  const projectDetails = resume.projectHistory.find( project => (project.id === id))

  return (
    <div>
      {
        projectDetails &&
        {
          'DS':<DSProjectDetails projectDetails={projectDetails as DSProject}/>,
          'Generic':<GenericProjectDetails projectDetails={projectDetails}/>,
          'Desktop':<GenericProjectDetails projectDetails={projectDetails}/>,
          'Mobile':<GenericProjectDetails projectDetails={projectDetails}/>,
        }
        [projectDetails.projectType]
      }
    </div>
  )}

  
