import type { Meta, StoryObj } from "@storybook/react"
import { ClipboardList, Plug2, Wrench, WrenchIcon } from "lucide-react"

import { EmptyState } from "./empty-state.js"

const meta = {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof EmptyState>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  name: "Work orders – empty",
  args: {
    icon: ClipboardList,
    title: "No work orders yet",
    description:
      "Create your first work order to start tracking maintenance work in one place.",
  },
}

export const WithIconAndPrimary: Story = {
  name: "Assets – empty",
  args: {
    icon: Wrench,
    title: "No assets added",
    description:
      "Add a few critical assets or import a list from your existing system.",
    primaryAction: {
      label: "Add asset",
    },
  },
}

export const WithActionsAndContent: Story = {
  name: "Integrations – empty",
  render: (args) => (
    <EmptyState
      {...args}
      icon={Plug2}
      title="No integrations connected"
      description="Connect external systems to keep work orders, assets, and inventory in sync."
      primaryAction={{ label: "Connect integration" }}
      secondaryAction={{ label: "View integration guide" }}
    >
      <p className="text-xs text-muted-foreground">
        Typical integrations include ERP, BMS, and IoT platforms. Connecting them reduces manual data entry
        and keeps your CMMS as a single source of truth.
      </p>
    </EmptyState>
  ),
}


