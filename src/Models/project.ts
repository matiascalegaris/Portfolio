
class UrlEntry {
  url: string = '';
  description: string = '';
}
type ProjectType = "DS" | "Mobile" | "Desktop" | "Generic" | "RobotTournament" | "Restos" | "Chatbot";
type BackgroundType = "Dark" | "Light";
export class Project {
  id: number = -1;
  projectType : ProjectType = "Generic";
  name: string = '';
  summary: string[] = [];
  start: Date = new Date();
  end: Date | null = null;
  usedTechologies: string[] = [];
  relatedSites: UrlEntry[] = [];
  coverPicture: string = "";
  backgroundStyle : BackgroundType = "Light";
  previewColumns: number = 1;
  previewRows: number = 1;
  hideInGrid: boolean = false;
  images : string[] = [];
  video? : string;
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
    this.images = project.images;
    this.video = project.video;
    this.backgroundStyle = project.backgroundStyle
  }
}
export type CellphoneType = "android" | "iphone" | "none";

export class MobileProject extends Project {
  cellType: CellphoneType = "android"
  constructor(project : Project, type: CellphoneType) {
    super(project);
    this.cellType = type;
  }
}

export class RobotTournamentProject extends Project {
  refereeAppPictures : string[] = [];
  assistantAppPictures : string[] = [];
  operatorAppPictures : string[] = [];
  constructor(project : Project, 
    refereeAppPictures : string[] = [],
    assistantAppPictures : string[] = [],
    operatorAppPictures : string[] = []) {
    super(project);
    this.refereeAppPictures = refereeAppPictures;
    this.assistantAppPictures = assistantAppPictures;
    this.operatorAppPictures = operatorAppPictures;
  }
}

export class RestosProject extends Project {
  mobilePictures : string[] = [];
  constructor(project : Project, 
    mobilePictures : string[] = []) {
    super(project);
    this.mobilePictures = mobilePictures;
  }
}