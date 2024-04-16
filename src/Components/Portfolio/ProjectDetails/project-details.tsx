import { useParams } from "react-router-dom";
import { Profile } from "../../../Models/profile"
import { DSProjectDetails } from "./DSProjectDetails/ds-project-details";
import { GenericProjectDetails } from "./generic-project-details";
import { CellphoneProjectDetail } from "./CellphoneProjectDetail/cellphone-project-detail";
import { MobileProject } from "../../../Models/project";
import './portfolio-styles.scss'
import { RobotTournamentDetails } from "./RobotTournament/robot-tournament";

export const ProjectDetails = ({resume} : {resume: Profile}) => {
  const params = useParams<{id: string}>();
  const id = Number(params.id)
  const projectDetails = resume.projectHistory.find( project => (project.id === id))

  return (
    <div>
      {
        projectDetails &&
        {
          'DS':<DSProjectDetails projectDetails={projectDetails}/>,
          'Generic':<GenericProjectDetails projectDetails={projectDetails}/>,
          'Desktop':<GenericProjectDetails projectDetails={projectDetails}/>,
          'Mobile':<CellphoneProjectDetail projectDetails={projectDetails as MobileProject}/>,
          'RobotTournament':<RobotTournamentDetails projectDetails={projectDetails}/>
        }
        [projectDetails.projectType]
      }
    </div>
  )}

  
