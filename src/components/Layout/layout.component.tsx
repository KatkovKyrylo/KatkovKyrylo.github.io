import { Outlet } from 'react-router-dom';
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import { TDeveloperInfo } from "../../types/TDevelopersInfo";
import { developersInfo } from "../../mock/developersInfo";
import { useIsMobile } from "../../hooks/useIsMobile";
import useDynamicFaviconAndTitle from "../../hooks/useDynamicFaviconAndTitle";
import { useState, useEffect } from "react";

export interface DeveloperInfoPageProps {
  developerInfo: TDeveloperInfo;
}

export default function DeveloperInfoPage() {
  const username = 'kirill-katkov';
  const isMobile = useIsMobile();
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
    <div>
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
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
