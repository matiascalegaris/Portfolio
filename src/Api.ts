import { JobPosition } from "./Models/job-position";
import { Profile } from "./Models/profile"
import { Project } from "./Models/project";

export const GetResume = () => {
  // let resume = new Profile();
  // resume.summary = `I’m a generalist programmer with more than 16 years of experience who loves to work with new technologies and devices.
  // I have done projects for different industries like game studios, big network providers, bank systems and small clients that required custom solutions for their companies.
  // I have experience working with low level languages like C++ doing task like performing optimization and ensure it runs on target hardware.
  // `;
  // resume.workHistory.push(createPosition())
  // resume.workHistory.push(createPosition())
  // resume.workHistory.push(createPosition())
  // resume.workHistory.push(createPosition())
  // resume.projectHistory.push(createProject())
  // resume.projectHistory.push(createProject())
  // resume.projectHistory.push(createProject())
  // resume.projectHistory.push(createProject())
  // resume.projectHistory.push(createProject())
  // resume.projectHistory.push(createProject())
  // return resume;
  return json;
}

const createPosition = () => {
  let jobEntry = new JobPosition();
  jobEntry.companyName = "Toptal";
  jobEntry.title = "Contractor";
  jobEntry.id = 1;
  jobEntry.startDate = new Date('01 Jan 2015 00:00:00 GMT');
  jobEntry.endDate = null;
  jobEntry.summary = "Independent C++ / Unity developer and also doing some mobile work, mainly focused on C++.";
  return jobEntry;
}

function getRandomInt(max : number) {
  return Math.floor(Math.random() * max);
}

