import { ReactComponent as SearchIcon } from "../assets/svg/search.svg";
import { ReactComponent as AddIcon } from "../assets/svg/plus.svg";
import { ReactComponent as CalenderIcon } from "../assets/svg/calender.svg";
import { ReactComponent as PeopleIcon } from "../assets/svg/people.svg";
import { ReactComponent as SettingsIcon } from "../assets/svg/setting.svg";

export const navItems = [
    {
        title: "Quick Actions",
    },
    {
        title: "Search Anything",
        icon: <SearchIcon className="nms-menu-icon" />,
        path: "",
        name: 'dashboard'
    },
    {
        title: "Add a New Patient ",
        icon: <AddIcon className="nms-menu-icon" />,
        path: "/patients",
        name: 'patient'
    },
    {
        title: "Manage",
    },
    {
        title: "Calender",
        icon: <CalenderIcon className="nms-menu-icon" />,
        path: "/calender",
        name: 'calender'
    },
    {
        title: "Manage Patient",
        icon: <PeopleIcon className="nms-menu-icon" />,
        path: "/manage",
        name: 'manage'
    },
    {
        title: "Settings",
        icon: <SettingsIcon className="nms-menu-icon" />,
        path: "/settings",
        name: 'settings'
    },


];

