import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Camera, FileText, RotateCcw, Save, Play } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { StickyActionBar } from "./sticky-action-bar.js"
import { ResponsiveSheet } from "./responsive-sheet.js"

const meta = {
  title: "Components/ResponsiveSheet",
  component: ResponsiveSheet,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "On small screens this renders as a Drawer; on larger screens it renders as a Sheet. Resize the viewport to see it switch between the two.",
      },
    },
  },
} satisfies Meta<typeof ResponsiveSheet>

export default meta

type Story = StoryObj<typeof meta>

function DetailsPanelStory() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="max-w-md space-y-4">
      <Button onClick={() => setOpen(true)}>Open details panel</Button>

      <ResponsiveSheet
        open={open}
        onOpenChange={setOpen}
        title="Werkorder details"
        description="Realistisch overzicht van een storing met een sticky actie-balk onderin."
        footer={
          <StickyActionBar
            primaryAction={{
              label: (
                <span className="inline-flex items-center gap-1">
                  <Play className="size-4" />
                  <span>Start</span>
                </span>
              ),
              onClick: () => {},
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
        }
      >
        <div className="space-y-6 text-sm text-muted-foreground">
          <section className="space-y-1">
            <p className="font-medium text-foreground">
              Airco lekt water – Kamer 204
            </p>
            <p>HVAC · Zojuist gemeld · gast aanwezig</p>
          </section>

          <section className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Omschrijving
            </p>
            <p>
              Gast meldt druppels op de vloer onder de airco-unit. Lekkage lijkt
              toe te nemen wanneer de koeling aanslaat. Controleer condensafvoer,
              filter en behuizing.
            </p>
          </section>

          <section className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Context
            </p>
            <ul className="list-disc space-y-1 pl-4">
              <li>Gast blijft in de kamer wachten op update.</li>
              <li>Receptie is geïnformeerd en verwacht terugkoppeling.</li>
              <li>Voorkom schade aan vloer en meubilair.</li>
            </ul>
          </section>

          <section className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Log
            </p>
            {Array.from({ length: 6 }).map((_, index) => (
              <p key={index}>Logregel {index + 1} – voorbeeldtekst.</p>
            ))}
          </section>
        </div>
      </ResponsiveSheet>
    </div>
  )
}

function FormPanelStory() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="max-w-md space-y-4">
      <Button onClick={() => setOpen(true)}>Open form panel</Button>

      <ResponsiveSheet
        open={open}
        onOpenChange={setOpen}
        title="Werkorder bijwerken"
        description="Typisch formulier met een sticky actie-balk voor acties onderin."
        footer={
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
                    <RotateCcw className="size-4" />
                    <span>Reset</span>
                  </span>
                ),
                onClick: () => {},
                variant: "secondary",
              },
            ]}
          />
        }
      >
        <form className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">Titel</label>
            <Input defaultValue="Airco lekt water – Kamer 204" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Locatie</label>
            <Input defaultValue="Kamer 204 · Vleugel B" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Prioriteit</label>
            <Select defaultValue="high">
              <SelectTrigger>
                <SelectValue placeholder="Kies prioriteit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Laag</SelectItem>
                <SelectItem value="medium">Middel</SelectItem>
                <SelectItem value="high">Hoog</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Omschrijving</label>
            <Textarea
              rows={5}
              defaultValue="Gast meldt lekkage vanuit airco-unit boven bureau. Controleer condensafvoer en filter, en noteer bevindingen."
            />
          </div>
        </form>
      </ResponsiveSheet>
    </div>
  )
}

export const DetailsPanel: Story = {
  name: "Details panel (sticky header + footer actions)",
  args: {
    open: false,
    onOpenChange: () => {},
    children: null,
  },
  render: () => <DetailsPanelStory />,
}

export const FormPanel: Story = {
  name: "Form panel",
  args: {
    open: false,
    onOpenChange: () => {},
    children: null,
  },
  render: () => <FormPanelStory />,
}

