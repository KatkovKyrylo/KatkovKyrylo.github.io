import { useState, useEffect } from "react";
import classNames from "classnames";
import Socials from "../Socials";
import BurgerMenu from "./BurgerMenu";
import Button from "../Button";
import { navLinks } from "../../mock/navLinks";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useIsPage } from "../../hooks/useIsPage.hook";
import { scrollToContent } from "../../utils/scrollToContent";
import { developerInfo } from "../../mock/developerInfo";

export default function Header() {
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const isPaymentPage = useIsPage(["/pay", "/checkout", "/complete"]);
  const isHomePage = useIsPage("/");

  const closeMenu = () => {
    setIsOpenMenu(false);
    document.body.classList.remove("_lock");
  };

  useEffect(() => {
    if (!isMobile) {
      closeMenu();
    }
  }, [isMobile]);

  const homePagePath = `/`;
  const payPagePath = `/pay`;

  const onClickNavLink = (index: number, idSelector: string) => () => {
    setActiveLink(index);
    scrollToContent(idSelector);

    closeMenu();
  };

  const onGoHome = () => {
    setActiveLink(null);
    closeMenu();
    navigate(homePagePath);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const onGoPay = () => {
    setActiveLink(null);
    navigate(payPagePath);
    closeMenu();
  };

  return (
    <header
      className={classNames(
        "fixed w-full h-[76px] top-0 flex items-center shadow-md shadow-gray-800 z-50 lg:backdrop-blur-md bg-gray-900/70",
        { "backdrop-blur-md bg-gray-900/70": !isOpenMenu }
      )}>
      <nav className="flex items-center justify-between container px-4 mx-auto sm:px-8">
        <BurgerMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
        <div className=" flex items-center gap-8 lg:hidden">
          {developerInfo.socials && <Socials className="[_svg]:brightness-100" />}

          <Button onClick={onGoPay} className="max-w-fit px-4 h-10">
            Pay
          </Button>
        </div>
        <ul
          className={classNames(
            "fixed transition-opacity backdrop-blur-md bg-gray-900/70 top-0 left-0 h-screen w-full flex flex-col items-center py-10 justify-center gap-8 lg:backdrop-blur-none lg:bg-transparent lg:gap-6 lg:h-auto lg:flex-row lg:py-0 lg:justify-between lg:static",
            { "opacity-0 pointer-events-none": !isOpenMenu && isMobile },
            "lg:!opacity-1 lg:!pointer-events-auto"
          )}>
          <li>
            <button
              onClick={onGoHome}
              className={classNames(
                "cursor-pointer transition-colors capitalize text-2xl sm:text-3xl lg:text-base hover:text-green-400 ",
                {
                  "text-green-400": isHomePage,
                }
              )}>
              Home
            </button>
          </li>
          {navLinks.map((navLink, i) => (
            <li key={`header-nav-link-${navLink.title}-${i}`}>
              <button
                disabled={isPaymentPage}
                onClick={onClickNavLink(i, navLink.href)}
                className={classNames(
                  " disabled:cursor-no-drop disabled:opacity-50 cursor-pointer transition-colors capitalize text-2xl sm:text-3xl lg:text-base hover:text-green-400",
                  {
                    "text-green-400": activeLink === i,
                  }
                )}>
                {navLink.title}
              </button>
            </li>
          ))}

          <Socials className="flex sm:hidden [&_svg]:size-10" />

          <div className="flex gap-8">
            <Button onClick={onGoPay} className="max-w-fit px-8 hidden lg:block">
              Pay
            </Button>
          </div>
        </ul>
      </nav>
    </header>
  );
}
