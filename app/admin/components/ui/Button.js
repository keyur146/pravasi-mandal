"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--admin-primary)] focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--admin-primary)] text-[var(--admin-primary-fg)] hover:bg-[var(--admin-primary-dark)] shadow-sm active:scale-[0.98]",
        secondary:
          "bg-[var(--admin-surface-2)] text-[var(--admin-text)] border border-[var(--admin-border)] hover:bg-[var(--admin-border)] active:scale-[0.98]",
        ghost:
          "text-[var(--admin-text-muted)] hover:bg-[var(--admin-surface-2)] hover:text-[var(--admin-text)] active:scale-[0.98]",
        destructive:
          "bg-[var(--admin-error)] text-white hover:opacity-90 shadow-sm active:scale-[0.98]",
        outline:
          "border border-[var(--admin-primary)] text-[var(--admin-primary)] hover:bg-[var(--admin-primary-soft)] active:scale-[0.98]",
        link:
          "text-[var(--admin-primary)] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-4 py-2",
        lg: "h-11 px-6 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const Button = React.forwardRef(function Button(
  { className, variant, size, asChild = false, children, ...props },
  ref
) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
