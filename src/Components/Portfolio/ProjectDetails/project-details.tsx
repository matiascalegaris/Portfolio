import { useNavigate, useParams } from "react-router-dom";
import { Profile } from "../../../Models/profile"
import { DSProjectDetails } from "./DSProjectDetails/ds-project-details";
import { GenericProjectDetails } from "./generic-project-details";
import { CellphoneProjectDetail } from "./CellphoneProjectDetail/cellphone-project-detail";
import { MobileProject, RestosProject, RobotTournamentProject } from "../../../Models/project";
import './portfolio-styles.scss'
import { RobotTournamentDetails } from "./RobotTournament/robot-tournament";
import { RestosDetails } from "./restos-detail";
import { ChatbotDetails } from "./chatbot-details";

export const ProjectDetails = ({resume} : {resume: Profile}) => {
  const params = useParams<{id: string}>();
  const id = Number(params.id) < resume.projectHistory.length ? Number(params.id) : resume.projectHistory.length - 1
  const projectDetails = resume.projectHistory.find( project => (project.id === id))
  const navigate = useNavigate();
  const goToPrevProject = () => {
    navigate("../../project/" + (id - 1))
  }
  const goToNextProject = () => {
    navigate("../../project/" + (id + 1))
  }
  const goToProjectSelection = () => {
    navigate("../../")
  }
  return (
    <div className="project-area">
      {
        projectDetails &&
        {
          'DS':<DSProjectDetails projectDetails={projectDetails}/>,
          'Generic':<GenericProjectDetails projectDetails={projectDetails}/>,
          'Desktop':<GenericProjectDetails projectDetails={projectDetails}/>,
          'Mobile':<CellphoneProjectDetail projectDetails={projectDetails as MobileProject}/>,
          'RobotTournament':<RobotTournamentDetails projectDetails={projectDetails as RobotTournamentProject}/>,
          'Restos':<RestosDetails projectDetails={projectDetails as RestosProject}/>,
          'Chatbot':<ChatbotDetails projectDetails={projectDetails}/>
        }
        [projectDetails.projectType]
      }
      <footer className="project-footer">
        {
          id > 1 &&
          <div className="button-style" onClick={()=>{goToPrevProject()}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 55.753 55.753">
              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
              <g id="SVGRepo_iconCarrier"> <g> <path d="M12.745,23.915c0.283-0.282,0.59-0.52,0.913-0.727L35.266,1.581c2.108-2.107,5.528-2.108,7.637,0.001 c2.109,2.108,2.109,5.527,0,7.637L24.294,27.828l18.705,18.706c2.109,2.108,2.109,5.526,0,7.637 c-1.055,1.056-2.438,1.582-3.818,1.582s-2.764-0.526-3.818-1.582L13.658,32.464c-0.323-0.207-0.632-0.445-0.913-0.727 c-1.078-1.078-1.598-2.498-1.572-3.911C11.147,26.413,11.667,24.994,12.745,23.915z"/> </g> </g>
            </svg>
          </div>
        }
        <div className="button-style" onClick={()=>{goToProjectSelection()}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 25 25" fill="none">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M19 3.32001H16C14.8954 3.32001 14 4.21544 14 5.32001V8.32001C14 9.42458 14.8954 10.32 16 10.32H19C20.1046 10.32 21 9.42458 21 8.32001V5.32001C21 4.21544 20.1046 3.32001 19 3.32001Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 3.32001H5C3.89543 3.32001 3 4.21544 3 5.32001V8.32001C3 9.42458 3.89543 10.32 5 10.32H8C9.10457 10.32 10 9.42458 10 8.32001V5.32001C10 4.21544 9.10457 3.32001 8 3.32001Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19 14.32H16C14.8954 14.32 14 15.2154 14 16.32V19.32C14 20.4246 14.8954 21.32 16 21.32H19C20.1046 21.32 21 20.4246 21 19.32V16.32C21 15.2154 20.1046 14.32 19 14.32Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 14.32H5C3.89543 14.32 3 15.2154 3 16.32V19.32C3 20.4246 3.89543 21.32 5 21.32H8C9.10457 21.32 10 20.4246 10 19.32V16.32C10 15.2154 9.10457 14.32 8 14.32Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
          </svg>
        </div>
        {
          id < resume.projectHistory.length - 1 &&
          <div className="button-style" onClick={()=>{goToNextProject()}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 55.752 55.752">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <g> <path d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001 c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58 s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912 C44.605,26.413,44.086,24.993,43.006,23.916z"/> </g> </g>
            </svg>
          </div>
        }
        
      </footer>
    </div>
  )}

  
