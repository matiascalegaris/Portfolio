
type SkillTyle = "language" | "technology";
export class Skill {
  name: string = "";
  time: number = 0;
  priorityGroup: number = 0;
  hideOnMain : boolean = false;
  projectIdList : number[] = [];
  skillType : SkillTyle = "language";

}