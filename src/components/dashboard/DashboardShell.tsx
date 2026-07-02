"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { TopBar } from "@/components/dashboard/TopBar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

const DESKTOP_QUERY = "(min-width: 768px)";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleToggleSidebar() {
    const isDesktop = window.matchMedia(DESKTOP_QUERY).matches;
    if (isDesktop) {
      setCollapsed((prev) => !prev);
    } else {
      setMobileOpen((prev) => !prev);
    }
  }

  return (
    <div className="flex h-screen flex-col">
      <TopBar onToggleSidebar={handleToggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <aside
          className={cn(
            "hidden shrink-0 border-r border-border transition-[width] duration-200 md:block",
            collapsed ? "md:w-16" : "md:w-64"
          )}
        >
          <Sidebar collapsed={collapsed} />
        </aside>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent side="left" className="w-72 p-0 md:hidden">
            <SheetTitle className="sr-only">Sidebar</SheetTitle>
            <Sidebar />
          </SheetContent>
        </Sheet>

        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
