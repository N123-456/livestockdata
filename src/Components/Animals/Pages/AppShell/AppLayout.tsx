import { AppShell, Burger, Code, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavSideBar } from "../../Sidebar/NavSideBar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width:300 ,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      
      <AppShell.Navbar p="md">
        <NavSideBar />
      </AppShell.Navbar>

      <AppShell.Main className="bg-gray-50">
        <Outlet /> {/* This was missing - it renders the child routes */}
      </AppShell.Main>
    </AppShell>
  );
}
