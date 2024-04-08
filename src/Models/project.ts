
class UrlEntry {
  url: string = '';
  description: string = '';
}

export class Project {
  id: number = -1;
  name: string = '';
  summary: string = '';
  start: Date = new Date();
  end: Date | null = null;
  usedTechologies: string[] = [];
  relatedSites: UrlEntry[] = [];
  coverPicture: string = "";
  previewColumns: number = 1;
  previewRows: number = 1;
}