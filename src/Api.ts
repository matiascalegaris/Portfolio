import { JobPosition } from "./Models/job-position";
import { Profile } from "./Models/profile"

export const GetResume = () => {
  let resume = new Profile();
  resume.summary = `I’m a generalist programmer with more than 12 years of experience who loves to work with new technologies and devices.
  I have done projects for different industries like game studios, big network providers, bank systems and small clients that required custom solutions for their companies.
  I have experience working with low level languages like C++ doing task like performing optimization and ensure it runs on target hardware.
  I also work with modern languages such as C#, Swift and Js to create mobile and web applications.`;
  resume.workHistory.push(createPosition())
  resume.workHistory.push(createPosition())
  resume.workHistory.push(createPosition())
  resume.workHistory.push(createPosition())
  return resume;
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