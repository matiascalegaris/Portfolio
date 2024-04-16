import { Profile } from "./Models/profile"
import { MobileProject, Project } from "./Models/project";
import { Skill } from "./Models/skill";

export const GetResume = () => {
  return json;
}


const json : Profile= {
  summary: `I’m a generalist programmer with more than 16 years of experience who loves to work with new technologies and devices.
  I have done projects for different industries like game studios, big network providers, bank systems and small clients that required custom solutions for their companies.
  I have experience working with low level languages like C++ doing task like performing optimization and ensure it runs on target hardware.
  `,
  workHistory :
  [
    {
      id: 1,
      title: 'Gameplay programmer',
      companyName: 'Ivolgamus',
      startDate : new Date('02 Mar 2008 06:00:01 GMT'),
      endDate: new Date('02 Jan 2009 00:00:00 GMT'),
      summary: `Contribute to develop two retail games for Nintendo DS and one 
      game for Nintendo Wii.
      One of the DS was a big franchise for Activision and
      DreamWorks.`
    },
    {
      id: 2,
      title: 'C++ Developer',
      companyName: 'Globant',
      startDate : new Date('02 Mar 2009 00:00:00 GMT'),
      endDate: new Date('02 Jun 2009 00:00:00 GMT'),
      summary: 'Worked on the UI development for a NextGen game for EA games'
    },
    {
      id: 3,
      title: 'Game programmer',
      companyName: 'Globant',
      startDate : new Date('02 Jun 2009 00:00:00 GMT'),
      endDate: new Date('02 Oct 2011 00:00:00 GMT'),
      summary: `My role here in the engineering team was to create Nintendo 
      DS/DSi games.
      While at this position not only we have to implement the 
      gameplay of the games but also fix and extend the company DS 
      engine.
      Here I worked on two DSi game that were published on the DSi 
      store and one Retail DS game from a big franchise.
      I was also in charge to update the company DS engine with the 
      DSi SDK to support the new features required to publish on the 
      DSi store`
    },
    {
      id: 4,
      title: 'IOS and C++ Developer',
      companyName: 'Playtomic',
      startDate : new Date('02 Oct 2011 00:00:00 GMT'),
      endDate: new Date('02 Jul 2012 00:00:00 GMT'),
      summary: `Playtomic provided analytics for games, my task here was to 
      create and support the API for the games in C++, Objective C and 
      Unity.
      I also created an integration with Unity3D to include the 
      analytics panel in the editor`
    },
    {
      id: 5,
      title: 'Backend Developer',
      companyName: 'Intraway Corp',
      startDate : new Date('02 Nov 2012 00:00:00 GMT'),
      endDate: new Date('02 nov 2013 00:00:00 GMT'),
      summary: `Intraway provides services for network providers, my task here 
      were to support the camera surveillance system and create a 
      machine to machine server.
      The camera surveillance system main task was to provide a 
      common interface to configure IP cameras from different brands 
      and provide the streaming to the client portal.
      The machine to machine server objective was a to provide a 
      common server to listen to generic devices like GPS, remote 
      medical devices or any kind of devices that can send information 
      through internet and then provide an interface to create custom 
      applications for them`
    },
    {
      id: 6,
      title: 'C++ Developer',
      companyName: 'VATES S.A.',
      startDate : new Date('02 Nov 2012 00:00:00 GMT'),
      endDate: new Date('02 Jun 2016 00:00:00 GMT'),
      summary: `Work as consultant at the client: Red Link S.A, an ATM company.
      There I joined the architecture team by creating tools and 
      providing support for the teams working in C++. I also help 
      migrating systems from old SqlServer to Oracle while optimizing 
      them.`
    },
    {
      id: 7,
      title: 'Co - Founder',
      companyName: 'mDevz',
      startDate : new Date('02 Jul 2016 00:00:00 GMT'),
      endDate: new Date('02 nov 2019 00:00:00 GMT'),
      summary: `I worked designing the architecture of our projects and 
      implementing mobile applications in multiple frameworks 
      including native technologies and frameworks such as Xamarin, 
      Unity3D and ReactNative.
      I used Unity3D to create VR/AR experiences and other interactive 
      applications for events using body tracking devices
      I used Swift, Ionic and Xamarin to implement different solutions 
      on mobile platforms`
    },
    {
      id: 8,
      title: 'Contractor',
      companyName: 'Toptal',
      startDate : new Date('02 Dec 2019 00:00:00 GMT'),
      endDate: null,
      summary: `Work for one of the biggest end-to-end automation platforms in 
      data engineering, analytics, reporting, machine learning, and 
      data science products.
      In this role, I initially joined to support the team with the 
      application telemetry service and later transitioned to assisting 
      them in migrating the application engine to a new one with a 
      modern architecture.
      The telemetry service was responsible for collecting data from 
      various suite services running on the system and reporting it to 
      the backend.
      The original engine was a single-threaded, Windows-only 
      process, and the migration involved transforming it into a cross-platform, multi-threaded process. The migration primarily 
      entailed implementing existing tools into the new architecture. 
      These tools could encompass anything required by any analytics 
      software, ranging from simple select/join operations to the 
      generation of PDF or Excel reports.
      Work directly with the client to create a Digital Audio 
      Workstation using C++ and JUCE library, I started following the 
      client guidelines to code the track mixer and then help 
      designing and implementing the sampler.`
    }
  ],
  projectHistory: [    
    {
      id: 1,
      projectType: "DS",
      name: "Shrek's Carnival Craze",
      summary: "In Shrek's Carnival Craze for Nintendo DS, I was responsible for implementing the gameplay of 10 out of the 28 mini-games. This involved adhering to the game design guidelines and integrating assets provided by the artist.",
      start: new Date('02 Mar 2008 06:00:01 GMT'),
      end: new Date('02 Jul 2008 06:00:01 GMT'),
      usedTechologies: ["C++", "svn", "Visual Studio", "Game Development", "Windows"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/Shrek/shrek-cover.jpg",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false,
      images: [ "/portfolio-resources/Shrek/shrekgame1.jpg",
                "/portfolio-resources/Shrek/shrek2.jpg", 
                "/portfolio-resources/Shrek/shrek3.jpg"]
    },
    {
      id: 2,
      projectType: "DS",
      name: "101 in 1 Explosive Megamix",
      summary: "I worked on a project featuring a collection of 101 mini-games. My role involved implementing 10 of these mini-games, ensuring they adhered to the game design guidelines and integrating assets provided by the artist.",
      start: new Date('02 Jul 2008 06:00:01 GMT'),
      end: new Date('02 Dec 2008 06:00:01 GMT'),
      usedTechologies: ["C++", "svn", "Visual Studio", "Game Development", "Windows"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/101megamix/megamixcover.jpeg",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false,
      images: [ "/portfolio-resources/101megamix/Megamix1.jpg",
                "/portfolio-resources/101megamix/Megamix2.jpg", 
                "/portfolio-resources/101megamix/Megamix3.jpg"]
    },
    {
      id: 3,
      projectType: "DS",
      name: "Save the turtles DS",
      summary: `In 'Save the Turtles,' a puzzle game, the objective is to align three or more turtles of the same color while navigating various obstacles that endanger them.

      My involvement spanned across all facets of the game. This included expanding the engine to accommodate DSi features such as integrating sound APIs and developing resource managers. I also worked on key gameplay elements such as line matching, the scoring system, and the user interface (UI) development.`,
      start: new Date('02 Jun 2009 06:00:01 GMT'),
      end: new Date('02 Jan 2010 06:00:01 GMT'),
      usedTechologies: ["C++", "svn", "Visual Studio", "Game Development", "Windows"],
      relatedSites: [{ description: "Review", url:"https://www.ign.com/articles/2010/03/30/save-the-turtles-review"}, {description:"Gameplay video", url: "https://www.youtube.com/watch?v=di1vveQysEk&ab_channel=JavierSabarasa"}],
      coverPicture: "./portfolio-resources/SaveTheTurtles/cover.jpg",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false,
      images: ["/portfolio-resources/SaveTheTurtles/img1.jpg",
                "/portfolio-resources/SaveTheTurtles/img2.jpg",
                "/portfolio-resources/SaveTheTurtles/img3.jpg",
                "/portfolio-resources/SaveTheTurtles/img4.jpg"]      
    },
    
    {
      id: 4,
      projectType: "DS",
      name: "Art of ink",
      summary: `In 'Art of Ink,' a drawing game, players are tasked with creating a tattoo while managing their client's pain threshold.

      My responsibilities encompassed the gameplay, focusing on optimizing input detection for a seamless drawing experience. Additionally, I implemented collision detection for the valid drawing areas, ensuring players accurately inked the designated spots while tracking their progress.`,
      start: new Date('02 Jan 2010 06:00:01 GMT'),
      end: new Date('02 Jan 2011 06:00:01 GMT'),
      usedTechologies: ["C++", "svn", "Visual Studio", "Game Development", "Windows"],
      relatedSites: [{ description: "Review", url:"https://www.nintendolife.com/reviews/2011/04/art_of_ink_dsiware"}, {description:"Trailer", url: "https://www.youtube.com/watch?v=BSnJnHtkVvQ&ab_channel=XGN"}],
      coverPicture: "./portfolio-resources/ArtOfInk/cover.jpg",
      previewColumns:  2,
      previewRows: 1,
      hideInGrid: false,
      images: [ "/portfolio-resources/ArtOfInk/Img1.jpg",
                "/portfolio-resources/ArtOfInk/Img2.jpg", 
                "/portfolio-resources/ArtOfInk/Img3.png", 
                "/portfolio-resources/ArtOfInk/Img4.jpg"]
    },
    {
      id: 5,
      projectType: "DS",
      name: "SpongeBob-s surf and skate roadtrip",
      summary: `This game, inspired by the beloved SpongeBob show, features four exciting mini-games.

      During development, I played a key role in creating two of these games: an isometric skateboarding adventure and an a surf challenge. Additionally, I contributed to the shared resources used across all four mini-games.
      
      Moreover, I expanded the 2D engine capabilities to include support for entities and cameras.`,
      start: new Date('02 Jan 2011 06:00:01 GMT'),
      end: new Date('02 Jul 2011 06:00:01 GMT'),
      usedTechologies: ["C++", "svn", "Visual Studio", "Game Development", "Windows"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/SpongeBob/cover.jpg",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false,
      images:  ["/portfolio-resources/SpongeBob/Surf.jpg",
      "/portfolio-resources/SpongeBob/Surf2.jpg"
      ]
    },  
    {
      id: 6,
      projectType: "Generic",
      name: "Playtomic Api",
      summary: `Playtomic provided anaylytic services for games, I implemented APIs for both Objective C and C++ so games can collect and send data to the backend servers.
      Also I integrated the analytics panel inside unity as a tool so you can see all your game stats inside the development environment`,
      start: new Date('02 Oct 2011 06:00:01 GMT'),
      end: new Date('02 Jul 2012 06:00:01 GMT'),
      usedTechologies: ["C++", "C++11", "Objective C", "C#", "iOS", "Linux", "Windows", "git", "Visual Studio", "Game Development", "Unity3D"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/Playtomic/cover.jpeg",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false,
      images: []
    },
    {
      id: 7,
      projectType: "Generic",
      name: "Flare 3D WebGL Renderer",
      summary: `Based on the requirements of the Flare3D's team, we made a JS library based on Flare's AS3 API but implemented with WebGL. The idea behind the project was to explore WebGL's capabilities so WebGL + JS could be a build target for Flare Studio.

      We used TypeScript as a base language to improve code quality since we were used to strongly typed languages. The last version of the API is able to load .fz3d files and manages several shader materials (diffuse, specular, normal map, etc) and implements a scene graph, matching with the core Flare's rendering API.`,
      start: new Date('02 Oct 2012 06:00:01 GMT'),
      end: new Date('02 Nov 2012 06:00:01 GMT'),
      usedTechologies: ["Typescript", "WebGL", "Javascript", "svn"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/Flare3d/cover.jpg",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false,
      images: []
    },
    {
      id: 8,
      projectType: "Generic",
      name: "Camera surveillance backend",
      summary: `The camera surveillance system main task was to provide a common interface to configure IP cameras from different brands and provide the streaming to the client portal.`,
      start: new Date('02 Nov 2012 06:00:01 GMT'),
      end: new Date('02 Nov 2013 06:00:01 GMT'),
      usedTechologies: ["C++", "C++11", "Windows", "Linux", "Network", "Oracle", "Sql", "svn"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/Intraway/CameraCover.jpg",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false,
      images: []
    },
    {
      id: 9,
      projectType: "Generic",
      name: "Internet of things",
      summary: `The machine to machine server objective was a to provide a common server to listen to generic devices like GPS, remote medical devices or any kind of devices that can send information through internet and then provide an interface to create custom applications for them`,
      start: new Date('02 Nov 2012 06:00:01 GMT'),
      end: new Date('02 Nov 2013 06:00:01 GMT'),
      usedTechologies: ["C++", "C++11", "Windows", "Linux", "Network", "Oracle", "Sql", "svn"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/Intraway/IotCover.jpg",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false,
      images: []
    },
    {
      id: 10,
      projectType: "Generic",
      name: "VR pysychological test",
      summary: `Using Oculus Rift's Unity integration (4.2, several years ago), we implemented an application that allows us to test the psychological effects of certain scenarios like being at a building's rooftop, walking through reduced spaces, and fear of certain animals (e.g., spiders). The idea is to build an immersive experience to users that can't be exposed to those situations in real life. `,
      start: new Date('02 Feb 2013 06:00:01 GMT'),
      end: new Date('02 Jul 2013 06:00:01 GMT'),
      usedTechologies: ["C++", "C++11", "Unity3D", "Windows", "svn", "C#"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/Vr.png",
      previewColumns:  1,
      previewRows: 1,
      video: "https://www.youtube.com/embed/L-Bm4H-ztAc?rel=0",
      hideInGrid: false,
      images: []
    },
    {
      id: 11,
      projectType: "Generic",
      name: "Atm backend system migration",
      summary: `Migrate legacy backend applications that handle all daily payments done at the atm from Sql server to Oracle and rewrite the app to use modern C++ in the process, in this process I also optimized the process so it can complete one run from 20 minutes to 1`,
      start: new Date('02 Nov 2013 06:00:01 GMT'),
      end: new Date('02 Jul 2016 06:00:01 GMT'),
      usedTechologies: ["C++", "C++11", "Windows", "Oracle", "Sql", "Sql Server", "svn"],
      relatedSites: [{url:"https://www.youtube.com/watch?v=L-Bm4H-ztAc", description:"demo"}],
      coverPicture: "./portfolio-resources/Vr.png",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: true,
      images: []
    },
    new MobileProject(
      {
        id: 12,
        projectType: "Mobile",
        name: "Field Force Manager App",
        summary: `Create an Android application to track the company workforce on the streets, providing the employee with the locations required to visit every day and the task to perform on each place with a report to fill to track any issues.

        The applications tracks daily routes and the supplies required for the whole day and for every location.
        
        This app was made with Xamarin Android`,
        start: new Date('02 Oct 2016 06:00:01 GMT'),
        end: new Date('02 Jul 2017 06:00:01 GMT'),
        usedTechologies: ["Ionic", "Xamarin", "Android", "git", "C#"],
        relatedSites: [],
        coverPicture: "./portfolio-resources/FieldForce/App1.jpeg",
        previewColumns:  1,
        previewRows: 2,
        hideInGrid: false,
        images: ["/portfolio-resources/FieldForce/App1.jpeg",
                "/portfolio-resources/FieldForce/App2.png",
                "/portfolio-resources/FieldForce/App3.jpeg",
                "/portfolio-resources/FieldForce/App4.jpeg"]
      },
      "android"
    ),
    new MobileProject(
      {
        id: 13,
        projectType: "Mobile",
        name: "MESSAGING SERVICE APP",
        summary: `This project is a messenger service where users can send their desired product to other locations and another type of user (shippers) could pick the package up to delivery it. The admin site was made with Laravel PHP and the mobile applications (iOS & Android) Swift and React Native. Also, we used Firebase for the notification system.
        Once a user submit his desired location to send the package, the shipper app tracks it and searchs for messengers available to delivery it. After arriving and tracking the shipper GPS, the user can confirm the shipment and the transaction takes place using MercadoPago.`,
        start: new Date('02 Jan 2017 06:00:01 GMT'),
        end: new Date('02 Nov 2017 06:00:01 GMT'),
        usedTechologies: ["Swift", "React Native", "Android", "iOS", "git", "Html"],
        relatedSites: [],
        coverPicture: "./portfolio-resources/Yalollevo/yalollevo4.png",
        previewColumns:  1,
        previewRows: 2,
        hideInGrid: false,
        images: ["/portfolio-resources/Yalollevo/yalollevo4.png",
                 "/portfolio-resources/Yalollevo/yalollevo5.png",
                 "/portfolio-resources/Yalollevo/yalollevo6.png",
                 "/portfolio-resources/Yalollevo/yalollevo11.png",
                 "/portfolio-resources/Yalollevo/yalollevo12.png",
                 "/portfolio-resources/Yalollevo/yalollevo13.png"]
      },
      "none"
    ),
    new MobileProject(
      {
        id: 14,
        projectType: "Mobile",
        name: "CHECKLIST APP",
        summary: `This is a consultancy project which tracks the client’s consultants activity in real time. It was done in Xamarin Forms for iOS and Android. In addition, this app has a GPS tracking module to track its users when they’re doing auditories. Please note that app name and logo has been changed`,
        start: new Date('02 Nov 2017 06:00:01 GMT'),
        end: new Date('02 Mar 2018 06:00:01 GMT'),
        usedTechologies: ["Xamarin", "Xamarin Forms", "C#","Android", "iOS", "git"],
        relatedSites: [],
        coverPicture: "./portfolio-resources/ChecklistApp/tiendacheck1.png",
        previewColumns:  1,
        previewRows: 2,
        hideInGrid: false,
        images: ["/portfolio-resources/ChecklistApp/tiendacheck1.png",
                 "/portfolio-resources/ChecklistApp/tiendacheck2.png",
                 "/portfolio-resources/ChecklistApp/tiendacheck3.png",
                 "/portfolio-resources/ChecklistApp/tiendacheck4.png",
                 "/portfolio-resources/ChecklistApp/tiendacheck5.png"]
      },
      "none"
    ),
    {
      id: 15,
      projectType: "Generic",
      name: "RESTAURANT SELF-ORDER PLATFORM",
      summary: `We build this platform for SCON. This is a end to end system to manage restaurant menues and ordering.
      It has several components including the point of sale system, the in-restaurant ordering system (both for tablets), an online back office to manage the menues and restaurants (because is multi-user, multi-restaurant) and an android / ios app for pre ordering outside the restaurant and then continue the experience within the same app at the restaurant’s table.
      The point of sale system also includes ticket printing among several POS features that other products on the market have. We also developed a small NAT punch through system to be able to communicate with the restaurant’s tablets (that are behind a router) from the internet.
      (The color palletes on the pictures are messed up since we do not own this IP)`,
      start: new Date('02 Nov 2017 06:00:01 GMT'),
      end: new Date('02 Mar 2018 06:00:01 GMT'),
      usedTechologies: ["Ionic", "Angular","Android", "iOS", "git" , "Typescript", "Javascript", "Html", "css"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/Restos/Mesa.png",
      previewColumns:  2,
      previewRows: 2,
      hideInGrid: false,
      images: []
    },
    {
      id: 16,
      projectType: "RobotTournament",
      name: "ROBOTICS OLYMPICS PLATFORM",
      summary: `The Robotics olympics is an international contest where students from all around the globe compete and cooperate to solve world’s problems like global warming , recycling or 2019’s challenge: ocean cleaning, using their knowledge in robotics.
      For the 2019’s edition, we developed an app ecosystem in order to help referees and assistants to report the score of the match in real time. Also, the platform did the tournament  setup and progression. Solving challenges like a really crowded place where wifi networks won’t be realiable (despite of being in our own private network), we implemented a minimum communication system to minimize the latency of the network.

Going deeper on the architecture, the system has four components:
server,
operation room desktop app,
referee app
assistant app.
Since the server directly feeds the screens compositing a video with overlays and a real time video feed, we used Unity3D to do the composition and overlay placing & animation. For the operator app, we used Angular and Electron to get a desktop build of our web app, since we wanted to give the user a desktop experience and do not depend on browsers. Finally, for the mobile apps we used Ionic, and did a responsive design that works for both tablets and cellphones, since this was a key point: if any device failed, needed to provide a backup device, which could be from tablets to any cellphone.`,
      start: new Date('02 Jun 2018 06:00:01 GMT'),
      end: new Date('02 Sep 2018 06:00:01 GMT'),
      usedTechologies: ["Ionic", "Angular","Android", "Unity3D", "git", "C#", "Typescript", "Javascript", "Html", "css"],
      relatedSites: [{description:"video", url:"https://vimeo.com/357201057"}],
      coverPicture: "./portfolio-resources/RoboTournament/Event3.jpg",
      previewColumns:  2,
      previewRows: 1,
      hideInGrid: false,
      images: ["/portfolio-resources/RoboTournament/Event1.jpg",
               "/portfolio-resources/RoboTournament/Event2.jpg",
               "/portfolio-resources/RoboTournament/Event3.jpg",
               "/portfolio-resources/RoboTournament/Event4.jpg"]
    },
    {
      id: 17,
      projectType: "Generic",
      name: "KINECT ROCK EVENT",
      summary: `For a product branding in a music event, we developed a game where the user has to pose and select a music band album as a background. Then the picture is created and he can share it on social media.`,
      start: new Date('02 Jun 2018 06:00:01 GMT'),
      end: new Date('02 Jul 2018 06:00:01 GMT'),
      usedTechologies: ["Unity3D", "Kinect", "C#"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/KinectRock.png",
      previewColumns:  2,
      previewRows: 1,
      hideInGrid: false,
      video: "https://www.youtube.com/embed/w7lRIMCu5rI",
      images: []
    },
    {
      id: 18,
      projectType: "Generic",
      name: "SOCIAL EVENT PHOTOSHOOT",
      summary: `The goal here was to take a picture to the user face and project it on a tree with entertainment porpuses.
               To achive this we take a picture with an app, mask the face area and send the result to a projector so it can be displayed on the venue trees`,
      start: new Date('02 Jun 2018 06:00:01 GMT'),
      end: new Date('02 Jul 2018 06:00:01 GMT'),
      usedTechologies: ["Unity3D", "C#"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/SocialPhotoshoot/personalfest2.jpg",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false,
      images: ["/portfolio-resources/SocialPhotoshoot/personalfest1.jpg", "/portfolio-resources/SocialPhotoshoot/personalfest2.jpg"]
    },
    {
      id: 19,
      projectType: "Generic",
      name: "Offline Image Calibration",
      summary: `Using OpenCV under C++ plus MFC, we developed an application to allow calibration of a set of images taken by a 360° photo booth. This is a device comprised of an array of cameras that take a photo at exactly the same time. Due to construct issues, the cameras never have the same focal point or the same orientation.

      This application allows the user to, once the device is installed, use the application to aid the software calibration of the device (the application loads the set of photos and automatically tries to calibrate them based on the feedback provided by the calibration element, a red and green tube).
      
      Once the calibration is done, a set of parameters is saved for each camera so the image processing server can call an external process providing these parameters to warp the images (we also developed that application).`,
      start: new Date('02 Jun 2018 06:00:01 GMT'),
      end: new Date('02 Jul 2018 06:00:01 GMT'),
      usedTechologies: ["OpenCv", "C++", "MFC"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/ImageCaligration.png",
      previewColumns:  1,
      previewRows: 1,
      video: "https://www.youtube.com/embed/hKCl4XmeJqo",
      hideInGrid: false,
      images: []
    },
    {
      id: 20,
      projectType: "Generic",
      name: "CHATBOT EDITOR",
      summary: `We did this single page application editor for a customer that has a client support platform and wanted to create their own chatbots for their flow-based chat system. The editor support many real time IDE features like auto-completion, code suggestion, dependency detection for step removal and unused block warnings among others. It also keeps a list of the changes the user does so version tracking is in place for the user when he needs it.
      The backend is integrated with our client’s system so the bots can be tested in the same page where the user does the design.`,
      start: new Date('02 Jun 2019 06:00:01 GMT'),
      end: new Date('02 Oct 2019 06:00:01 GMT'),
      usedTechologies: ["Angular", "Html", "css", "Javascript", "Typescript"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/Chatbot/1.jpg",
      previewColumns:  2,
      previewRows: 1,
      hideInGrid: false,
      images: []
    },
    {
      id: 21,
      projectType: "Generic",
      name: "Augmented Reality OpenCV Demo",
      summary: `This technology demo is an augmented reality application, which shows the integration between Unity, OpenCV, C++, ARToolkit. The idea behind the app is a small game where multiple users (interacting via a local network multiplayer) fight against an enemy and build the scenario using real world objects.

      This app works on both iOS and Android, C++ the native code used to do image processing (which uses OpenCV) is compiled on each platform without changes (100% cross platform).
      
      Features:
      • Real time multiplayer (via Unity mulitplayer)
      • Image processing (https://youtu.be/774VfFo_oJA, the scenario is generated scanning the image for different colors and then creating the proper elements, like fire).
      • Augmented reality (used to identify the 3D that the scenario will be placed on and allow camera's tracking).
      • Shading (vertex shaders used to do not render below the real world)
      • Native code linking (via C#'s pInvoke and native build DLLs).`,
      start: new Date('02 Feb 2016 06:00:01 GMT'),
      end: new Date('02 Jul 2016 06:00:01 GMT'),
      usedTechologies: ["OpenCv", "C++", "C++11", "C++14", "Unity3D", "AR", "Windows", "Android"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/ARDemo.png",
      previewColumns:  1,
      previewRows: 1,
      video: "https://www.youtube.com/embed/774VfFo_oJA",
      hideInGrid: false,
      images: []
    },
    {
      id: 22,
      projectType: "Generic",
      name: "Integrate a React UI in a VB6 application using C++ as bridge",
      summary: `Argentum Online is a 24-year-old game developed in VB6. With the intention of migrating the code to C++, we decided to re-implement the user interface (UI) in a more modern language for easier maintenance and extension. This also served as a crucial step towards migrating the entire project from VB6 to C++.

      To accomplish this, I utilized a C++ library to run a browser and created an API for VB6 to manage all interactions within the game. However, there was a challenge as the JavaScript library was built for 64-bit systems, while VB6 only runs as a 32-bit process. To address this, I implemented a background process to run the web, developed an API in VB6, and synchronized both processes using shared memory.
      
      Given that keyboard and mouse inputs were captured in the VB6 process, while all UI interactions such as button presses were handled in a separate process, efficient communication was essential to synchronize both processes swiftly. This was crucial to ensure that players did not experience any lag or delay while playing.`,
      start: new Date('02 Dec 2022 06:00:01 GMT'),
      end: new Date('02 Nov 2023 06:00:01 GMT'),
      usedTechologies: ["Visual Basic 6", "C++", "C++14", "C++17", "React", "Javascript", "Windows", "Game Development", "Network", "Sql", "git", "Html", "css"],
      relatedSites: [{description:"React Source", url:"https://github.com/matiascalegaris/ao-ui"}, {description:"C++ Source", url:"https://github.com/matiascalegaris/BabelUI"}],
      coverPicture: "",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false,
      images: []
    },
    {
      id: 23,
      projectType: "Generic",
      name: "Extend data engineering and analytics platform",
      summary: `Work for one of the biggest end-to-end automation platforms in data engineering, analytics, reporting, machine learning, and data science products.

      In this role, I initially joined to support the team with the application telemetry service and later transitioned to assisting them in migrating the application engine to a new one with a modern architecture.
      
      The telemetry service was responsible for collecting data from various suite services running on the system and reporting it to the backend.
      
      The original engine was a single-threaded, Windows-only process, and the migration involved transforming it into a cross-platform, multi-threaded process. The migration primarily entailed implementing existing tools into the new architecture. These tools could encompass anything required by any analytics software, ranging from simple select/join operations to the generation of PDF or Excel reports.
      
      
      
      Enhance and provide maintenance for the telemetry service tasked with gathering data from diverse system services and transmitting it to the backend for reporting.
      
      Assist the team in migrating to a new engine by actively participating in the process of migrating existing tools and resolving any encountered bugs.
      
      Implement automated testing for all code generated using SonarQube to ensure high test coverage.`,
      start: new Date('02 Mar 2021 06:00:01 GMT'),
      end: new Date('02 Jan 2023 06:00:01 GMT'),
      usedTechologies: ["C++", "C++11", "C++14", "Windows", "Linux", "git"],
      relatedSites: [],
      coverPicture: "",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: true,
      images: []
    },
    new MobileProject(
      {
        id: 24,
        projectType: "Mobile",
        name: "PROPERTY MANAGEMENT PLATFORM",
        summary: `On 2019 we joined one investor to build this platform in 6 months. The product’s core is allowing property managers and building committees to do the paper work and organize the buildings or condominiums they’ve , including service providers payment management, member management, expense tracking, internal communication with members, votings, accounting and payment collection.
        The platform is web based for administrators and managers, and has a companion app for members which can also use the web version of it.`,
        start: new Date('02 Mar 2019 06:00:01 GMT'),
        end: new Date('02 DeC 2019 06:00:01 GMT'),
        usedTechologies: ["Angular", "Html", "css", "Javascript", "Typescript"],
        relatedSites: [],
        coverPicture: "./portfolio-resources/PropertyManagement/6.png",
        previewColumns:  1,
        previewRows: 2,
        hideInGrid: false,
        images: ["/portfolio-resources/PropertyManagement/2.png",
                  "/portfolio-resources/PropertyManagement/3.png",
                  "/portfolio-resources/PropertyManagement/4.png",
                  "/portfolio-resources/PropertyManagement/5.png",
                  "/portfolio-resources/PropertyManagement/6.png",
                  "/portfolio-resources/PropertyManagement/7.png",
                  "/portfolio-resources/PropertyManagement/8.png"]
      },
      "android"
    )
  ]
}

const GetElapsedTimeInDays = (start: Date, end : Date | null) => {
  if (end) {
    return (end.getTime() - start.getTime()) / (1000*60*60*24) / 365;
  }
  else {
    return (Date.now() - start.getTime()) / (1000*60*60*24) / 365;
  }
}

const AddSkill = (skillMap : Map<string, Skill>, skill: Skill) => {
  skillMap.set(skill.name, skill);  
}
export const GetSkillList = (projectList : Project[]) : Skill[]=> {
  const skills = new Map<string, Skill>()

  AddSkill(skills, {name:"C++", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"C++11", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"C++14", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"C++17", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Angular", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Html", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"css", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"React", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"C#", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Unity3D", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Javascript", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Ionic", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"React Native", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Xamarin", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Swift", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Objective C", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Sql", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Windows", time:0, priorityGroup:1, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Linux", time:0, priorityGroup:1, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"svn", time:0, priorityGroup:3, hideOnMain:false, projectIdList:[]})
  
  
  AddSkill(skills, {name:"Oracle", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Sql Server", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Mobile", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Android", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})  
  AddSkill(skills, {name:"iOS", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})  
  AddSkill(skills, {name:"Visual Basic 6", time:0, priorityGroup:0, hideOnMain:true, projectIdList:[]})  
  AddSkill(skills, {name:"git", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Typescript", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"Xamarin Forms", time:0, priorityGroup:0, hideOnMain:true, projectIdList:[]})
  AddSkill(skills, {name:"WebGL", time:0, priorityGroup:0, hideOnMain:false, projectIdList:[]})
  AddSkill(skills, {name:"OpenCv", time:0, priorityGroup:0, hideOnMain:true, projectIdList:[]})
  AddSkill(skills, {name:"MFC", time:0, priorityGroup:0, hideOnMain:true, projectIdList:[]})
  AddSkill(skills, {name:"AR", time:0, priorityGroup:0, hideOnMain:true, projectIdList:[]})
  AddSkill(skills, {name:"Network", time:0, priorityGroup:0, hideOnMain:true, projectIdList:[]})
  AddSkill(skills, {name:"Kinect", time:0, priorityGroup:0, hideOnMain:true, projectIdList:[]})
  AddSkill(skills, {name:"Visual Studio", time:0, priorityGroup:0, hideOnMain:true, projectIdList:[]})
  AddSkill(skills, {name:"Game Development", time:0, priorityGroup:0, hideOnMain:true, projectIdList:[]})

  projectList.forEach( project => {
    project.usedTechologies.forEach( techName => {
      let skill = skills.get(techName)
      if (skill) {
        skill.projectIdList.push( project.id);
        skill.time += GetElapsedTimeInDays(project.start, project.end)
      }
      else {
        console.log("failed to find skill name " + techName + " at project " + project.name)
      }
    })
  })
  return Array.from(skills).map( ([key, value]) : Skill => (value))
}