import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import "@clerk/clerk-react";

// ⚠ WARNING: DONOT REMOVE ANY COMMENTS, THOSE MAY GET ADDED IN FUTURE.

const data = {
  teams: [
    {
      name: "IdeaNest",
      logo: GalleryVerticalEnd,
      // plan: "Enterprise",
    },
    {
      name: "Switch to mentor.",
      logo: AudioWaveform,
      plan: "mentor account",
    },
    {
      name: "Switch to student.",
      logo: Command,
      plan: "mentor account",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
      // items: [
      //   {
      //     title: "Ideas",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Events",
      url: "/events",
      icon: Bot,
      // items: [
      //   {
      //     title: "Hackathons",
      //     url: "/hakathons",
      //   },
      // ],
    },
    {
      title: "Community",
      url: "/community",
      icon: Settings2,
      // items: [
      //   {
      //     title: "Global",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Search",
      url: "#",
      icon: BookOpen,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
