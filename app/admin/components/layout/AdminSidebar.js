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
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Members", href: "/admin/members", icon: Users },
  { label: "Activities", href: "/admin/activities", icon: Calendar, disabled: true },
  { label: "Reports", href: "/admin/reports", icon: BarChart3, disabled: true },
  { label: "Settings", href: "/admin/settings", icon: Settings, disabled: true },
];

export default function AdminSidebar({ mobileOpen, onMobileClose }) {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const collapsed = useSelector((s) => s.ui.sidebarCollapsed);
  const user = useSelector((s) => s.auth.user);

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "AD";

  const handleLogout = () => dispatch(logout());
  const handleClose = () => onMobileClose?.();

  const Sidebar = (
    <aside
      className={cn(
        "flex flex-col h-full border-r",
        "transition-[width] duration-300 ease-in-out shrink-0",
        "max-lg:w-72",
        collapsed ? "lg:w-16" : "lg:w-60"
      )}
      style={{
        background: "var(--admin-sidebar-bg)",
        borderColor: "var(--admin-sidebar-border)",
      }}
    >
      {/* ── Brand bar ──────────────────────────────── */}
      <div
        className={cn(
          "flex items-center h-16 border-b overflow-hidden shrink-0 gap-2 px-4",
          collapsed ? "lg:justify-center lg:px-0" : ""
        )}
        style={{ borderColor: "var(--admin-sidebar-border)" }}
      >
        {/* Mobile close */}
        <button
          onClick={handleClose}
          className="lg:hidden flex-shrink-0 p-1.5 rounded-lg text-[var(--admin-sidebar-fg)] hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Logo — desktop collapsed: small square icon */}
        {collapsed && (
          <div className="hidden lg:flex h-10 w-10 rounded-xl overflow-hidden items-center justify-center bg-white/10 shrink-0">
            <Image
              src="/assets/img/pravasi-mandal-logo.png"
              alt="Pravasi Mandal"
              width={36}
              height={36}
              className="object-cover object-left scale-110"
            />
          </div>
        )}

        {/* Logo — desktop expanded */}
        {!collapsed && (
          <div className="hidden lg:block relative h-11 shrink-0" style={{ width: "168px" }}>
            <Image
              src="/assets/img/pravasi-mandal-logo.png"
              alt="Pravasi Mandal"
              fill
              sizes="168px"
              className="object-cover object-left"
              priority
            />
          </div>
        )}

        {/* Logo — mobile drawer (always visible, always expanded) */}
        <div className="relative h-10 lg:hidden shrink-0" style={{ width: "148px" }}>
          <Image
            src="/assets/img/pravasi-mandal-logo.png"
            alt="Pravasi Mandal"
            fill
            sizes="148px"
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Spacer */}
        {!collapsed && <div className="flex-1" />}

        {/* Collapse arrow — expanded desktop */}
        {!collapsed && (
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="hidden lg:flex h-6 w-6 items-center justify-center rounded-md text-white/25 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            title="Collapse sidebar"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* ── Nav ────────────────────────────────────── */}
      <nav className="flex-1 px-2 py-4 overflow-y-auto space-y-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.disabled ? "#" : item.href}
              onClick={item.disabled ? undefined : handleClose}
              aria-disabled={item.disabled}
              tabIndex={item.disabled ? -1 : 0}
              className={cn(
                "relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium",
                "transition-all duration-150",
                active
                  ? "text-white admin-nav-active"
                  : "text-[var(--admin-sidebar-fg)] hover:bg-[var(--admin-sidebar-hover)] hover:text-white",
                item.disabled && "opacity-35 cursor-not-allowed pointer-events-none",
                collapsed && "lg:justify-center lg:px-0"
              )}
              style={active ? {
                background: "var(--admin-sidebar-active)",
                boxShadow: "0 2px 12px var(--admin-primary-glow)",
              } : {}}
              title={collapsed ? item.label : undefined}
            >
              <Icon className={cn("h-4 w-4 shrink-0", active && "drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]")} />
              <span className={cn("truncate", collapsed && "lg:hidden")}>{item.label}</span>
              {!collapsed && item.disabled && (
                <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full bg-white/8 text-white/30 font-medium">
                  Soon
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* ── Bottom ─────────────────────────────────── */}
      <div className="px-2 py-4 border-t space-y-1" style={{ borderColor: "var(--admin-sidebar-border)" }}>
        {/* User chip (expanded) */}
        {!collapsed && (
          <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl mb-1 bg-white/[0.04] border border-white/5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-white shrink-0"
              style={{ background: "linear-gradient(135deg, var(--admin-primary), var(--admin-primary-dark))" }}>
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white/90 truncate">{user?.name || "Admin"}</p>
              <p className="text-[10px] text-[var(--admin-sidebar-fg)] truncate">{user?.email || "admin@pravasi.org"}</p>
            </div>
          </div>
        )}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium",
            "text-[var(--admin-sidebar-fg)] hover:bg-[rgba(248,113,113,0.1)] hover:text-[#f87171]",
            "transition-all duration-150",
            collapsed && "lg:justify-center lg:px-0"
          )}
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          <span className={cn(collapsed && "lg:hidden")}>Logout</span>
        </button>

        {/* Expand arrow (collapsed state, desktop only) */}
        {collapsed && (
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="hidden lg:flex w-full items-center justify-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/25 hover:text-white/60 hover:bg-[var(--admin-sidebar-hover)] transition-colors"
            title="Expand sidebar"
          >
            <ChevronRight className="h-4 w-4 shrink-0" />
          </button>
        )}
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop — sticky */}
      <div className="hidden lg:flex h-screen sticky top-0">{Sidebar}</div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div className="sidebar-overlay lg:hidden" onClick={handleClose} aria-hidden="true" />
          <div className="fixed inset-y-0 left-0 z-50 lg:hidden flex">{Sidebar}</div>
        </>
      )}
    </>
  );
}
