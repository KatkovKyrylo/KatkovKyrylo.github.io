import { useState } from "react";
import { DevInfoContext } from "./dev-info.context";
import { TDeveloperInfo } from "../types/TDevelopersInfo";
import { buildFavicon } from '../utils/favicon';

export default function DevInfoProvider({ children }: React.PropsWithChildren) {
  const [devInfo, setDevInfo] = useState<TDeveloperInfo | undefined>(undefined);

  buildFavicon(devInfo?.name || "Developer CV");

  return <DevInfoContext.Provider value={{ devInfo, setDevInfo }}>{children}</DevInfoContext.Provider>;
}