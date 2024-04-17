import { Project } from "../../../Models/project";
import { LaptopFrame } from "./LaptopFrame/laptop-frame";
import { Carrousel } from "./carrousel";
import { SkillList } from "./skill-list";

export const ChatbotDetails = ({projectDetails} : {projectDetails: Project}) => {
  return (
    <article className="profile-grid">
      <h2 className="center-columns">{projectDetails.name}</h2>
      {
        projectDetails.summary.map( summary => (
          <p className="center-columns">{summary}</p>
        ))        
      }   
      <div className="center-columns">
        <LaptopFrame><Carrousel imageList={projectDetails.images} /></LaptopFrame>
      </div>
      <SkillList styles="center-columns" projectDetails={projectDetails} />
    </article>
  );
}