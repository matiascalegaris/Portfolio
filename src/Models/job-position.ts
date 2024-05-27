
export class ProjectPreview {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class JobPosition {
  id: number = -1;
  title: string = '';
  companyName: string = '';
  startDate : Date = new Date();
  endDate: Date | null = null;
  summary: string[] = [];
  projectList: ProjectPreview[] = [];
}