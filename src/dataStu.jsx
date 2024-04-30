import {
  Dashboard as DashboardIcon,
  Edit,
  List,
  Checklist,
  Sms,
  Logout,
  AttachMoney,
  Search as SearchIcon,
  PeopleAlt,
  Settings as SettingsIcon,
  Help as HelpIcon,
} from "@mui/icons-material";




import Requestlist from "./Tutor/Requestlist";

import Settingst from "./Tutor/Settings";
import Helpst from "./Tutor/Help";
import DashboardSt from "./Student/DashboardSt";
import EditprofileSt from "./Student/EditprofileSt";
import Search from "./Student/Search";

const data = [
  {
    id: 0,
    label: "Dashboard",
    icon: <DashboardIcon />,
    component: <DashboardSt />,
    path: "/Student/Dashboard",
  },
  {
    id: 1,
    label: "Editprofile",
    icon: <Edit />,
    component: <EditprofileSt />,
    path: "/Student/Editprofile",
  },
  {
    id: 2,
    label: "Search",
    icon: <SearchIcon />,
    component: <Search />,
    path: "/Student/Search",
  },
  {
    id: 5,
    label: "Settings",
    icon: <SettingsIcon />,
    component: <Settingst />,
    path: "/Student/Settings",
  },
  {
    id: 6,
    label: "Help",
    icon: <HelpIcon />,
    component: <Helpst />,
    path: "/Student/Help",
  },
  {
    id: 7,
    label: "Logout",
    icon: <Logout />,
    component: <Requestlist />,
    path: "/",
  },
];

export default data;
