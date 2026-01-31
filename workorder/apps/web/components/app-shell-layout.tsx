'use client';

import {
  AppShellProvider,
  AppShell,
  ExtensionPoint,
} from '@workspace/ui/components/app-shell';
import { TeamSwitcher } from '@/components/app-shell/team-switcher';
import { MainNavigation } from '@/components/app-shell/main-navigation';
import { UserMenu } from '@/components/app-shell/user-menu';
import { HeaderContent } from '@/components/app-shell/header-content';

export function AppShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShellProvider>
      <AppShell>
        {/* Left Sidebar Extensions */}
        <ExtensionPoint name="sidebar.left.header">
          <TeamSwitcher />
        </ExtensionPoint>

        <ExtensionPoint name="sidebar.left.content">
          <MainNavigation />
        </ExtensionPoint>

        <ExtensionPoint name="sidebar.left.footer">
          <UserMenu />
        </ExtensionPoint>

        {/* Header Extensions */}
        <ExtensionPoint name="header.left">
          <HeaderContent />
        </ExtensionPoint>

        {/* Main Content */}
        {children}
      </AppShell>
    </AppShellProvider>
  );
}
