import { RobotTournamentProject } from "../../../../Models/project"
import { CellphoneFrame } from "../CellphoneFrame/cellphone-carrousel"
import { LaptopFrame } from "../LaptopFrame/laptop-frame"
import { Carrousel } from "../carrousel"
import "./robot-tournament.scss"

export const RobotTournamentDetails = ({projectDetails} : { projectDetails: RobotTournamentProject}) => {
  return (
    <article className="tournament-grid">
      <h2 className="grid-center">{projectDetails.name}</h2>
      <p className="grid-center">{projectDetails.summary} </p>

      <p className="grid-col2 col-span2">Since this was a one time event, we didn’t have much times to test and deploy new versions of the software, so we coupled to the implementation team and iterated with them on the firsts rounds of the tournament, to implement the changes that arised with the first experience of the platform usage.
The system has four components: the server that manages all the data and state of the tournament and feeds the big screens of the stadium, the operation room desktop app where we can switch the content of the screens and advance the tournament, and two mobile apps: the referee app and the assistant app.
When a match is played, a cooperation between operator, referee and assistant is required in order to report the score in real time for each time and also validate this score, so we solved that interaction with apps.
      </p>
      <div className="grid-col4 col-span2 wide16-9" >
        <div className="carrousel-container">
          <Carrousel imageList={projectDetails.images}/>
        </div>
      </div>
      <h3 className="grid-center">Platform Architecture</h3>
      <section className="grid-center">
        <h4>The system has four components:</h4>
        <ul>
          <li>server</li>
          <li>operation room desktop app</li>
          <li>referee app</li>
          <li>assistant app.</li>
        </ul>
        <p>
        Since the server directly feeds the screens compositing a video with overlays and a real time video feed, we used Unity3D to do the composition and overlay placing & animation. For the operator app, we used Angular and Electron to get a desktop build of our web app, since we wanted to give the user a desktop experience and do not depend on browsers. Finally, for the mobile apps we used Ionic, and did a responsive design that works for both tablets and cellphones, since this was a key point: if any device failed, needed to provide a backup device, which could be from tablets to any cellphone.
        </p>
        <div className="cellphone-area">
          <div>
            <h5>Referee app</h5>
            <CellphoneFrame cellType="android"><Carrousel imageList={projectDetails.refereeAppPictures}/></CellphoneFrame>
          </div>
          <div>
            <h5>Assistant app (one for each team)</h5>
            <CellphoneFrame cellType="android"><Carrousel imageList={projectDetails.assistantAppPictures}/></CellphoneFrame>
          </div>
        </div>
        <h5>Operator app</h5>
        <LaptopFrame>
          <Carrousel imageList={projectDetails.operatorAppPictures}></Carrousel>
        </LaptopFrame>
      </section>
      <h5 className="grid-center">Flow demo</h5>
      <iframe src="https://player.vimeo.com/video/357201057?title=0&amp;byline=0&amp;portrait=0&amp;api=1"
        className="grid-center full-width wide16-9 iframe-settings"></iframe>

      <iframe src="https://player.vimeo.com/video/357197603?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=0&amp;muted=1&amp;loop=1&amp;player_id=iframe6444" 
        className="grid-center full-width wide16-9 iframe-settings"
        id="iframe6444"></iframe>
      
      
    </article>
)}