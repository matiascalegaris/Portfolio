import { Project } from "../../../../Models/project"
import { Carrousel } from "../carrousel"
import "./robot-tournament.scss"

export const RobotTournamentDetails = ({projectDetails} : { projectDetails: Project}) => {
  return (
    <article className="tournament-grid">
      <h2 className="grid-center">{projectDetails.name}</h2>
      <p className="grid-center">{projectDetails.summary} </p>

      <p className="grid-col2">Since this was a one time event, we didn’t have much times to test and deploy new versions of the software, so we coupled to the implementation team and iterated with them on the firsts rounds of the tournament, to implement the changes that arised with the first experience of the platform usage.
The system has four components: the server that manages all the data and state of the tournament and feeds the big screens of the stadium, the operation room desktop app where we can switch the content of the screens and advance the tournament, and two mobile apps: the referee app and the assistant app.
When a match is played, a cooperation between operator, referee and assistant is required in order to report the score in real time for each time and also validate this score, so we solved that interaction with apps.
      </p>
      <div className="grid-col3 col-span3 wide16-9" >
        <div className="carrousel-container">
          <Carrousel imageList={projectDetails.images}/>
        </div>
      </div>

      <iframe src="https://player.vimeo.com/video/357197603?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;player_id=iframe6444" 
        className="grid-center"
        id="iframe6444" 
        data-ready="true"></iframe>
    </article>
)}