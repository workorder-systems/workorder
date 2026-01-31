import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { TourProvider, useTour, type Tour } from './tour';
import { Button } from './button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';

const meta = {
  title: 'Components/Tour',
  component: TourProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TourProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Example tour data
const exampleTour: Tour = {
  id: 'example-tour',
  steps: [
    {
      id: 'step-1',
      title: 'Welcome!',
      content: 'This is the first step of the tour. Click Next to continue.',
    },
    {
      id: 'step-2',
      title: 'Feature 1',
      content: 'This is the second step. You can navigate between steps.',
    },
    {
      id: 'step-3',
      title: 'Feature 2',
      content: 'This is the final step. Click Finish to complete the tour.',
    },
  ],
};

function TourDemo() {
  const { start } = useTour();

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => start('example-tour')}>Start Tour</Button>
      <div className="flex flex-col gap-4">
        <Card data-tour-step-id="step-1">
          <CardHeader>
            <CardTitle>Feature 1</CardTitle>
            <CardDescription>This is the first feature</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Some content here</p>
          </CardContent>
        </Card>
        <Card data-tour-step-id="step-2">
          <CardHeader>
            <CardTitle>Feature 2</CardTitle>
            <CardDescription>This is the second feature</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Some content here</p>
          </CardContent>
        </Card>
        <Card data-tour-step-id="step-3">
          <CardHeader>
            <CardTitle>Feature 3</CardTitle>
            <CardDescription>This is the third feature</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Some content here</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/**
 * Basic tour with default anchor tag links (works in any React app).
 */
export const Default: Story = {
  render: () => (
    <TourProvider tours={[exampleTour]}>
      <TourDemo />
    </TourProvider>
  ),
};

/**
 * Tour with Next.js Link component.
 * 
 * To use with Next.js, pass the Link component from 'next/link':
 * 
 * ```tsx
 * import Link from 'next/link'
 * 
 * <TourProvider tours={[exampleTour]} LinkComponent={Link}>
 *   <TourDemo />
 * </TourProvider>
 * ```
 */
export const WithNextLink: Story = {
  render: () => {
    // Simulate Next.js Link component for Storybook
    const NextLink = ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => {
      return (
        <a href={href} className={className} onClick={(e) => {
          e.preventDefault();
          console.log('Navigating to:', href);
        }}>
          {children}
        </a>
      );
    };

    const tourWithRoutes: Tour = {
      id: 'tour-with-routes',
      steps: [
        {
          id: 'step-1',
          title: 'Welcome!',
          content: 'This step has a route. Click Next to navigate.',
          nextRoute: '/step-2',
        },
        {
          id: 'step-2',
          title: 'Step 2',
          content: 'You can navigate back and forth.',
          previousRoute: '/step-1',
          nextRoute: '/step-3',
        },
        {
          id: 'step-3',
          title: 'Final Step',
          content: 'This is the final step.',
          previousRoute: '/step-2',
        },
      ],
    };

    return (
      <TourProvider tours={[tourWithRoutes]} LinkComponent={NextLink}>
        <TourDemo />
      </TourProvider>
    );
  },
};

/**
 * Tour with React Router Link component.
 * 
 * To use with React Router, pass the Link component from 'react-router-dom':
 * 
 * ```tsx
 * import { Link } from 'react-router-dom'
 * 
 * <TourProvider tours={[exampleTour]} LinkComponent={Link}>
 *   <TourDemo />
 * </TourProvider>
 * ```
 */
export const WithReactRouterLink: Story = {
  render: () => {
    // Simulate React Router Link component for Storybook
    const RouterLink = ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => {
      return (
        <a href={href} className={className} onClick={(e) => {
          e.preventDefault();
          console.log('React Router navigating to:', href);
        }}>
          {children}
        </a>
      );
    };

    return (
      <TourProvider tours={[exampleTour]} LinkComponent={RouterLink}>
        <TourDemo />
      </TourProvider>
    );
  },
};
