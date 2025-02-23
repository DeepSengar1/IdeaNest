// components/Layout.js
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar />
        <div className="flex-1 relative">
          <SidebarTrigger className="fixed h-10 w-10 my-3 mx-3 ease-linear" />
          <main className="p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
