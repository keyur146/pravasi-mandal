"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--admin-border)] bg-[var(--admin-surface)] shadow-[var(--admin-shadow-sm)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CardHeader({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 px-6 py-5 border-b border-[var(--admin-border)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CardTitle({ className, children, ...props }) {
  return (
    <h3
      className={cn(
        "text-base font-semibold text-[var(--admin-text)]",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

function CardDescription({ className, children, ...props }) {
  return (
    <p
      className={cn("text-sm text-[var(--admin-text-muted)]", className)}
      {...props}
    >
      {children}
    </p>
  );
}

function CardBody({ className, children, ...props }) {
  return (
    <div className={cn("px-6 py-5", className)} {...props}>
      {children}
    </div>
  );
}

function CardFooter({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center px-6 py-4 border-t border-[var(--admin-border)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter };
