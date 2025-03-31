import { NavigationSidebar } from "@/components/sidebar/navigation-sidebar";
import { ServerSidebar } from "@/components/sidebar/server-sidebar";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex">
      <NavigationSidebar />
      <ServerSidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
