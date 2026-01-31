'use client';

import * as React from 'react';
import { Plus } from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarSeparator,
} from '@workspace/ui/components/sidebar';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@workspace/ui/components/avatar';
import { Calendar } from '@workspace/ui/components/calendar';
import { DATA } from '@/lib/data';

const calendars = [
  {
    name: 'My Calendars',
    items: ['Personal', 'Work', 'Family'],
  },
  {
    name: 'Favorites',
    items: ['Holidays', 'Birthdays'],
  },
  {
    name: 'Other',
    items: ['Travel', 'Reminders', 'Deadlines'],
  },
];

export const RightSidebarContent = {
  Header: function Header() {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" className="w-full justify-start">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={DATA.user.avatar} alt={DATA.user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{DATA.user.name}</span>
              <span className="truncate text-xs">{DATA.user.email}</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  },

  Main: function Main() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <>
        <SidebarGroup>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="w-full"
            classNames={{
              root: '!w-full',
              months: '!w-full',
              month: '!w-full',
              table: '!w-full',
            }}
          />
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Calendars</SidebarGroupLabel>
          <div className="space-y-2">
            {calendars.map((calendar) => (
              <div key={calendar.name} className="space-y-1">
                <h4 className="text-sm font-medium">{calendar.name}</h4>
                <ul className="space-y-1">
                  {calendar.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SidebarGroup>
      </>
    );
  },

  Footer: function Footer() {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <Plus />
            <span>New Calendar</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  },
};
