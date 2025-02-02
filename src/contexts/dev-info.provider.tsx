import { useState } from "react";
import { DevInfoContext } from "./dev-info.context";
import { TDeveloperInfo } from "../types/TDevelopersInfo";

export default function DevInfoProvider({ children }: React.PropsWithChildren) {
  const [devInfo, setDevInfo] = useState<TDeveloperInfo | undefined>(undefined);

  return <DevInfoContext.Provider value={{ devInfo, setDevInfo }}>{children}</DevInfoContext.Provider>;
}