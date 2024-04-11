
class UrlEntry {
  url: string = '';
  description: string = '';
}
type ProjectType = "DS" | "Mobile" | "Desktop" | "Generic";
export class Project {
  id: number = -1;
  projectType : ProjectType = "Generic";
  name: string = '';
  summary: string = '';
  start: Date = new Date();
  end: Date | null = null;
  usedTechologies: string[] = [];
  relatedSites: UrlEntry[] = [];
  coverPicture: string = "";
  previewColumns: number = 1;
  previewRows: number = 1;
  hideInGrid: boolean = false;
  constructor(project : Project) {
    this.id = project.id;
    this.projectType  = project.projectType;
    this.name = project.name;
    this.summary = project.summary;
    this.start = project.start;
    this.end = project.end;
    this.usedTechologies = project.usedTechologies;
    this.relatedSites = project.relatedSites;
    this.coverPicture = project.coverPicture;
    this.previewColumns = project.previewColumns;
    this.previewRows = project.previewRows;
    this.hideInGrid = project.hideInGrid;
  }
}

export class DSProject extends Project {
  images : string[] = []
  constructor(project : Project, imgArray : string[]) {
    super(project)
    this.images = imgArray;
  }
}