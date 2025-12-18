import type { Meta, StoryObj } from "@storybook/react"
import { ChevronRight, ClipboardList, ShieldAlert } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  ItemGroup,
  ItemSeparator,
} from "@workspace/ui/components/item"
import { ListItem } from "./list-item.js"

const meta = {
  title: "Components/ListItem",
  component: ListItem,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ListItem>

export default meta

type Story = StoryObj<typeof meta>

export const WorkOrderUrgent: Story = {
  name: "Work order – urgent",
  args: {
    title: "Storing airco – waterlekkage",
  },
  render: () => (
    <div className="max-w-md space-y-2">
      <ListItem
        title="Storing airco – waterlekkage"
        description="Kamer 204 · Vleugel B"
        meta="Zojuist gemeld · escalatie"
        leading={
          <span
            aria-hidden="true"
            className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-destructive"
          />
        }
        trailing={
          <ChevronRight
            aria-hidden="true"
            className="h-4 w-4 text-muted-foreground"
          />
        }
      />
    </div>
  ),
}

export const InspectionTask: Story = {
  name: "Inspection task",
  args: {
    title: "Brandblusser controle ronde",
  },
  render: () => (
    <div className="max-w-md space-y-2">
      <ListItem
        title="Brandblusser controle ronde"
        description="Keuken · vluchtroute en nooduitgangen"
        meta="Vandaag · 14:00"
        leading={
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <ShieldAlert className="h-4 w-4" aria-hidden="true" />
          </div>
        }
        trailing={
          <ChevronRight
            aria-hidden="true"
            className="h-4 w-4 text-muted-foreground"
          />
        }
      />
    </div>
  ),
}

export const Notification: Story = {
  name: "Notification",
  args: {
    title: "Planner heeft je toegewezen",
  },
  render: () => (
    <div className="max-w-md space-y-2">
      <ListItem
        title="Planner heeft je toegewezen"
        description="Nieuw werkorder: Airco storing – Kamer 310"
        meta="5 min geleden"
        leading={
          <Avatar className="h-8 w-8">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        }
        trailing={
          <ChevronRight
            aria-hidden="true"
            className="h-4 w-4 text-muted-foreground"
          />
        }
      />
    </div>
  ),
}

export const TechnicianStartOfShift: Story = {
  name: "Technician home – start of shift",
  args: {
    title: "Dummy",
  },
  render: () => (
    <div className="max-w-md space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Nu aandacht nodig
        </p>
        <ItemGroup className="rounded-md border bg-background">
          <ListItem
            size="sm"
            title="Airco lekt water"
            description="Kamer 204 · HVAC"
            meta="Zojuist gemeld · gast aanwezig"
            leading={
              <span
                aria-hidden="true"
                className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-destructive"
              />
            }
            trailing={
              <ChevronRight
                aria-hidden="true"
                className="h-4 w-4 text-muted-foreground"
              />
            }
          />
          <ItemSeparator />
          <ListItem
            size="sm"
            title="Storing koeling"
            description="Keuken · Koelcel"
            meta="10 min open · productie stil"
            leading={
              <span
                aria-hidden="true"
                className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-destructive"
              />
            }
            trailing={
              <ChevronRight
                aria-hidden="true"
                className="h-4 w-4 text-muted-foreground"
              />
            }
          />
        </ItemGroup>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Vandaag gepland
        </p>
        <ItemGroup className="rounded-md border bg-background">
          <ListItem
            size="sm"
            title="Brandblusser controle"
            description="Gang 3e verdieping · Safety"
            meta="Vandaag · 14:00"
            leading={
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <ClipboardList className="h-4 w-4" aria-hidden="true" />
              </div>
            }
            trailing={
              <ChevronRight
                aria-hidden="true"
                className="h-4 w-4 text-muted-foreground"
              />
            }
          />
          <ItemSeparator />
          <ListItem
            size="sm"
            title="Filter vervangen luchtbehandeling"
            description="Technische ruimte · PM"
            meta="Vandaag · 16:30"
            leading={
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <ClipboardList className="h-4 w-4" aria-hidden="true" />
              </div>
            }
            trailing={
              <ChevronRight
                aria-hidden="true"
                className="h-4 w-4 text-muted-foreground"
              />
            }
          />
        </ItemGroup>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Binnengekomen
        </p>
        <ItemGroup className="rounded-md border bg-background">
          <ListItem
            size="sm"
            title="Nieuw werkorder toegewezen"
            description="Airco storing · Kamer 310"
            meta="5 min geleden · planner heeft je toegewezen"
            leading={
              <Avatar className="h-8 w-8">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            }
            trailing={
              <ChevronRight
                aria-hidden="true"
                className="h-4 w-4 text-muted-foreground"
              />
            }
          />
          <ItemSeparator />
          <ListItem
            size="sm"
            title="Systeemmelding – gepland onderhoud"
            description="Herinnering: PM ronde luchtbehandeling vandaag"
            meta="1 uur geleden"
            leading={
              <Avatar className="h-8 w-8">
                <AvatarFallback>PM</AvatarFallback>
              </Avatar>
            }
            trailing={
              <ChevronRight
                aria-hidden="true"
                className="h-4 w-4 text-muted-foreground"
              />
            }
          />
        </ItemGroup>
      </div>
    </div>
  ),
}

export const QueueSortedByUrgency: Story = {
  name: "Queue – sorted by urgency",
  args: {
    title: "Dummy",
  },
  render: () => (
    <div className="max-w-md space-y-2">
      <ItemGroup className="rounded-md border bg-background">
        <ListItem
          size="sm"
          title="Storing koeling – temperatuur te hoog"
          description="Productiekeuken · Koelcel 1"
          meta="Nu · 5 min open · productie stil"
          leading={
            <span
              aria-hidden="true"
              className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-destructive"
            />
          }
          trailing={
            <ChevronRight
              aria-hidden="true"
              className="h-4 w-4 text-muted-foreground"
            />
          }
        />
        <ItemSeparator />
        <ListItem
          size="sm"
          title="Lift storing – blijft tussen verdiepingen hangen"
          description="Hoofdingang · Lift A"
          meta="Nu · 15 min open · gasten wachten"
          leading={
            <span
              aria-hidden="true"
              className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-destructive"
            />
          }
          trailing={
            <ChevronRight
              aria-hidden="true"
              className="h-4 w-4 text-muted-foreground"
            />
          }
        />
        <ItemSeparator />
        <ListItem
          size="sm"
          title="Brandblusser controle verdieping 2"
          description="Gang noordzijde · Safety"
          meta="Vandaag · 13:30"
          leading={
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <ClipboardList className="h-4 w-4" aria-hidden="true" />
            </div>
          }
          trailing={
            <ChevronRight
              aria-hidden="true"
              className="h-4 w-4 text-muted-foreground"
            />
          }
        />
        <ItemSeparator />
        <ListItem
          size="sm"
          title="Filter vervangen luchtbehandeling"
          description="Technische ruimte dak · PM"
          meta="Vandaag · einde dienst"
          leading={
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <ShieldAlert className="h-4 w-4" aria-hidden="true" />
            </div>
          }
          trailing={
            <ChevronRight
              aria-hidden="true"
              className="h-4 w-4 text-muted-foreground"
            />
          }
        />
        <ItemSeparator />
        <ListItem
          size="sm"
          title="Visuele controle buitenverlichting"
          description="Parkeerterrein en toegangsweg"
          meta="Vandaag · wanneer tijd"
          leading={
            <span
              aria-hidden="true"
              className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-muted"
            />
          }
          trailing={
            <ChevronRight
              aria-hidden="true"
              className="h-4 w-4 text-muted-foreground"
            />
          }
        />
      </ItemGroup>
    </div>
  ),
}


