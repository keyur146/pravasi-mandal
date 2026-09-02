"use client";

import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

export default function AdminLayout({ children, title }) {
  const collapsed = useSelector((s) => s.ui.sidebarCollapsed);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen admin-root">
      <AdminSidebar
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />
      <div
        className={cn(
          "flex flex-col flex-1 min-w-0",
          "transition-all duration-300 ease-in-out"
        )}
      >
        <AdminHeader
          title={title}
          onMenuClick={() => setMobileOpen(true)}
        />
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
