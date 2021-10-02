import MenuItem from "../menu-item";

const Menu = ({ navItems }) => {
  return (
    <ul className="nms-menu-list">
      {navItems.map((navItem) => {
        if (navItem.title === "Quick Actions" || "Manage") {
          return <div key={navItem.title} className="nms-menu-divider">{navItem.title}</div>;
        }
        return <MenuItem key={navItem.title} {...navItem} />;
      })}
    </ul>
  );
}

export default Menu;
