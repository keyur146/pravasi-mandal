"use client";

import { useSelector } from "react-redux";
import { Bell, Search } from "lucide-react";
import ThemeToggle from "@/app/admin/components/ThemeToggle";
import { Button } from "@/app/admin/components/ui/Button";

export default function AdminHeader({ title }) {
  const user = useSelector((s) => s.auth.user);

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "AD";

  return (
    <header className="sticky top-0 z-30 h-16 flex items-center gap-4 px-6 border-b border-[var(--admin-border)] bg-[var(--admin-surface)]/80 backdrop-blur-sm">
      {/* Page Title */}
      {title && (
        <h1 className="text-base font-semibold text-[var(--admin-text)] mr-auto">
          {title}
        </h1>
      )}
      {!title && <div className="mr-auto" />}

      {/* Search */}
      <div className="hidden md:flex items-center gap-2 h-9 px-3 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-surface-2)] text-[var(--admin-text-muted)] text-sm w-56">
        <Search className="h-3.5 w-3.5 shrink-0" />
        <span>Search…</span>
      </div>

      {/* Notifications */}
      <Button variant="ghost" size="icon" aria-label="Notifications">
        <div className="relative">
          <Bell className="h-4 w-4 text-[var(--admin-text-muted)]" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[var(--admin-primary)]" />
        </div>
      </Button>

      {/* Theme toggle */}
      <ThemeToggle />

      {/* Avatar */}
      <div className="flex items-center gap-2.5 pl-2 border-l border-[var(--admin-border)]">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--admin-primary)] text-white text-xs font-semibold shrink-0">
          {initials}
        </div>
        <div className="hidden md:flex flex-col leading-tight">
          <span className="text-xs font-medium text-[var(--admin-text)]">
            {user?.name || "Admin"}
          </span>
          <span className="text-[10px] text-[var(--admin-text-muted)]">
            {user?.email || "admin@pravasi.org"}
          </span>
        </div>
      </div>
    </header>
  );
}
