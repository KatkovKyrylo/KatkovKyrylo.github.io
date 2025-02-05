import React from "react";
import { Outlet } from "react-router-dom";
import { developerInfo } from "../../mock/developerInfo";
import Hero from "../../components/Hero";
import useDynamicFaviconAndTitle from "../../hooks/useDynamicFaviconAndTitle";
import Header from "../../components/Header";
import { useDevInfo } from "../../contexts/dev-info.hook";

export default function ContentLayout() {
  const { devInfo, setDevInfo } = useDevInfo();
  useDynamicFaviconAndTitle(devInfo?.name || "Developer CV");

  React.useEffect(() => {
    setDevInfo(developerInfo);
  }, [setDevInfo]);

  if (!devInfo) return;

  const { name, position, avatar, description } = devInfo;

  return (
    <>
      <Header />
      <div className="pt-0 md:pt-28 xl:pt-36 px-4 pb-10 flex container mx-auto flex-col lg:flex-row lg:px-8 lg:gap-16 xl:gap-20 2xl:gap-20">
        <div className="basis-auto shrink-0 lg:basis-80 xl:basis-[400px]">
          <div className="element-with-custom-scroll pt-24 md:pt-0 lg:pt-28 xl:pt-36 top-0 overflow-auto static w-full lg:h-screen lg:fixed lg:w-80 xl:w-[400px]">
            <Hero name={name} position={position} avatar={avatar} description={description} />
          </div>
        </div>
        <main className={"pt-0 lg:pt-0 basis-full flex flex-col"}>
          <Outlet />
        </main>
      </div>
    </>
  );
}
