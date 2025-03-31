import { ServerSidebar } from "@/components/sidebar/server-sidebar";

type Props = {
  children: React.ReactNode;
  params: Promise<{ serverId: string }>;
};

const Layout = async ({ children, params }: Props) => {
  const { serverId } = await params;
  return (
    <>
      <ServerSidebar serverId={serverId} />
      {children}
    </>
  );
};

export default Layout;
