"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/authSlice";
import { toggleSidebar } from "@/store/slices/uiSlice";
import {
  LayoutDashboard,
  Users,
  Calendar,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Members",
    href: "/admin/members",
    icon: Users,
  },
  {
    label: "Activities",
    href: "/admin/activities",
    icon: Calendar,
    disabled: true,
  },
  {
    label: "Reports",
    href: "/admin/reports",
    icon: BarChart3,
    disabled: true,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
    disabled: true,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const collapsed = useSelector((s) => s.ui.sidebarCollapsed);

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <aside
      className={cn(
        "flex flex-col h-screen sticky top-0",
        "bg-[var(--admin-sidebar-bg)] border-r border-[rgba(255,255,255,0.06)]",
        "transition-[width] duration-300 ease-in-out shrink-0",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* Brand / Logo */}
      <div
        className={cn(
          "flex items-center h-16 border-b border-[rgba(255,255,255,0.06)] overflow-hidden shrink-0",
          collapsed ? "justify-center px-0" : "px-4"
        )}
      >
        {collapsed ? (
          /* Collapsed: small circular logo */
          <div className="h-8 w-8 rounded-lg overflow-hidden shrink-0 bg-white/10">
            <Image
              src="/assets/img/pravasi-mandal-logo.png"
              alt="Pravasi Mandal"
              width={32}
              height={32}
              className="object-cover object-left h-full w-full"
            />
          </div>
        ) : (
          /* Expanded: full-width logo */
          <div className="relative h-14 w-44 shrink-0">
            <Image
              src="/assets/img/pravasi-mandal-logo.png"
              alt="Pravasi Mandal Logo"
              fill
              sizes="176px"
              className="object-contain object-left"
              priority
            />
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-4 overflow-y-auto space-y-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.disabled ? "#" : item.href}
              aria-disabled={item.disabled}
              tabIndex={item.disabled ? -1 : 0}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium",
                "transition-colors duration-150",
                active
                  ? "bg-[var(--admin-sidebar-active)] text-[var(--admin-sidebar-active-fg)]"
                  : "text-[var(--admin-sidebar-fg)] hover:bg-[var(--admin-sidebar-hover)] hover:text-white",
                item.disabled && "opacity-40 cursor-not-allowed pointer-events-none",
                collapsed && "justify-center px-0"
              )}
              title={collapsed ? item.label : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
              {!collapsed && item.disabled && (
                <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.4)]">
                  Soon
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom: Logout + Collapse toggle */}
      <div className="px-2 py-4 border-t border-[rgba(255,255,255,0.06)] space-y-0.5">
        <button
          onClick={handleLogout}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium",
            "text-[var(--admin-sidebar-fg)] hover:bg-[rgba(239,68,68,0.15)] hover:text-red-400",
            "transition-colors duration-150",
            collapsed && "justify-center px-0"
          )}
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>

        <button
          onClick={() => dispatch(toggleSidebar())}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm",
            "text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.6)] hover:bg-[var(--admin-sidebar-hover)]",
            "transition-colors duration-150",
            collapsed && "justify-center px-0"
          )}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4 shrink-0" />
          ) : (
            <>
              <ChevronLeft className="h-4 w-4 shrink-0" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
