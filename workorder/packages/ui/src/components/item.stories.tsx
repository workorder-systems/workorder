import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from './item';
import { Button } from './button';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { MoreHorizontal, User } from 'lucide-react';

const meta = {
  title: 'Components/Item',
  component: Item,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic item with title and description.
 */
export const Default: Story = {
  render: () => (
    <ItemGroup className="w-full max-w-sm">
      <Item>
        <ItemMedia>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>John Doe</ItemTitle>
          <ItemDescription>Software Engineer</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};

/**
 * Item with icon media.
 */
export const WithIcon: Story = {
  render: () => (
    <ItemGroup className="w-full max-w-sm">
      <Item>
        <ItemMedia variant="icon">
          <User className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>User Profile</ItemTitle>
          <ItemDescription>Manage your account settings</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};

/**
 * Item with actions.
 */
export const WithActions: Story = {
  render: () => (
    <ItemGroup className="w-full max-w-sm">
      <Item>
        <ItemMedia>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>John Doe</ItemTitle>
          <ItemDescription>Software Engineer</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
};

/**
 * Item with header and footer.
 */
export const WithHeaderFooter: Story = {
  render: () => (
    <ItemGroup className="w-full max-w-sm">
      <Item>
        <ItemHeader>
          <ItemTitle>Project Alpha</ItemTitle>
          <ItemActions>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </ItemActions>
        </ItemHeader>
        <ItemContent>
          <ItemDescription>
            A comprehensive project management system with advanced features.
          </ItemDescription>
        </ItemContent>
        <ItemFooter>
          <span className="text-sm text-muted-foreground">Updated 2 hours ago</span>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </ItemFooter>
      </Item>
    </ItemGroup>
  ),
};

/**
 * Item list with separators.
 */
export const List: Story = {
  render: () => (
    <ItemGroup className="w-full max-w-sm">
      <Item>
        <ItemMedia>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>John Doe</ItemTitle>
          <ItemDescription>Software Engineer</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia>
          <Avatar>
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Jane Smith</ItemTitle>
          <ItemDescription>Product Designer</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia>
          <Avatar>
            <AvatarFallback>BJ</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Bob Johnson</ItemTitle>
          <ItemDescription>Marketing Manager</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};

/**
 * Item with different variants.
 */
export const Variants: Story = {
  render: () => (
    <ItemGroup className="w-full max-w-sm space-y-4">
      <Item variant="default">
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>Transparent background</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>With border</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>With muted background</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};

/**
 * Item with different sizes.
 */
export const Sizes: Story = {
  render: () => (
    <ItemGroup className="w-full max-w-sm space-y-4">
      <Item size="sm">
        <ItemContent>
          <ItemTitle>Small Size</ItemTitle>
          <ItemDescription>Compact item layout</ItemDescription>
        </ItemContent>
      </Item>
      <Item size="default">
        <ItemContent>
          <ItemTitle>Default Size</ItemTitle>
          <ItemDescription>Standard item layout</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};
