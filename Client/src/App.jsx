import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { AppSidebar } from "@/components/app-sidebar";
import Page from "./page.jsx";
import SyncUser from './auth/SyncUser.jsx'; 
// import {} from "@/components/ui/breadcrumb";
// import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import LandingPage from "./pages/LandingPage.jsx";

function App() {
  return (
    <header>
      <SignedOut>
        {/* <SignInButton /> */}
        <LandingPage />
      </SignedOut>

      <SignedIn>
        <SyncUser/>
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
