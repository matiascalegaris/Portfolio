
export class JobPosition {
  id: number = -1;
  title: string = '';
  companyName: string = '';
  startDate : Date = new Date();
  endDate: Date | null = null;
  summary: string[] = [];
}