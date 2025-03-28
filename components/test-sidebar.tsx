"use client";

import { Home, Menu, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export default function TestSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`h-screen bg-gray-900 text-white transition-all duration-300 ${
          collapsed ? "w-16" : "w-60"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          {!collapsed && <h1 className="text-lg font-bold">Dashboard</h1>}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="text-white"
          >
            <Menu />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <SidebarItem icon={<Home />} label="Home" collapsed={collapsed} />
          <SidebarItem
            icon={<Settings />}
            label="Settings"
            collapsed={collapsed}
          />
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <h2 className="text-xl font-semibold">Main Content</h2>
      </div>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({
  icon,
  label,
  collapsed,
}: {
  icon: JSX.Element;
  label: string;
  collapsed: boolean;
}) {
  return (
    <div className="flex items-center p-3 hover:bg-gray-700 cursor-pointer">
      {icon}
      {!collapsed && <span className="ml-3">{label}</span>}
    </div>
  );
}
