import React from "react";

export default function MobileNav(props) {
  return (
    <div className="mob_header">
      <ul>
        <li onClick={() => props.isMobile && props.closeMobilMenu()}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobilMenu()}>
          <a href="#project">Projects</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobilMenu()}>
          <a href="#project">Experiences</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobilMenu()}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
