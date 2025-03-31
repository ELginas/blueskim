import { NavigationSidebar } from "@/components/sidebar/navigation-sidebar";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex">
      <NavigationSidebar />
      {children}
    </div>
  );
};

export default Layout;
