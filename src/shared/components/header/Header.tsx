import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HEADER_BASE_ROUTE,
  HEADER_LINKS,
  HEADER_TITLE,
  HeaderProps,
} from "@components/header";
import { Icon } from "@components/icon";
import { capitalize } from "@utils";
import { BREAKPOINT, ROUTE } from "@shared/constants";

import "./header.scss";

const Header: FunctionComponent<HeaderProps> = ({ opened }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpened, setOpened] = useState(opened);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const collapseNavBar = (): void => setOpened(false);

  const expandNavBar = (): void => setOpened(true);

  const handleClick = (): void => {
    if (isOpened) {
      collapseNavBar();
      return;
    }

    expandNavBar();
  };

  const navigateToRoute = (routeName: string): string => {
    return routeName !== ROUTE.contact
      ? `${HEADER_BASE_ROUTE}/${routeName}`
      : routeName;
  };

  const getLinkItem = (link: string) => {
    return (
      <Link
        className="header-link"
        key={link}
        to={navigateToRoute(link)}
        tabIndex={0}
        onClick={collapseNavBar}
      >
        {capitalize(link)}
      </Link>
    );
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__main">
          <Link
            className="header-title header-link"
            to={`${HEADER_BASE_ROUTE}/intro`}
            tabIndex={0}
            onClick={collapseNavBar}
          >
            {HEADER_TITLE}
          </Link>

          {width < BREAKPOINT.SM ? (
            <button onClick={handleClick}>
              <Icon icon="bars-solid" size={28} color="inherit" tabIndex={0} />
            </button>
          ) : (
            <nav className="header-nav">
              {HEADER_LINKS.map((link) => getLinkItem(link))}
            </nav>
          )}
        </div>
        {width < BREAKPOINT.SM && (
          <nav
            className="header-nav-collapse"
            aria-hidden={isOpened ? "false" : "true"}
          >
            {HEADER_LINKS.map((link) => getLinkItem(link))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
