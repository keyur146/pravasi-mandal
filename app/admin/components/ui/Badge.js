"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        success:
          "bg-[var(--admin-success-soft)] text-[var(--admin-success)]",
        warning:
          "bg-[var(--admin-warning-soft)] text-[var(--admin-warning)]",
        error:
          "bg-[var(--admin-error-soft)] text-[var(--admin-error)]",
        info:
          "bg-[var(--admin-info-soft)] text-[var(--admin-info)]",
        primary:
          "bg-[var(--admin-primary-soft)] text-[var(--admin-primary)]",
        default:
          "bg-[var(--admin-surface-2)] text-[var(--admin-text-muted)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, children, dot = false, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "currentColor" }}
        />
      )}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
