import { useState } from "react";
import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import { Code, Group } from "@mantine/core";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
interface LinksGroupProps {
  icon: React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<"svg"> & { stroke?: number }
  >;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

const data = [
  { link: "/dashboard", label: "Dashboard" },
  { link: "/landlocation", label: "Land and Location"},
  { link: "/shelter", label: "Shelters Details"},
  { link: "/buyanimal", label: "Buy Animals"},
  { link: "/postbuying", label: "Post Buying"},
  {
    link: "/feeding",
    label: "Feeding item and watering schedule",
  },
  { link: "/vaccination", label: "Vaccination"},
  {
    link: "/sheltercleaning",
    label: "Shelter Cleaning & Maintenance"
  },
  { link: "/healthmonitoring", label: "Health Monitoring"},
  { link: "/expenses", label: "Expenses"},
];
export function NavSideBar() {
  const [active, setActive] = useState("dashboard");

  const links = data.map((item) => (
    <Link
  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
        active === item.link
          ? "bg-blue-600 text-white"
          : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
      }`}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
       onClick={()=>
      setActive(item.link)
     }
     >
      
    {/* {item.icon ? (
    <item.icon className={classes.linkIcon} stroke={1.5} />
    ) : null}  */}
    <span>{item.label}</span>
   </Link>
  ));

  return (
    
    <nav className="w-64 h-screen bg-white border-r shadow-md p-4 flex flex-col justify-between">
      <div>
        <Group className="mb-6 text-xl font-semibold text-black-700" justify="space-between">
          <Code fw={700}>Livestock</Code>
        </Group>
    <div className="space-y-2">{links}</div>
      </div>

      {/* <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
        
      </div> */}
    </nav>
  );
}
