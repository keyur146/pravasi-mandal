"use client";

import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

export default function AdminLayout({ children, title }) {
  const collapsed = useSelector((s) => s.ui.sidebarCollapsed);

  return (
    <div className="flex min-h-screen admin-root">
      <AdminSidebar />
      <div
        className={cn(
          "flex flex-col flex-1 min-w-0",
          "transition-all duration-300 ease-in-out"
        )}
      >
        <AdminHeader title={title} />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
