import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from './combobox';
import { CheckIcon } from 'lucide-react';

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'next', label: 'Next.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];

/**
 * Basic combobox with search functionality.
 */
export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | null>(null);

    return (
      <Combobox value={value} onValueChange={setValue}>
        <ComboboxInput placeholder="Select framework..." />
        <ComboboxContent>
          <ComboboxList>
            {frameworks.map((framework) => (
              <ComboboxItem key={framework.value} value={framework.value}>
                <CheckIcon />
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );
  },
};

/**
 * Combobox with clear button.
 */
export const WithClear: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | null>('react');

    return (
      <Combobox value={value} onValueChange={setValue}>
        <ComboboxInput placeholder="Select framework..." showClear />
        <ComboboxContent>
          <ComboboxList>
            {frameworks.map((framework) => (
              <ComboboxItem key={framework.value} value={framework.value}>
                <CheckIcon />
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );
  },
};

/**
 * Combobox with custom trigger button.
 */
export const WithCustomTrigger: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | null>(null);

    return (
      <Combobox value={value} onValueChange={setValue}>
        <ComboboxValue placeholder="Select framework..." />
        <ComboboxContent>
          <ComboboxList>
            {frameworks.map((framework) => (
              <ComboboxItem key={framework.value} value={framework.value}>
                <CheckIcon />
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );
  },
};

/**
 * Combobox with disabled state.
 */
export const Disabled: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | null>(null);

    return (
      <Combobox value={value} onValueChange={setValue} disabled>
        <ComboboxInput placeholder="Select framework..." />
        <ComboboxContent>
          <ComboboxList>
            {frameworks.map((framework) => (
              <ComboboxItem key={framework.value} value={framework.value}>
                <CheckIcon />
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );
  },
};
