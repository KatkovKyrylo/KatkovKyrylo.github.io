import { TEducation } from "./TEducation";
import { TEmploymentHistory } from "./TEmploymentHistory";
import { TLanguages } from "./TLanguages";
import { TPreviousProjects } from "./TPreviousProjects";
import { TSocials } from "./TSocials";

export interface TDeveloperInfo {
  username: string;
  name: string;
  position: string;
  avatar: string;
  socials: TSocials;
  description: string;
  previousProjects: TPreviousProjects;
  skillsAndExpertise: string[];
  education: TEducation;
  employmentHistory: TEmploymentHistory;
  languages: TLanguages;
}

export type TDevelopersInfo = TDeveloperInfo[];
