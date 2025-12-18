import type { Meta, StoryObj } from "@storybook/react"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { StatCard } from "./stat-card.js"

const meta = {
  title: "Components/StatCard",
  component: StatCard,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof StatCard>

export default meta

type Story = StoryObj<typeof meta>

// Canonical, minimal stat tile: label + value (+ optional meta)
export const Base: Story = {
  name: "Base",
  args: {
    label: "Open work orders",
    subtitle: "Across all assets",
    value: "128",
    meta: "vs yesterday",
  },
}

// Same shell, adds a trend badge (numeric change only)
export const WithTrend: Story = {
  name: "With trend",
  args: {
    label: "Open work orders",
    subtitle: "Across all assets",
    value: "128",
    meta: "vs yesterday",
    trend: {
      value: "+18", // numeric only
      direction: "up",
      icon: ArrowUpRight,
      srLabel: "18 more work orders opened today",
    },
  },
}

// Same shell, shows headerAction (button) and trailing (chart area)
export const WithButtonAndChart: Story = {
  name: "With button and chart",
  render: (args) => (
    <div className="grid w-full grid-cols-1 gap-4 px-4 lg:px-6 sm:grid-cols-2">
      <StatCard
        {...args}
        label="Productive Time"
        subtitle="/ Day"
        value="12.4 hr"
        meta="Compared to last week"
        trend={{
          value: "+23",
          direction: "up",
          icon: ArrowUpRight,
          srLabel: "23% increase compared to last week",
        }}
        headerAction={
          <Button variant="outline" size="icon-sm">
            <ArrowUpRight className="size-4" />
          </Button>
        }
        trailing={
          <div className="h-full w-full rounded-xl bg-gradient-to-tr from-primary/10 to-primary/40" />
        }
      />

      <StatCard
        {...args}
        label="Overdue PMs"
        subtitle="Past due date"
        value="23"
        meta="Focus on safety‑critical assets"
        trend={{
          value: "+5",
          direction: "up",
          icon: ArrowUpRight,
          srLabel: "5 more preventive maintenance jobs are overdue this week",
        }}
        headerAction={
          <Button variant="outline" size="icon-sm">
            <ArrowUpRight className="size-4" />
          </Button>
        }
        trailing={
          <div className="h-full w-full rounded-xl bg-gradient-to-tr from-primary/10 to-primary/40" />
        }
      />
    </div>
  ),
}

// Shows a logo/leading icon while keeping the same layout
export const WithLogo: Story = {
  name: "With logo",
  args: {
    label: "Mail server",
    subtitle: "Email notifications",
    value: "99.9%",
    meta: "Uptime last 30 days",
    leading: (
      <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
        MS
      </div>
    ),
  },
}

// Shows footer content (left/right) for secondary info and actions
export const WithFooter: Story = {
  name: "With footer",
  render: (args) => (
    <div className="grid w-full grid-cols-1 gap-4 px-4 lg:px-6 sm:grid-cols-2">
      <StatCard
        {...args}
        label="Average response time"
        subtitle="Breakdown work orders"
        value="32 min"
        meta="vs last week"
        trend={{
          value: "-6",
          direction: "up",
          icon: ArrowUpRight,
          srLabel: "Average response time decreased by 6 minutes",
        }}
        footerLeft={
          <span className="text-xs text-muted-foreground">
            Teams start work faster after new work orders arrive.
          </span>
        }
        footerRight={
          <Button variant="outline" size="icon-sm">
            <ArrowRight className="size-4" />
          </Button>
        }
      />

      <StatCard
        {...args}
        label="Overdue PMs"
        subtitle="Past due date"
        value="23"
        meta="Scheduled for next shift"
        footerLeft={
          <span className="text-xs text-muted-foreground">
            Group PMs into a route to catch up during low load.
          </span>
        }
        footerRight={
          <Button variant="outline" size="icon-sm">
            <ArrowRight className="size-4" />
          </Button>
        }
      />
    </div>
  ),
}


