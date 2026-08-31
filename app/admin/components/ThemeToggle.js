"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useDispatch } from "react-redux";
import { setTheme } from "@/store/slices/themeSlice";
import { Button } from "@/app/admin/components/ui/Button";

export default function ThemeToggle() {
  const { setTheme: setNextTheme, resolvedTheme } = useTheme();
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);

  // Only render icon after hydration so server and client match
  useEffect(() => setMounted(true), []);

  function handleToggle() {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setNextTheme(next);
    dispatch(setTheme(next));
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-label="Toggle theme"
      title={mounted ? (resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
    >
      {/* Render placeholder on server, real icon after mount */}
      {mounted ? (
        resolvedTheme === "dark" ? (
          <Sun className="h-4 w-4 text-[var(--admin-text-muted)]" />
        ) : (
          <Moon className="h-4 w-4 text-[var(--admin-text-muted)]" />
        )
      ) : (
        <span className="h-4 w-4 block" />
      )}
    </Button>
  );
}
