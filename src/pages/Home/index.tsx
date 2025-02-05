import SkillsAndExpertise from "../../components/SkillsAndExpertise";
import Education from "../../components/Education";
import EmploymentHistory from "../../components/EmploymentHistory";
import Languages from "../../components/Languages";
import PreviousProjects from "../../components/PreviousProjects";
import { useDevInfo } from "../../contexts/dev-info.hook";

export default function DeveloperInfoPage() {
  const { devInfo } = useDevInfo();

  if (!devInfo) return <></>;

  const { previousProjects, skillsAndExpertise, education, employmentHistory, languages } = devInfo;
  return (
    <div className="pt-12 lg:pt-0 basis-auto flex flex-col gap-16">
      <PreviousProjects projects={previousProjects} />
      <SkillsAndExpertise list={skillsAndExpertise} />
      <div className="flex gap-2 flex-col sm:flex-row">
        <div className="basis-1/2 border-gray-800 pr-2 pb-6 sm:border-r-2 sm:pb-0">
          <Education data={education} />
        </div>
        <div className="basis-1/2 pt-6 sm:pl-2 sm:pt-0">
          <EmploymentHistory data={employmentHistory} />
        </div>
      </div>
      <Languages list={languages} />
    </div>
  );
}
