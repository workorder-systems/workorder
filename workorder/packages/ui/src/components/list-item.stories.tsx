import type { Meta, StoryObj } from "@storybook/react"
import { ChevronRight, ClipboardList, ShieldAlert, Paperclip } from "lucide-react"

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
        title={
          <span className="flex min-w-0 items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-destructive"
            />
            <span className="truncate">Storing airco – waterlekkage</span>
          </span>
        }
        description="Kamer 204 · Vleugel B"
        meta="Zojuist gemeld · escalatie"
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

export const WorkOrderWithAttachment: Story = {
  name: "Work order – with attachment",
  args: {
    title: "Upload inspectierapport",
  },
  render: () => (
    <div className="max-w-md space-y-2">
      <ListItem
        title={
          <span className="flex min-w-0 items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-muted"
            />
            <span className="truncate">Upload inspectierapport</span>
          </span>
        }
        description="Kamer 204 · HVAC"
        meta="Vandaag · 11:15 · 1 bijlage"
        trailing={
          <div className="flex items-center gap-2 text-muted-foreground">
            <Paperclip
              aria-hidden="true"
              className="h-4 w-4"
            />
            <ChevronRight
              aria-hidden="true"
              className="h-4 w-4"
            />
          </div>
        }
      />
    </div>
  ),
}

export const WorkOrderWithPhotoPreview: Story = {
  name: "Work order – with photo preview",
  args: {
    title: "Airco unit beschadigd",
  },
  render: () => (
    <div className="max-w-md space-y-2">
      <ListItem
        title="Airco unit beschadigd"
        description="Dak · Unit 3A"
        meta="Vandaag · 10:20 · 2 foto's toegevoegd"
        leading={
          <div className="h-full w-full overflow-hidden rounded-sm">
            <img
              src="https://images.pexels.com/photos/3964348/pexels-photo-3964348.jpeg?auto=compress&cs=tinysrgb&w=160"
              alt="Voorbeeldfoto van de storing"
              className="h-full w-full object-cover"
            />
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
            title={
              <span className="flex min-w-0 items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-destructive"
                />
                <span className="truncate">Airco lekt water</span>
              </span>
            }
            description="Kamer 204 · HVAC"
            meta="Zojuist gemeld · gast aanwezig"
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
            title={
              <span className="flex min-w-0 items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-destructive"
                />
                <span className="truncate">Storing koeling</span>
              </span>
            }
            description="Keuken · Koelcel"
            meta="10 min open · productie stil"
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
          title={
            <span className="flex min-w-0 items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-destructive"
              />
              <span className="truncate">
                Storing koeling – temperatuur te hoog
              </span>
            </span>
          }
          description="Productiekeuken · Koelcel 1"
          meta="Nu · 5 min open · productie stil"
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
          title={
            <span className="flex min-w-0 items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-destructive"
              />
              <span className="truncate">
                Lift storing – blijft tussen verdiepingen hangen
              </span>
            </span>
          }
          description="Hoofdingang · Lift A"
          meta="Nu · 15 min open · gasten wachten"
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


