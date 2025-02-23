"use client";
import { dark } from "@clerk/themes";

import { useRef } from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useSidebar } from "@/components/ui/sidebar";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { user } = useUser();
  const userButtonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    userButtonRef.current?.querySelector("button")?.click();
  };

  if (!user) {
    return <div>Loading user...</div>;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="flex items-center w-full text-left p-2 rounded-lg"
          onClick={handleClick}
        >
          <div onClick={handleClick} ref={userButtonRef}>
            <UserButton
              appearance={{
                baseTheme: dark,
              }}
            />
          </div>
          {!isMobile && (
            <div className="ml-3 flex flex-col">
              <span className="text-sm font-semibold truncate">
                {user.firstName} {user.lastName}
              </span>
            </div>
          )}
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