const createProject = () => {
  let project = new Project();
  project.name = "Test project";
  project.summary = "some work to test";
  project.start = new Date('01 Jan 2015 00:00:00 GMT');
  project.end = null;
  project.coverPicture = "./logo192.png";
  project.previewColumns = getRandomInt(3);
  project.previewRows = getRandomInt(3);
  return project;
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
      name: "Shrek's Carnival Craze",
      summary: "In Shrek's Carnival Craze for Nintendo DS, I was responsible for implementing the gameplay of 10 out of the 28 mini-games. This involved adhering to the game design guidelines and integrating assets provided by the artist.",
      start: new Date('02 Mar 2008 06:00:01 GMT'),
      end: new Date('02 Jul 2008 06:00:01 GMT'),
      usedTechologies: ["C++", "svn", "Visual Studio", "Game Development", "Windows"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/Shrek/shrek-cover.jpg",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false
    },
    {
      id: 2,
      name: "101 in 1 Explosive Megamix",
      summary: "I worked on a project featuring a collection of 101 mini-games. My role involved implementing 10 of these mini-games, ensuring they adhered to the game design guidelines and integrating assets provided by the artist.",
      start: new Date('02 Jul 2008 06:00:01 GMT'),
      end: new Date('02 Dec 2008 06:00:01 GMT'),
      usedTechologies: ["C++", "svn", "Visual Studio", "Game Development", "Windows"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/101megamix/megamixcover.jpeg",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false
    },
    {
      id: 3,
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
      hideInGrid: false
    },
    {
      id: 4,
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
      hideInGrid: false
    },
    {
      id: 5,
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
      hideInGrid: false
    },
    {
      id: 6,
      name: "Playtomic Api",
      summary: `Playtomic provided anaylytic services for games, I implemented APIs for both Objective C and C++ so games can collect and send data to the backend servers.
      Also I integrated the analytics panel inside unity as a tool so you can see all your game stats inside the development environment`,
      start: new Date('02 Oct 2011 06:00:01 GMT'),
      end: new Date('02 Jul 2012 06:00:01 GMT'),
      usedTechologies: ["C++", "C++11", "Objective C", "C#", "iOS", "Linux", "Windows", "git", "Visual Studio", "Game Development", "Unity"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/Playtomic/cover.jpeg",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false
    },
    {
      id: 7,
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
      hideInGrid: false
    },
    {
      id: 8,
      name: "Camera surveillance backend",
      summary: `The camera surveillance system main task was to provide a common interface to configure IP cameras from different brands and provide the streaming to the client portal.`,
      start: new Date('02 Nov 2012 06:00:01 GMT'),
      end: new Date('02 Nov 2013 06:00:01 GMT'),
      usedTechologies: ["C++", "C++11", "Windows", "Linux", "Network", "Oracle", "Sql", "svn"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/Intraway/CameraCover.jpg",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false
    },
    {
      id: 9,
      name: "Internet of things",
      summary: `The machine to machine server objective was a to provide a common server to listen to generic devices like GPS, remote medical devices or any kind of devices that can send information through internet and then provide an interface to create custom applications for them`,
      start: new Date('02 Nov 2012 06:00:01 GMT'),
      end: new Date('02 Nov 2013 06:00:01 GMT'),
      usedTechologies: ["C++", "C++11", "Windows", "Linux", "Network", "Oracle", "Sql", "svn"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/Intraway/IotCover.jpg",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false
    },
    {
      id: 10,
      name: "VR pysychological test",
      summary: `Using Oculus Rift's Unity integration (4.2, several years ago), we implemented an application that allows us to test the psychological effects of certain scenarios like being at a building's rooftop, walking through reduced spaces, and fear of certain animals (e.g., spiders). The idea is to build an immersive experience to users that can't be exposed to those situations in real life. `,
      start: new Date('02 Feb 2013 06:00:01 GMT'),
      end: new Date('02 Jul 2013 06:00:01 GMT'),
      usedTechologies: ["C++", "C++11", "Unity", "Windows", "svn", "C#"],
      relatedSites: [{url:"https://www.youtube.com/watch?v=L-Bm4H-ztAc", description:"demo"}],
      coverPicture: "./portfolio-resources/Vr.png",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: false
    },
    {
      id: 11,
      name: "Atm backend systema migration",
      summary: `Migrate legacy backend applications that handle all daily payments done at the atm from Sql server to Oracle and rewrite the app to use modern C++ in the process, in this process I also optimized the process so it can complete one run from 20 minutes to 1`,
      start: new Date('02 Nov 2013 06:00:01 GMT'),
      end: new Date('02 Jul 2016 06:00:01 GMT'),
      usedTechologies: ["C++", "C++11", "Windows", "Oracle", "Sql", "Sql Server", "svn"],
      relatedSites: [{url:"https://www.youtube.com/watch?v=L-Bm4H-ztAc", description:"demo"}],
      coverPicture: "./portfolio-resources/Vr.png",
      previewColumns:  1,
      previewRows: 1,
      hideInGrid: true
    },
    {
      id: 12,
      name: "Field Force Manager App",
      summary: `Create an Android application to track the company workforce on the streets, providing the employee with the locations required to visit every day and the task to perform on each place with a report to fill to track any issues.

      The applications tracks daily routes and the supplies required for the whole day and for every location.
      
      This app was made with Xamarin Android`,
      start: new Date('02 Oct 2016 06:00:01 GMT'),
      end: new Date('02 Jul 2017 06:00:01 GMT'),
      usedTechologies: ["Ionic 3", "Xamarin", "Android", "git", "C#"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/FieldForce/App1.jpeg",
      previewColumns:  1,
      previewRows: 2,
      hideInGrid: false
    },
    {
      id: 13,
      name: "MESSAGING SERVICE APP",
      summary: `This project is a messenger service where users can send their desired product to other locations and another type of user (shippers) could pick the package up to delivery it. The admin site was made with Laravel PHP and the mobile applications (iOS & Android) Swift and React Native. Also, we used Firebase for the notification system.
      Once a user submit his desired location to send the package, the shipper app tracks it and searchs for messengers available to delivery it. After arriving and tracking the shipper GPS, the user can confirm the shipment and the transaction takes place using MercadoPago.`,
      start: new Date('02 Jan 2017 06:00:01 GMT'),
      end: new Date('02 Nov 2017 06:00:01 GMT'),
      usedTechologies: ["Swift", "React Native", "Android", "iOS", "git"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/Yalollevo/yalollevo4.png",
      previewColumns:  1,
      previewRows: 2,
      hideInGrid: false
    },
    {
      id: 14,
      name: "CHECKLIST APP",
      summary: `This is a consultancy project which tracks the client’s consultants activity in real time. It was done in Xamarin Forms for iOS and Android. In addition, this app has a GPS tracking module to track its users when they’re doing auditories. Please note that app name and logo has been changed`,
      start: new Date('02 Nov 2017 06:00:01 GMT'),
      end: new Date('02 Mar 2018 06:00:01 GMT'),
      usedTechologies: ["Xamarin", "Xamarin Forms", "C#","Android", "iOS", "git"],
      relatedSites: [],
      coverPicture: "./portfolio-resources/ChecklistApp/tiendacheck1.png",
      previewColumns:  1,
      previewRows: 2,
      hideInGrid: false
    },
  ]
}