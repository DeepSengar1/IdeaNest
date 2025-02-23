import * as React from "react";
import {
  AudioWaveform,
  Search,
  Calendar,
  Command,
  Globe,
  GalleryVerticalEnd,
  BadgePlus,
  MessageCircle,
  House,
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
      name: "Admin Panel",
      logo: AudioWaveform,
      plan: "mentor account",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: House,
      isActive: true,
      items: [
        {
          title: "Ideas",
          url: "#",
        },
        {
          title: "Projects",
          url: "#",
        },
      ],
    },
    {
      title: "Events",
      url: "/events",
      icon: Calendar,
      // items: [
      //   {
      //     title: "Hackathons",
      //     url: "/hakathons",
      //   },
      // ],
    },
    {
      title: "Create",
      url: "/create",
      icon: BadgePlus,
      // items: [
      //   {
      //     title: "Global",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Community",
      url: "/community",
      icon: Globe,
      // items: [
      //   {
      //     title: "Global",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Message",
      url: "/message",
      icon: MessageCircle,
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
      icon: Search,
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
