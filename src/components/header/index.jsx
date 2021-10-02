import React from "react";
import { Link } from "react-router-dom";

function Header({ children, openMenu }) {
  const toggleSidebar = () => openMenu();

  return (
    <>
      hello world
    </>
  );
}

export default Header;
