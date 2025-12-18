import type { Meta, StoryObj } from "@storybook/react"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

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

export const Single: Story = {
  name: "Single metric",
  args: {
    label: "Open work orders",
    value: "128",
    trend: {
      value: "+18 today",
      direction: "up",
      icon: ArrowUpRight,
      srLabel: "18 more work orders opened today",
    },
    helper: {
      title: "Peak around morning shift",
      description: "Most new work reported between 07:00 and 10:00",
      icon: ArrowUpRight,
    },
  },
}

export const Grid: Story = {
  name: "Grid examples",
  render: (args) => (
    <div className="grid w-full grid-cols-1 gap-4 px-4 lg:px-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        {...args}
        label="Open work orders"
        value="128"
        trend={{
          value: "+18 today",
          direction: "up",
          icon: ArrowUpRight,
          srLabel: "18 more work orders opened today",
        }}
        helper={{
          title: "Most on line A and packaging",
          description: "Plan assignments to avoid bottlenecks",
          icon: ArrowUpRight,
        }}
        className="bg-gradient-to-t from-primary/5 to-card shadow-xs"
      />

      <StatCard
        {...args}
        label="Overdue PMs"
        value="23"
        trend={{
          value: "+5 this week",
          direction: "up",
          icon: ArrowUpRight,
          srLabel: "5 more preventive maintenance jobs are overdue this week",
        }}
        helper={{
          title: "Catch up before next shutdown",
          description: "Focus on safety‑critical PMs first",
          icon: ArrowUpRight,
        }}
        className="bg-gradient-to-t from-destructive/5 to-card shadow-xs"
      />

      <StatCard
        {...args}
        label="Asset uptime (last 30 days)"
        value="98.4%"
        trend={{
          value: "+1.2pp",
          direction: "up",
          icon: ArrowUpRight,
          srLabel: "Uptime improved by 1.2 percentage points",
        }}
        helper={{
          title: "Above target",
          description: "Critical assets stayed online during production peaks",
          icon: ArrowUpRight,
        }}
        className="bg-gradient-to-t from-primary/5 to-card shadow-xs"
      />

      <StatCard
        {...args}
        label="Average response time"
        value="32 min"
        trend={{
          value: "-6 min",
          direction: "down",
          icon: ArrowDownRight,
          srLabel: "Average response time decreased by 6 minutes",
        }}
        helper={{
          title: "Faster reactions to breakdowns",
          description: "Teams acknowledge and start work orders more quickly",
          icon: ArrowDownRight,
        }}
        className="bg-gradient-to-t from-primary/5 to-card shadow-xs"
      />
    </div>
  ),
}


