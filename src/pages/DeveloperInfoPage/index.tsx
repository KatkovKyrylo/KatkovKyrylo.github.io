import SkillsAndExpertise from "../../components/SkillsAndExpertise";
import Education from "../../components/Education";
import EmploymentHistory from "../../components/EmploymentHistory";
import Hero from "../../components/Hero";
import Languages from "../../components/Languages";
import Header from "../../components/Header";
import PreviousProjects from "../../components/PreviousProjects";
import { TDeveloperInfo } from "../../types/TDevelopersInfo";
import { developersInfo } from "../../mock/developersInfo";
import { useIsMobile } from "../../hooks/useIsMobile";
import useDynamicFaviconAndTitle from "../../hooks/useDynamicFaviconAndTitle";
import React from "react";

export interface DeveloperInfoPageProps {
  developerInfo: TDeveloperInfo;
}

export default function DeveloperInfoPage() {
  const username = 'kirill-katkov';
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = React.useState(true);
  const [developerInfo, setDeveloperInfo] = React.useState<TDeveloperInfo | undefined>(undefined);
  useDynamicFaviconAndTitle(developerInfo?.name || "Developer CV");

  React.useEffect(() => {
    const devInfo = developersInfo.find((developer) => developer.username === username);
    setDeveloperInfo(devInfo);
    setIsLoading(false);
  }, [username]);

  if (isLoading) return <div>Loading...</div>;
  if (!developerInfo) return <div>Not found</div>;

  return (
    <>
      <Header isMobile={isMobile} socials={developerInfo.socials} />
      <div className="px-4 pb-10 flex container mx-auto flex-col lg:flex-row lg:px-8 lg:gap-20 xl:gap-32 2xl:gap-40">
        <div className="basis-auto shrink-0 lg:basis-80 xl:basis-[400px]">
          <div className="element-with-custom-scroll overflow-auto static w-full lg:h-screen lg:fixed lg:w-80 xl:w-[400px]">
            <Hero
              name={developerInfo.name}
              position={developerInfo.position}
              avatar={developerInfo.avatar}
              socials={developerInfo.socials}
              description={developerInfo.description}
            />
          </div>
        </div>
        <main className="pt-12 lg:pt-20 basis-auto flex flex-col gap-16">
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
        </main>
      </div>
    </>
  );
}
