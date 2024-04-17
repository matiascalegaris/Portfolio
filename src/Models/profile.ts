import { JobPosition } from './job-position'
import { Project } from './project';

export class Profile {
  workHistory : JobPosition[] = [];
  summary: string = '';
  projectHistory: Project[] = [];
}