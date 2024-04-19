
type SkillType = "language" | "technology";
export class Skill {
  name: string = "";
  time: number = 0;
  childof: string | null = null;
  childs: string[] = []
  hideOnMain : boolean = false;
  projectIdList : number[] = [];
  skillType : SkillType = "language";
  constructor(name : string, childOf : string | null, 
              hideOnMain : boolean, skillType : SkillType) {
    this.name = name;
    this.childof = childOf;
    this.skillType = skillType;
    this.hideOnMain = hideOnMain;
  }
}