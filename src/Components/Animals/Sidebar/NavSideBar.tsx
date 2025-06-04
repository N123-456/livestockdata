import { useState } from "react";
import {
  IconHome,
  IconMapPin,
  IconBuilding,
  IconShoppingCart,
  IconClipboardList,
  IconBowl,
  IconRings,
  IconTrash,
  IconHeartPause,
  IconWallet,
} from "@tabler/icons-react";
import { Code, Group } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import classes from "./Navbar.module.css";
interface LinksGroupProps {
  icon: React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<"svg"> & { stroke?: number }
  >;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconHome },
  { link: "/landlocation", label: "Land and Location", icon: IconMapPin },
  { link: "/shelter", label: "Shelters Details", icon: IconBuilding },
  { link: "/buyanimal", label: "Buy Animals", icon: IconShoppingCart },
  { link: "/postbuying", label: "Post Buying", icon: IconClipboardList },
  {
    link: "/feeding",
    label: "Feeding item and watering schedule",
    icon: IconBowl,
  },
  { link: "/vaccination", label: "Vaccination", icon: IconRings },
  {
    link: "/sheltercleaning",
    label: "Shelter Cleaning & Maintenance",
    icon: IconTrash,
  },
  {
    link: "/healthmonitoring",
    label: "Health Monitoring",
    icon: IconHeartPause,
  },
  { link: "/expenses", label: "Expenses", icon: IconWallet },
];
export function NavSideBar() {
  const [active, setActive] = useState("/dashboard");
 const location = useLocation();
  const currentPath = location.pathname;
  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.link === currentPath || undefined}
      href={item.link}
      key={item.label}
      onClick={() => setActive(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          {/* <MantineLogo size={28} />
          <Code fw={700}>v3.1.2</Code> */}
          <h2>LiveStock</h2>
        </Group>
        <div>{links}</div>
      </div>
    </nav>
  );
}
