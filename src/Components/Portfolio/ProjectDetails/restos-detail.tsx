import { RestosProject } from "../../../Models/project";
import { CellphoneFrame } from "./CellphoneFrame/cellphone-carrousel";
import { TabletFrame } from "./TabletFrame/tablet-frame";
import { Carrousel } from "./carrousel";
import { SkillList } from "./skill-list";

export const RestosDetails = ({projectDetails} : {projectDetails: RestosProject}) => {
  return (
    <article className="profile-grid">
      <h2 className="center-columns">{projectDetails.name}</h2>
      {
        projectDetails.summary.map( summary => (
          <p className="center-columns">{summary}</p>
        ))        
      }   
      <div className="center-columns">
        <h4>Table App</h4>
        <TabletFrame><img className="full-width full-height" src={projectDetails.images[1]}/></TabletFrame>
      </div>
      <div className="center-columns">
        <h4>Point of sale app</h4>
        <TabletFrame><img className="full-width full-height" src={projectDetails.images[0]}/></TabletFrame>
      </div>
      <CellphoneFrame styles="main-grid" cellType="android"><Carrousel imageList={projectDetails.mobilePictures}/></CellphoneFrame>
      <SkillList styles="secondary-grid" projectDetails={projectDetails}/>
    </article>
  );
}