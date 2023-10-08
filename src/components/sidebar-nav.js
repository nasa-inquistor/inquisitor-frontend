"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function SidebarNav({ className, items, ...props }) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 xl:flex-col xl:space-x-0 xl:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost", size: "lg" }),
            pathname === item.href
              ? "bg-primary hover:bg-muted text-white truncate"
              : "hover:bg-muted hover:underline text-black dark:text-white truncate",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
