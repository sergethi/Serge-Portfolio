import React, { useState } from "react";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import { logEvent } from '../analytics';

import MobileNav from "./MobileNav";

const Header = ({ data, contactEmail }) => {
  const [open, setOpen] = useState(false);
  const closeIcon = (
    <div className="close-icon">
      <FaRegTimesCircle onClick={() => setOpen(!open)} />{" "}
    </div>
  );
  const openIcon = (
    <div className="burger-icon">
      <FaBars onClick={() => setOpen(!open)} />{" "}
    </div>
  );
  const closeMobilMenu = () => setOpen(false);
  return (
    <div>
      <div className="header_container" id="header">
        <a className="header_container_name" href="#labding">
          <img src={data.logo} alt="logo" />
        </a>

        <nav>
          <ul>
            <li>
              <a href="#about" onClick={() => logEvent('Navigation', 'Menu Click', 'About')}>About</a>
            </li>
            <li>
              <a href="#project" onClick={() => logEvent('Navigation', 'Menu Click', 'Projects')}>Projects</a>
            </li>
            <li>
              <a href="#experience" onClick={() => logEvent('Navigation', 'Menu Click', 'Experiences')}>Experiences</a>
            </li>
            <li>
              <a href="#contact" onClick={() => logEvent('Navigation', 'Menu Click', 'Contact')}>Contact</a>
            </li>
          </ul>
        </nav>

        {/* </CSSTransition> */}
        <div className="mobNav">
          {open ? closeIcon : openIcon}
          {open && (
            <MobileNav isMobile={true} closeMobilMenu={closeMobilMenu} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
