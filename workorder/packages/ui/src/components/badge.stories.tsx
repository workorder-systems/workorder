import type { Meta, StoryObj } from "@storybook/react"

import { Badge } from "./badge.js"

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Variants: Story = {
  name: "Variants",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="subtle">Subtle</Badge>
    </div>
  ),
}

export const StatusTones: Story = {
  name: "Status tones",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="outline" tone="neutral">
        Pending
      </Badge>
      <Badge variant="outline" tone="info">
        Scheduled
      </Badge>
      <Badge variant="outline" tone="success">
        Done
      </Badge>
      <Badge variant="outline" tone="warning">
        At risk
      </Badge>
      <Badge variant="outline" tone="destructive">
        Failed
      </Badge>
    </div>
  ),
}

export const PriorityPatterns: Story = {
  name: "Priority pills",
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline" tone="destructive" size="xs">
          P1
        </Badge>
        <Badge variant="outline" tone="warning" size="xs">
          P2
        </Badge>
        <Badge variant="outline" tone="info" size="xs">
          P3
        </Badge>
        <Badge variant="outline" tone="neutral" size="xs">
          P4
        </Badge>
        <Badge variant="outline" tone="neutral" size="xs" className="opacity-75">
          P5
        </Badge>
      </div>
    </div>
  ),
}


