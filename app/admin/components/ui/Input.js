"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(function Input(
  {
    className,
    label,
    error,
    hint,
    id,
    leftIcon,
    rightIcon,
    required,
    ...props
  },
  ref
) {
  const inputId = id || React.useId();

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-[var(--admin-text)]"
        >
          {label}
          {required && (
            <span className="ml-0.5 text-[var(--admin-error)]">*</span>
          )}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <span className="absolute left-3 text-[var(--admin-text-muted)] pointer-events-none">
            {leftIcon}
          </span>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "w-full h-9 rounded-md border bg-[var(--admin-surface)] px-3 py-2 text-sm text-[var(--admin-text)]",
            "placeholder:text-[var(--admin-text-subtle)]",
            "border-[var(--admin-border)]",
            "focus:outline-none focus:ring-2 focus:ring-[var(--admin-primary)] focus:ring-offset-0 focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-colors",
            error && "border-[var(--admin-error)] focus:ring-[var(--admin-error)]",
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            className
          )}
          {...props}
        />
        {rightIcon && (
          <span className="absolute right-3 text-[var(--admin-text-muted)] pointer-events-none">
            {rightIcon}
          </span>
        )}
      </div>
      {error && (
        <p className="text-xs text-[var(--admin-error)]">{error}</p>
      )}
      {hint && !error && (
        <p className="text-xs text-[var(--admin-text-muted)]">{hint}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
