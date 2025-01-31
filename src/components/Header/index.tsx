import { useState, useEffect } from "react";
import classNames from "classnames";
import Socials from "../Socials";
import BurgerMenu from "./BurgerMenu";
import { scrollToContent } from "../../utils/scrollToContent";
import { navLinks } from "../../mock/navLinks";
import { TSocials } from "../../types/TSocials";

export interface HeaderProps {
  socials: TSocials;
  isMobile: boolean;
}

export default function Header({ socials, isMobile }: HeaderProps) {
  const [activeLink, setActiveLink] = useState(0);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const closeMenu = () => {
    setIsOpenMenu(false);
    document.body.classList.remove("_lock");
  };

  useEffect(() => {
    if (!isMobile) {
      closeMenu();
    }
  }, [isMobile]);

  const onClickNavLink = (index: number, idSelector: string) => () => {
    setActiveLink(index);
    scrollToContent(idSelector);

    closeMenu();
  };

  return (
    <header
      className={classNames(
        "fixed w-full top-0 py-4 shadow-md shadow-gray-800 z-50 lg:backdrop-blur-md lg:bg-gray-900/70",
        { "backdrop-blur-md bg-gray-900/70": !isOpenMenu }
      )}>
      <nav className="flex items-center justify-between container px-4 mx-auto sm:px-8">
        <BurgerMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
        <Socials socials={socials} className="flex lg:hidden [_svg]:brightness-100" />

        <ul
          className={classNames(
            "fixed transition-opacity backdrop-blur-md bg-gray-900/70 top-0 left-0 h-screen w-full flex flex-col items-center py-10 justify-center gap-8 lg:backdrop-blur-none lg:bg-transparent lg:gap-6 lg:h-auto lg:flex-row lg:py-0 lg:justify-between lg:static",
            { "opacity-0 pointer-events-none": !isOpenMenu && isMobile },
            "lg:!opacity-1 lg:!pointer-events-auto"
          )}>
          {navLinks.map((navLink, i) => (
            <li key={`header-nav-link-${navLink.title}-${i}`}>
              <button
                onClick={onClickNavLink(i, navLink.href)}
                className={classNames(
                  "cursor-pointer transition-colors capitalize text-2xl sm:text-3xl lg:text-base hover:text-green-400",
                  {
                    "text-green-400": activeLink === i,
                  }
                )}>
                {navLink.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
