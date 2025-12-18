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
      <Badge variant="soft">Soft</Badge>
    </div>
  ),
}

export const StatusTones: Story = {
  name: "Status tones",
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>Default</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>

      {/* Soft status chips */}
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="soft" tone="neutral">
          Open
        </Badge>
        <Badge variant="soft" tone="info">
          Scheduled
        </Badge>
        <Badge variant="soft" tone="success">
          Completed
        </Badge>
        <Badge variant="soft" tone="warning">
          Overdue
        </Badge>
        <Badge variant="soft" tone="destructive">
          Cancelled
        </Badge>
      </div>

      {/* Outline status chips */}
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline" tone="neutral">
          Open
        </Badge>
        <Badge variant="outline" tone="info">
          Scheduled
        </Badge>
        <Badge variant="outline" tone="success">
          Completed
        </Badge>
        <Badge variant="outline" tone="warning">
          Overdue
        </Badge>
        <Badge variant="outline" tone="destructive">
          Cancelled
        </Badge>
      </div>
    </div>
  ),
}

export const PriorityPatterns: Story = {
  name: "Priority pills",
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="soft" tone="destructive" size="xs">
          P1
        </Badge>
        <Badge variant="soft" tone="warning" size="xs">
          P2
        </Badge>
        <Badge variant="soft" tone="info" size="xs">
          P3
        </Badge>
        <Badge variant="soft" tone="neutral" size="xs">
          P4
        </Badge>
        <Badge variant="soft" tone="neutral" size="xs" className="opacity-75">
          P5
        </Badge>
      </div>
    </div>
  ),
}


