import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from './field';
import { Input } from './input';
import { Checkbox } from './checkbox';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from './label';

const meta = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic field with vertical orientation (default).
 */
export const Default: Story = {
  render: () => (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel>Email</FieldLabel>
        <FieldContent>
          <Input type="email" placeholder="john@example.com" />
          <FieldDescription>
            Enter your email address.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};

/**
 * Field with horizontal orientation.
 */
export const Horizontal: Story = {
  render: () => (
    <FieldGroup className="w-full max-w-sm">
      <Field orientation="horizontal">
        <FieldLabel>Email</FieldLabel>
        <FieldContent>
          <Input type="email" placeholder="john@example.com" />
          <FieldDescription>
            Enter your email address.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};

/**
 * Field with error state.
 */
export const WithError: Story = {
  render: () => (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel>Email</FieldLabel>
        <FieldContent>
          <Input type="email" placeholder="john@example.com" aria-invalid="true" />
          <FieldError>Please enter a valid email address.</FieldError>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};

/**
 * Field set with legend.
 */
export const FieldSetExample: Story = {
  render: () => (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Account Information</FieldLegend>
      <Field>
        <FieldLabel>Username</FieldLabel>
        <FieldContent>
          <Input placeholder="johndoe" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>Email</FieldLabel>
        <FieldContent>
          <Input type="email" placeholder="john@example.com" />
        </FieldContent>
      </Field>
    </FieldSet>
  ),
};

/**
 * Field with checkbox.
 */
export const WithCheckbox: Story = {
  render: () => (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel>
          <Checkbox />
          <span>I agree to the terms and conditions</span>
        </FieldLabel>
        <FieldDescription>
          You must accept the terms to continue.
        </FieldDescription>
      </Field>
    </FieldGroup>
  ),
};

/**
 * Field with radio group.
 */
export const WithRadioGroup: Story = {
  render: () => (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel>Notification Preference</FieldLabel>
        <FieldContent>
          <RadioGroup defaultValue="email">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="email" />
              <Label htmlFor="email">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sms" id="sms" />
              <Label htmlFor="sms">SMS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="none" />
              <Label htmlFor="none">None</Label>
            </div>
          </RadioGroup>
          <FieldDescription>
            Choose how you want to receive notifications.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};

/**
 * Responsive field orientation.
 */
export const Responsive: Story = {
  render: () => (
    <FieldGroup className="w-full max-w-sm">
      <Field orientation="responsive">
        <FieldLabel>Email</FieldLabel>
        <FieldContent>
          <Input type="email" placeholder="john@example.com" />
          <FieldDescription>
            This field stacks vertically on mobile and horizontally on desktop.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};
