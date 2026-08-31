"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function SelectRoot({ children, ...props }) {
  return <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>;
}

const SelectTrigger = React.forwardRef(function SelectTrigger(
  { className, children, ...props },
  ref
) {
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex h-9 w-full items-center justify-between rounded-md border border-[var(--admin-border)] bg-[var(--admin-surface)] px-3 py-2 text-sm text-[var(--admin-text)]",
        "placeholder:text-[var(--admin-text-subtle)]",
        "focus:outline-none focus:ring-2 focus:ring-[var(--admin-primary)] focus:border-transparent",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "transition-colors",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50 shrink-0 ml-2" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = "SelectTrigger";

const SelectContent = React.forwardRef(function SelectContent(
  { className, children, position = "popper", ...props },
  ref
) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-[var(--admin-border)] bg-[var(--admin-surface)] shadow-[var(--admin-shadow-lg)]",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef(function SelectItem(
  { className, children, ...props },
  ref
) {
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm text-[var(--admin-text)]",
        "focus:bg-[var(--admin-surface-2)] focus:text-[var(--admin-text)] focus:outline-none",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4 text-[var(--admin-primary)]" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = "SelectItem";

const SelectValue = SelectPrimitive.Value;
const SelectGroup = SelectPrimitive.Group;
const SelectLabel = React.forwardRef(function SelectLabel(
  { className, ...props },
  ref
) {
  return (
    <SelectPrimitive.Label
      ref={ref}
      className={cn(
        "py-1.5 pl-8 pr-2 text-xs font-semibold text-[var(--admin-text-muted)]",
        className
      )}
      {...props}
    />
  );
});
SelectLabel.displayName = "SelectLabel";

// Convenience wrapper with label + error
function Select({
  label,
  error,
  required,
  id,
  placeholder,
  value,
  onValueChange,
  children,
  className,
}) {
  const innerId = id || React.useId();
  return (
    <div className={cn("flex flex-col gap-1.5 w-full", className)}>
      {label && (
        <label
          htmlFor={innerId}
          className="text-sm font-medium text-[var(--admin-text)]"
        >
          {label}
          {required && (
            <span className="ml-0.5 text-[var(--admin-error)]">*</span>
          )}
        </label>
      )}
      <SelectRoot value={value} onValueChange={onValueChange}>
        <SelectTrigger id={innerId}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </SelectRoot>
      {error && (
        <p className="text-xs text-[var(--admin-error)]">{error}</p>
      )}
    </div>
  );
}

export {
  Select,
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
};
