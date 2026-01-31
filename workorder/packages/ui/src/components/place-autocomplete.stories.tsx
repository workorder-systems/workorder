import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { PlaceAutocomplete } from './place-autocomplete';

const meta = {
  title: 'Components/Place Autocomplete',
  component: PlaceAutocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PlaceAutocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic place autocomplete with search functionality.
 * Uses Photon geocoding API for place suggestions.
 */
export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState('');

    return (
      <div className="w-full max-w-sm">
        <PlaceAutocomplete
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSelect={(place) => {
            console.log('Selected place:', place);
            setValue(place.properties.name || '');
          }}
          placeholder="Search for a place..."
        />
      </div>
    );
  },
};

/**
 * Place autocomplete with custom debounce delay.
 */
export const CustomDebounce: Story = {
  render: () => {
    const [value, setValue] = React.useState('');

    return (
      <div className="w-full max-w-sm">
        <PlaceAutocomplete
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSelect={(place) => {
            console.log('Selected place:', place);
            setValue(place.properties.name || '');
          }}
          debounceMs={500}
          placeholder="Search with 500ms debounce..."
        />
      </div>
    );
  },
};

/**
 * Place autocomplete with location bias.
 */
export const WithLocationBias: Story = {
  render: () => {
    const [value, setValue] = React.useState('');

    return (
      <div className="w-full max-w-sm">
        <PlaceAutocomplete
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSelect={(place) => {
            console.log('Selected place:', place);
            setValue(place.properties.name || '');
          }}
          lat={40.7128}
          lon={-74.0060}
          zoom={10}
          placeholder="Search near New York..."
        />
      </div>
    );
  },
};

/**
 * Place autocomplete with result limit.
 */
export const WithLimit: Story = {
  render: () => {
    const [value, setValue] = React.useState('');

    return (
      <div className="w-full max-w-sm">
        <PlaceAutocomplete
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSelect={(place) => {
            console.log('Selected place:', place);
            setValue(place.properties.name || '');
          }}
          limit={5}
          placeholder="Show max 5 results..."
        />
      </div>
    );
  },
};
