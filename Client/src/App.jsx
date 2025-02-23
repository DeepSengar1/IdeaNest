import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { AppSidebar } from "@/components/app-sidebar";
import Page from "./page.jsx";
// import {} from "@/components/ui/breadcrumb";
// import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <SidebarTrigger className="fixed h-10 w-10 my-3 mx-3 ease-linear" />
            <Page />
          </SidebarInset>
        </SidebarProvider>
      </SignedIn>
    </header>
  );
}

export default App;
