import type { Meta, StoryObj } from '@storybook/react';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from './item';
import { Button } from './button';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { MoreHorizontal, User } from 'lucide-react';

const meta = {
  title: 'Patterns/ListItem',
  component: Item,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The Item component provides a structured way to display list items with media,
 * content, and actions. It's useful for building lists, menus, and navigation.
 */
export const Default: Story = {
  render: () => (
    <ItemGroup className="w-[350px]">
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

export const WithIcon: Story = {
  render: () => (
    <ItemGroup className="w-[350px]">
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

export const WithActions: Story = {
  render: () => (
    <ItemGroup className="w-[350px]">
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

export const List: Story = {
  render: () => (
    <ItemGroup className="w-[350px]">
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

export const Variants: Story = {
  render: () => (
    <ItemGroup className="w-[350px] space-y-4">
      <Item variant="default">
        <ItemContent>
          <ItemTitle>Default</ItemTitle>
          <ItemDescription>Transparent background</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Outline</ItemTitle>
          <ItemDescription>With border</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Muted</ItemTitle>
          <ItemDescription>With muted background</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};
