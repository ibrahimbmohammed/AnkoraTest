import MenuItem from "../menu-item";

const Menu = ({ navItems }) => {
  return (
    <ul className="w-full transform motion-safe:hover:scale-110">
      {navItems.map((navItem) => {
        if (navItem.title === ("Quick Actions") || navItem.title === ("Manage")) {
          return  <p key={navItem.title} className="text-md text-left text-gray-600 mt-4 mb-3">{navItem.title}</p>;
        }
        return <MenuItem key={navItem.title} {...navItem} />;
      })}
    </ul>
  );
}

export default Menu;


