import { useLocation } from "react-router-dom";

export function useIsPage(pageOrPages: string | string[]) {
  const location = useLocation();

  const pathWithUsername = ``;

  if (Array.isArray(pageOrPages)) {
    return pageOrPages.some((path) => location.pathname === pathWithUsername + path);
  } else {
    if (pageOrPages === "/") {
      return location.pathname === pathWithUsername + pageOrPages.slice(0, -1);
    }

    return location.pathname === pathWithUsername + pageOrPages;
  }
}