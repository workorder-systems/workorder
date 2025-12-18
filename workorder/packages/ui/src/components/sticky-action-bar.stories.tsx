import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Camera, CheckCircle2, FileText, Play, Save, UserCheck } from "lucide-react"

import { StickyActionBar } from "./sticky-action-bar.js"

const meta = {
  title: "Components/StickyActionBar",
  component: StickyActionBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A sticky, bottom-aligned action bar for mobile-first layouts. Use it to surface primary and secondary actions without mixing in close/navigation controls.",
      },
    },
  },
} satisfies Meta<typeof StickyActionBar>

export default meta

type Story = StoryObj<typeof meta>

function TechnicanWorkOrderActions() {
  return (
    <div className="flex h-[480px] flex-col bg-background">
      <div className="flex-1 space-y-2 overflow-auto p-4">
        <div>
          <p className="text-sm font-medium">Airco lekt water – Kamer 204</p>
          <p className="text-sm text-muted-foreground">
            HVAC · Zojuist gemeld · gast aanwezig
          </p>
        </div>

        <div className="space-y-1 text-sm text-muted-foreground">
          {Array.from({ length: 14 }).map((_, index) => (
            <p key={index}>
              Detailregel {index + 1}. Scroll om te zien dat de actie-balk
              onderin op zijn plaats blijft staan.
            </p>
          ))}
        </div>
      </div>

      <StickyActionBar
        primaryAction={{
          label: (
            <span className="inline-flex items-center gap-1">
              <Play className="size-4" />
              <span>Start</span>
            </span>
          ),
          onClick: () => {
            // noop for storybook
          },
        }}
        secondaryActions={[
          {
            label: (
              <span className="inline-flex items-center gap-1">
                <Camera className="size-4" />
                <span>Foto</span>
              </span>
            ),
            onClick: () => {},
            variant: "secondary",
          },
          {
            label: (
              <span className="inline-flex items-center gap-1">
                <FileText className="size-4" />
                <span>Note</span>
              </span>
            ),
            onClick: () => {},
          },
        ]}
      />
    </div>
  )
}

function ManagerWorkOrderActions() {
  return (
    <div className="flex h-[480px] flex-col bg-background">
      <div className="flex-1 space-y-2 overflow-auto p-4">
        <div>
          <p className="text-sm font-medium">Prioriteit bepalen – Lift storing</p>
          <p className="text-sm text-muted-foreground">
            Hoofdingang · Lift A · 15 min open
          </p>
        </div>

        <div className="space-y-1 text-sm text-muted-foreground">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index}>
              Manager-context regel {index + 1}. Scroll om te zien dat de
              actie-balk zichtbaar blijft.
            </p>
          ))}
        </div>
      </div>

      <StickyActionBar
        primaryAction={{
          label: (
            <span className="inline-flex items-center gap-1">
              <Save className="size-4" />
              <span>Opslaan</span>
            </span>
          ),
          onClick: () => {},
        }}
        secondaryActions={[
          {
            label: (
              <span className="inline-flex items-center gap-1">
                <UserCheck className="size-4" />
                <span>Toewijs</span>
              </span>
            ),
            onClick: () => {},
            variant: "secondary",
          },
          {
            label: (
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="size-4" />
                <span>Afgerond</span>
              </span>
            ),
            onClick: () => {},
            variant: "destructive",
          },
        ]}
      />
    </div>
  )
}

export const TechnicianActions: Story = {
  name: "Technician – work order actions",
  render: () => <TechnicanWorkOrderActions />,
}

export const ManagerActions: Story = {
  name: "Manager – work order actions",
  render: () => <ManagerWorkOrderActions />,
}


