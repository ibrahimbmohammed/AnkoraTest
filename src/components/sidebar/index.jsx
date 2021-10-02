import React from "react";
import Menu from "../menu";

const Sidebar =  ({ navItems, open }) => {
  return (
    <div className={`nms-sidebar ${open && "open"}`}>
      <Menu navItems={navItems} />
    </div>
  );
}

export default Sidebar;
