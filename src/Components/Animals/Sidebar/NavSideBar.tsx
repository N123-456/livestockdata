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
interface LinksGroupProps {
  icon: React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<"svg"> & { stroke?: number }
  >;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

const data = [
  { link: "dashboard", label: "Dashboard", icon: IconSettings },
  { link: "landlocation", label: "Land and Location", icon: IconReceipt2 },
  { link: "shelter", label: "Shelters Details", icon: IconFingerprint },
  { link: "buyanimal", label: "Buy Animals", icon: IconKey },
  { link: "postbuying", label: "Post Buying", icon: IconDatabaseImport },
  { link: "feeding", label: "Feeding item and watering schedule", icon: Icon2fa },
  { link: "vaccination", label: "Vaccination", icon: IconSettings },
  { link: "sheltercleaning", label: "Shelter Cleaning & Maintenance", icon: IconSettings },
  { link: "healthmonitoring", label: "Health Monitoring", icon: IconSettings },
  { link: "expenses", label: "Expenses", icon: IconSettings },
];
export function NavSideBar() {
  const [active, setActive] = useState("dashboard");

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      {item.icon ? (
        <item.icon className={classes.linkIcon} stroke={1.5} />
      ) : null}
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Code fw={700}>Livestock</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
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
        console.log(classes);
      </div>
    </nav>
  );
}
