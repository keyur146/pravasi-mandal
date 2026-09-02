"use client";

import { useSelector } from "react-redux";
import { Bell, Search, Menu } from "lucide-react";
import ThemeToggle from "@/app/admin/components/ThemeToggle";
import { Button } from "@/app/admin/components/ui/Button";

export default function AdminHeader({ title, onMenuClick }) {
  const user = useSelector((s) => s.auth.user);

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "AD";

  return (
    <header
      className="sticky top-0 z-30 h-16 flex items-center gap-3 px-4 sm:px-6 border-b"
      style={{
        backgroundColor: "var(--admin-surface)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderColor: "var(--admin-border)",
        boxShadow: "0 1px 0 var(--admin-border-soft)",
        opacity: 1,
      }}
    >
      {/* Hamburger — mobile only */}
      <button
        onClick={onMenuClick}
        className="lg:hidden flex items-center justify-center h-9 w-9 rounded-lg text-[var(--admin-text-muted)] hover:text-[var(--admin-text)] hover:bg-[var(--admin-surface-2)] transition-colors shrink-0"
        aria-label="Open navigation"
        id="admin-mobile-menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Page Title */}
      {title && (
        <h1 className="text-base font-semibold text-[var(--admin-text)] mr-auto truncate">
          {title}
        </h1>
      )}
      {!title && <div className="mr-auto" />}

      {/* Search — desktop */}
      <div
        className="hidden md:flex items-center gap-2 h-9 px-3 rounded-xl border bg-[var(--admin-surface-2)] text-[var(--admin-text-muted)] text-sm w-52 cursor-pointer hover:bg-[var(--admin-surface-3)] transition-colors"
        style={{ borderColor: "var(--admin-border)" }}
      >
        <Search className="h-3.5 w-3.5 shrink-0" />
        <span className="text-[var(--admin-text-subtle)]">Search…</span>
        <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded-md bg-[var(--admin-border)] text-[var(--admin-text-subtle)] font-mono">
          ⌘K
        </span>
      </div>

      {/* Notifications */}
      <Button variant="ghost" size="icon" aria-label="Notifications" className="relative shrink-0">
        <div className="relative">
          <Bell className="h-4 w-4 text-[var(--admin-text-muted)]" />
          <span
            className="absolute -top-1 -right-1 h-2 w-2 rounded-full pulse-dot"
            style={{ background: "var(--admin-primary)" }}
          />
        </div>
      </Button>

      {/* Theme toggle */}
      <ThemeToggle />

      {/* Avatar */}
      <div
        className="flex items-center gap-2.5 pl-2 border-l"
        style={{ borderColor: "var(--admin-border)" }}
      >
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full text-white text-xs font-bold shrink-0"
          style={{ background: "linear-gradient(135deg, var(--admin-primary), var(--admin-primary-dark))" }}
        >
          {initials}
        </div>
        <div className="hidden md:flex flex-col leading-tight">
          <span className="text-xs font-semibold text-[var(--admin-text)]">
            {user?.name || "Admin"}
          </span>
          <span className="text-[10px] text-[var(--admin-text-muted)]">
            {user?.role || "Administrator"}
          </span>
        </div>
      </div>
    </header>
  );
}
