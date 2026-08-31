"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Table({ className, children, ...props }) {
  return (
    <div className="w-full overflow-auto rounded-xl border border-[var(--admin-border)]">
      <table
        className={cn(
          "w-full caption-bottom text-sm border-collapse",
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

function TableHeader({ className, children, ...props }) {
  return (
    <thead
      className={cn(
        "bg-[var(--admin-surface-2)] border-b border-[var(--admin-border)]",
        className
      )}
      {...props}
    >
      {children}
    </thead>
  );
}

function TableBody({ className, children, ...props }) {
  return (
    <tbody
      className={cn(
        "divide-y divide-[var(--admin-border)] bg-[var(--admin-surface)]",
        className
      )}
      {...props}
    >
      {children}
    </tbody>
  );
}

function TableRow({ className, children, ...props }) {
  return (
    <tr
      className={cn(
        "transition-colors hover:bg-[var(--admin-surface-2)]",
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
}

function TableHead({ className, children, ...props }) {
  return (
    <th
      className={cn(
        "h-11 px-4 text-left align-middle text-xs font-semibold uppercase tracking-wide text-[var(--admin-text-muted)]",
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
}

function TableCell({ className, children, ...props }) {
  return (
    <td
      className={cn(
        "px-4 py-3 align-middle text-sm text-[var(--admin-text)]",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
}

function TableCaption({ className, children, ...props }) {
  return (
    <caption
      className={cn(
        "mt-4 text-sm text-[var(--admin-text-muted)]",
        className
      )}
      {...props}
    >
      {children}
    </caption>
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
};
