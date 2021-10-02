import { NavLink, useRouteMatch } from "react-router-dom";

const MenuItem = ({ title, icon, path }) => {
  const { url } = useRouteMatch();

  return (
    <li className="nms-menu-item" title={title}>
      <NavLink
        activeClassName="active"
        exact
        to={`${url.endsWith("/") ? url.slice(0, -1) : url}${path}`}
        className={`nms-menu-link ${
          title.toLowerCase() === "dashboard" && "dashboard"
        }`}
      >
        <span className="nms-link-icon">{icon}</span>
        <span className="nms-link-title">{title}</span>
      </NavLink>
    </li>
  );
}

export default MenuItem;
