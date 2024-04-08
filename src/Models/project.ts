
class UrlEntry {
  url: string = '';
  description: string = '';
}

export class Project {
  id: number = -1;
  name: string = '';
  summary: string = '';
  Start: Date = new Date();
  End: Date = new Date();
  UsedTechologies: string[] = [];
  relatedSites: UrlEntry[] = [];
}