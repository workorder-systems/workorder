import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from './input-group';
import { Button } from './button';
import { Search, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const meta = {
  title: 'Components/Input Group',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Input group with prefix icon.
 */
export const WithPrefix: Story = {
  render: () => (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon align="inline-start">
        <InputGroupText>
          <Mail className="h-4 w-4" />
        </InputGroupText>
      </InputGroupAddon>
      <InputGroupInput type="email" placeholder="Email" />
    </InputGroup>
  ),
};

/**
 * Input group with suffix button.
 */
export const WithSuffix: Story = {
  render: () => (
    <InputGroup className="w-full max-w-sm">
      <InputGroupInput type="search" placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>
          <Search className="h-4 w-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

/**
 * Input group with both prefix and suffix.
 */
export const WithPrefixAndSuffix: Story = {
  render: () => (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon align="inline-start">
        <InputGroupText>
          <Lock className="h-4 w-4" />
        </InputGroupText>
      </InputGroupAddon>
      <InputGroupInput type="password" placeholder="Password" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>
          <Eye className="h-4 w-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

/**
 * Input group with text prefix.
 */
export const WithTextPrefix: Story = {
  render: () => (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon align="inline-start">
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
};

/**
 * Input group with textarea.
 */
export const WithTextarea: Story = {
  render: () => (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon align="block-start">
        <InputGroupText>Message</InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea placeholder="Enter your message..." rows={4} />
    </InputGroup>
  ),
};

/**
 * Input group with multiple buttons.
 */
export const WithMultipleButtons: Story = {
  render: () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <InputGroup className="w-full max-w-sm">
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <Lock className="h-4 w-4" />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    );
  },
};

/**
 * Input group with error state.
 */
export const WithError: Story = {
  render: () => (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon align="inline-start">
        <InputGroupText>
          <Mail className="h-4 w-4" />
        </InputGroupText>
      </InputGroupAddon>
      <InputGroupInput
        type="email"
        placeholder="Email"
        aria-invalid="true"
        defaultValue="invalid-email"
      />
    </InputGroup>
  ),
};
