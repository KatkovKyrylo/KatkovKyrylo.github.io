import { useState, useEffect } from "react";
import SkillsAndExpertise from "../../components/SkillsAndExpertise";
import Education from "../../components/Education";
import EmploymentHistory from "../../components/EmploymentHistory";
import Languages from "../../components/Languages";
import PreviousProjects from "../../components/PreviousProjects";
import { TDeveloperInfo } from "../../types/TDevelopersInfo";
import { developersInfo } from "../../mock/developersInfo";
import useDynamicFaviconAndTitle from "../../hooks/useDynamicFaviconAndTitle";

export default function DeveloperInfoPage() {
  console.log(123);
  const username = 'kirill-katkov';
  const [isLoading, setIsLoading] = useState(true);
  const [developerInfo, setDeveloperInfo] = useState<TDeveloperInfo | undefined>(undefined);
  useDynamicFaviconAndTitle(developerInfo?.name || "Developer CV");

  useEffect(() => {
    const devInfo = developersInfo.find((developer) => developer.username === username);
    setDeveloperInfo(devInfo);
    setIsLoading(false);
  }, [username]);



  if (isLoading) return <div>Loading...</div>;
  if (!developerInfo) return <div>Not found</div>;

  return (
    <div className="pt-12 lg:pt-20 basis-auto flex flex-col gap-16">
      <PreviousProjects projects={developerInfo.previousProjects} />
      <SkillsAndExpertise list={developerInfo.skillsAndExpertise} />
      <div className="flex gap-2 flex-col sm:flex-row">
        <div className="basis-1/2 border-gray-800 pr-2 pb-6 sm:border-r-2 sm:pb-0">
          <Education data={developerInfo.education} />
        </div>
        <div className="basis-1/2 pt-6 sm:pl-2 sm:pt-0">
          <EmploymentHistory data={developerInfo.employmentHistory} />
        </div>
      </div>
      <Languages list={developerInfo.languages} />
    </div>
  );
}
