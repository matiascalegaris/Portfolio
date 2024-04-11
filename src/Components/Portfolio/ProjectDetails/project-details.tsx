import { useParams } from "react-router-dom";
import { Profile } from "../../../Models/profile"
import { DSProject } from "../../../Models/project";
import { DSProjectPreview } from "./DSProjectPreview/ds-project-preview";

export const ProjectDetails = ({resume} : {resume: Profile}) => {
  const params = useParams<{id: string}>();
  const id = Number(params.id)
  const projectDetails = resume.projectHistory.find( project => (project.id === id))

  return (
    <div>
      {
        projectDetails &&
        {
          'DS':<DSProjectPreview projectDetails={projectDetails as DSProject}/>,
          'Generic':<DSProjectPreview projectDetails={projectDetails as DSProject}/>,
          'Desktop':<DSProjectPreview projectDetails={projectDetails as DSProject}/>,
          'Mobile':<DSProjectPreview projectDetails={projectDetails as DSProject}/>,
        }
        [projectDetails.projectType]
      }
    </div>
  )}

  
