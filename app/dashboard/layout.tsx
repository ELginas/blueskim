import { AppSidebar } from "@/components/app-sidebar";
import TestSidebar from "@/components/test-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width-icon": "64px",
      }}
    >
      <AppSidebar />
      {/* <TestSidebar /> */}
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
