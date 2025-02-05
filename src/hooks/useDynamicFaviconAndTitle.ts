import { useEffect } from "react";
import { buildFavicon } from '../utils/favicon';

const useDynamicFaviconAndTitle = (name: string): void => {
  useEffect(() => {
    buildFavicon(name);
  }, [name]);
};

export default useDynamicFaviconAndTitle;
