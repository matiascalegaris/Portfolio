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
  projectHistory: []
}