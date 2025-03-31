import { ServerSidebar } from "@/components/sidebar/server-sidebar";

type Props = {
  children: React.ReactNode;
  params: { serverId: string };
};

const Layout = async ({ children, params }: Props) => {
  return (
    <>
      <ServerSidebar serverId={params.serverId} />
      {children}
    </>
  );
};

export default Layout;
