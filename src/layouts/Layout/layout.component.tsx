import { Outlet } from 'react-router-dom';
import classNames from "classnames";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import { TDeveloperInfo } from "../../types/TDevelopersInfo";
import { developersInfo } from "../../mock/developersInfo";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useIsPage } from "../../hooks/useIsPage.hook";
import { useDevInfo } from "../../contexts/dev-info.hook";
import { useState, useEffect } from "react";

export interface DeveloperInfoPageProps {
  developerInfo: TDeveloperInfo;
}

export default function Layout() {
  const { devInfo, setDevInfo } = useDevInfo();
  const isMobile = useIsMobile();
  const isPaymentPage = useIsPage(["/pay", "/checkout", "/complete"]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const username = 'kirill-katkov';
    const devInfo = developersInfo.find((developer) => developer.username === username);
    setDevInfo(devInfo);
    setIsLoading(false);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (!devInfo) return <div>Not found</div>;

  const { name, position, avatar, socials, description } = devInfo;

  return (
    <div>
      <Header isMobile={isMobile} socials={devInfo.socials} />
      <div className="mt-16 px-4 pb-10 flex container mx-auto flex-col lg:flex-row lg:px-8 lg:gap-20 xl:gap-32 2xl:gap-40">
        <div className="basis-auto shrink-0 lg:basis-80 xl:basis-[400px]">
          <div className="element-with-custom-scroll overflow-auto static w-full lg:h-screen lg:fixed lg:w-80 xl:w-[400px]">
            <Hero
              name={name}
              position={position}
              avatar={avatar}
              socials={socials}
              description={description}
            />
          </div>
        </div>
        <main
          className={classNames("pt-12 lg:pt-0 basis-full flex flex-col", {
            " lg:justify-center": isPaymentPage,
          })}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
