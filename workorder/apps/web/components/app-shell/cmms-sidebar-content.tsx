'use client';

import * as React from 'react';
import {
  Building2,
  Calendar,
  CheckSquare,
  Plus,
  Search,
  Settings,
  Wrench,
} from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarSeparator,
  SidebarInput,
} from '@workspace/ui/components/sidebar';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@workspace/ui/components/select';

const assetTypes = [
  { id: '1', name: 'HVAC Systems', count: 12, icon: Building2 },
  { id: '2', name: 'Electrical', count: 8, icon: Wrench },
  { id: '3', name: 'Plumbing', count: 15, icon: Settings },
  { id: '4', name: 'Mechanical', count: 6, icon: Wrench },
];

const workOrderStatuses = [
  { id: 'open', name: 'Open', count: 5, color: 'bg-blue-500' },
  { id: 'in-progress', name: 'In Progress', count: 3, color: 'bg-yellow-500' },
  { id: 'pending', name: 'Pending', count: 2, color: 'bg-orange-500' },
  { id: 'completed', name: 'Completed', count: 12, color: 'bg-green-500' },
];

export const CMMSSidebarContent = {
  Header: function Header() {
    return (
      <SidebarGroup>
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <SidebarInput placeholder="Search assets..." className="pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="h-8">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Assets</SelectItem>
              <SelectItem value="hvac">HVAC Systems</SelectItem>
              <SelectItem value="electrical">Electrical</SelectItem>
              <SelectItem value="plumbing">Plumbing</SelectItem>
              <SelectItem value="mechanical">Mechanical</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SidebarGroup>
    );
  },

  Main: function Main() {
    return (
      <>
        <SidebarGroup>
          <div className="flex items-center justify-between">
            <SidebarGroupLabel>Asset Types</SidebarGroupLabel>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <SidebarMenu>
            {assetTypes.map((asset) => (
              <SidebarMenuItem key={asset.id}>
                <SidebarMenuButton asChild>
                  <a href={`/assets/${asset.id}`} className="w-full">
                    <asset.icon className="h-4 w-4" />
                    <span className="flex-1">{asset.name}</span>
                    <Badge variant="secondary" className="ml-auto">
                      {asset.count}
                    </Badge>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <div className="flex items-center justify-between">
            <SidebarGroupLabel>Work Orders</SidebarGroupLabel>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <SidebarMenu>
            {workOrderStatuses.map((status) => (
              <SidebarMenuItem key={status.id}>
                <SidebarMenuButton asChild>
                  <a href={`/workorders?status=${status.id}`} className="w-full">
                    <div
                      className={`h-2 w-2 rounded-full ${status.color}`}
                    />
                    <span className="flex-1">{status.name}</span>
                    <Badge variant="secondary" className="ml-auto">
                      {status.count}
                    </Badge>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/workorders/new">
                  <Plus className="h-4 w-4" />
                  <span>New Work Order</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/assets/new">
                  <Plus className="h-4 w-4" />
                  <span>Add Asset</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/schedule">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/inspections">
                  <CheckSquare className="h-4 w-4" />
                  <span>Inspections</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </>
    );
  },

  Footer: function Footer() {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <a href="/settings/assets">
              <Settings className="h-4 w-4" />
              <span>Asset Settings</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  },
};
