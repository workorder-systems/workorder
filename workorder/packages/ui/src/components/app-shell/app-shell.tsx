'use client';

import * as React from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarRail,
} from '@workspace/ui/components/sidebar';
import { PortalTarget } from './portal-target';
import { useAppShellStore } from './store';
import { cn } from '@workspace/ui/lib/utils';

interface AppShellProps {
  children: React.ReactNode;
  leftSidebarCollapsible?: 'offcanvas' | 'icon' | 'none';
  rightSidebarCollapsible?: 'offcanvas' | 'icon' | 'none';
  className?: string;
}

export function AppShell({
  children,
  leftSidebarCollapsible = 'icon',
  rightSidebarCollapsible = 'none',
  className,
}: AppShellProps) {
  // Subscribe to extensions Map (stable selector for SSR)
  const extensionsMap = useAppShellStore((state) => state.extensions);
  
  // Derive hasRightSidebarExtensions using useMemo
  const hasRightSidebarExtensions = React.useMemo(
    () =>
      extensionsMap.has('sidebar.right.header') ||
      extensionsMap.has('sidebar.right.content') ||
      extensionsMap.has('sidebar.right.footer'),
    [extensionsMap]
  );
  
  const rightSidebarOpen = useAppShellStore((state) => state.rightSidebarOpen);

  return (
    <>
      {/* Left Sidebar - Always visible */}
      <Sidebar collapsible={leftSidebarCollapsible} className={className}>
        <SidebarHeader>
          <PortalTarget name="sidebar.left.header" />
        </SidebarHeader>
        <SidebarContent>
          <PortalTarget name="sidebar.left.content" />
        </SidebarContent>
        <SidebarFooter>
          <PortalTarget name="sidebar.left.footer" />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      {/* Main Content */}
      <SidebarInset className="overflow-visible min-h-0">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] duration-300 ease-in-out group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <PortalTarget name="header.left" />
          </div>
          <div className="ml-auto flex items-center gap-2 px-4">
            <PortalTarget name="header.right" />
          </div>
        </header>
        <div className="flex flex-col gap-4 p-4 pt-0 overflow-visible min-h-0">
          <PortalTarget name="page.header" />
          <div className="flex flex-wrap gap-4">
            {children}
          </div>
        </div>
      </SidebarInset>

      {/* Right Sidebar - Only visible when extensions exist */}
      {hasRightSidebarExtensions && (
        <Sidebar
          collapsible={rightSidebarCollapsible}
          side="right"
          className={cn(
            'border-l sticky top-0 h-svh',
            !rightSidebarOpen && 'hidden'
          )}
        >
          <SidebarHeader>
            <PortalTarget name="sidebar.right.header" />
          </SidebarHeader>
          <SidebarContent>
            <PortalTarget name="sidebar.right.content" />
          </SidebarContent>
          <SidebarFooter>
            <PortalTarget name="sidebar.right.footer" />
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
      )}
    </>
  );
}
