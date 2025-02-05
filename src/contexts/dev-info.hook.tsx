import * as React from "react";
import { DevInfoContext } from "./dev-info.context";

export function useDevInfo() {
  return React.useContext(DevInfoContext);
}