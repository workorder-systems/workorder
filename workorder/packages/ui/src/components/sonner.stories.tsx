import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Toaster } from './sonner';
import { toast } from 'sonner';
import { Button } from './button';

const meta = {
  title: 'Components/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Sonner toast notifications with different types.
 * The Toaster component must be rendered once in your app root.
 */
export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster />
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })}
        >
          Show Toast
        </Button>
        <Button
          onClick={() => toast.success('Success!', {
            description: 'Your changes have been saved.',
          })}
        >
          Success Toast
        </Button>
        <Button
          onClick={() => toast.error('Error!', {
            description: 'Something went wrong. Please try again.',
          })}
        >
          Error Toast
        </Button>
        <Button
          onClick={() => toast.warning('Warning!', {
            description: 'This action cannot be undone.',
          })}
        >
          Warning Toast
        </Button>
        <Button
          onClick={() => toast.info('Info', {
            description: 'Here is some information for you.',
          })}
        >
          Info Toast
        </Button>
        <Button
          onClick={() => {
            const toastId = toast.loading('Loading...');
            setTimeout(() => {
              toast.success('Loaded!', { id: toastId });
            }, 2000);
          }}
        >
          Loading Toast
        </Button>
      </div>
    </div>
  ),
};

/**
 * Toast with action button.
 */
export const WithAction: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster />
      <Button
        onClick={() => toast('Event has been created', {
          description: 'Monday, January 3rd at 6:00pm',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })}
      >
        Toast with Action
      </Button>
    </div>
  ),
};

/**
 * Toast with custom duration.
 */
export const CustomDuration: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster />
      <Button
        onClick={() => toast('This toast will stay for 10 seconds', {
          duration: 10000,
        })}
      >
        Long Duration Toast
      </Button>
    </div>
  ),
};
