import type { Meta, StoryObj } from "@storybook/react"
import { AlertCircle, CheckCircle2, Info, Minus, TriangleAlert } from "lucide-react"

import { StatusBadge } from "./status-badge.js"

const meta = {
  title: "Components/StatusBadge",
  component: StatusBadge,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof StatusBadge>

export default meta

type Story = StoryObj<typeof meta>

export const TonesMd: Story = {
  name: "Tones – md",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <StatusBadge tone="neutral">Neutral</StatusBadge>
      <StatusBadge tone="info">Info</StatusBadge>
      <StatusBadge tone="success">Success</StatusBadge>
      <StatusBadge tone="warning">Warning</StatusBadge>
      <StatusBadge tone="destructive">Destructive</StatusBadge>
    </div>
  ),
}

export const TonesSm: Story = {
  name: "Tones – sm",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <StatusBadge tone="neutral" size="sm">
        Neutral
      </StatusBadge>
      <StatusBadge tone="info" size="sm">
        Info
      </StatusBadge>
      <StatusBadge tone="success" size="sm">
        Success
      </StatusBadge>
      <StatusBadge tone="warning" size="sm">
        Warning
      </StatusBadge>
      <StatusBadge tone="destructive" size="sm">
        Destructive
      </StatusBadge>
    </div>
  ),
}

export const WithIcons: Story = {
  name: "With icons",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <StatusBadge tone="neutral" icon={Minus}>
        Pending
      </StatusBadge>
      <StatusBadge tone="info" icon={Info}>
        Info
      </StatusBadge>
      <StatusBadge tone="success" icon={CheckCircle2}>
        Active
      </StatusBadge>
      <StatusBadge tone="warning" icon={TriangleAlert}>
        At risk
      </StatusBadge>
      <StatusBadge tone="destructive" icon={AlertCircle}>
        Failed
      </StatusBadge>
    </div>
  ),
}


