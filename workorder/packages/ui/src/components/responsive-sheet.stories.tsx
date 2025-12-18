import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"

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
        description="Scroll door de inhoud om te zien dat de header en footer op hun plaats blijven."
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Sluiten
            </Button>
            <Button onClick={() => setOpen(false)}>Actie uitvoeren</Button>
          </div>
        }
      >
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <p className="font-medium text-foreground">
              Airco lekt water – Kamer 204
            </p>
            <p>HVAC · Zojuist gemeld · gast aanwezig</p>
          </div>

          <div className="space-y-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <p key={index}>
                Dit is regel {index + 1} van een langere beschrijving. Scroll
                naar beneden om te zien dat de kop en acties onderin
                vastblijven staan terwijl alleen de inhoud scrolt.
              </p>
            ))}
          </div>
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
        description="Gebruik dit paneel voor formulieren met een sticky footer voor acties."
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Annuleren
            </Button>
            <Button onClick={() => setOpen(false)}>Opslaan</Button>
          </div>
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

