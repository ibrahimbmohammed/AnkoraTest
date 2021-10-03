import { NavLink, useRouteMatch } from "react-router-dom";
import './index.css';

const MenuItem = ({ title, icon, path }) => {
  const { url } = useRouteMatch();

  return (
    <div className="">
    <li className="flex flex-row flex flex-nowrap dis w-full rounded-lg p-1 transform motion-safe:hover:scale-110 hover:font-extralight" title={title}>
      <NavLink
        activeClassName="bg-primary-orange text-white color-white"
        exact={true} 
        to={`${url.endsWith("/") ? url.slice(0, -1) : url}${path}`}
        className="hover:bg-primary-orange group rounded-lg pr-3 flex flex-row flex-grow justify-start items-center transition-color duration-700 hover:font-extralight"
         >
        <span className="hover:bg-red-300 hover:text-white-100 inline-block pl-2 group-hover:text-white hover:stroke-current text-white fill-current text-white focus:text-white">{icon}</span>
        <span className="text-md text-gray-600 font-semibold inline-block  p-2 group-hover:text-white   hover:font-extralight hover:text-md" >{title}</span>
      </NavLink>
    </li>
    </div>
  );
}

export default MenuItem;
