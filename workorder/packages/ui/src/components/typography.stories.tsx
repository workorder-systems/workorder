import type { Meta, StoryObj } from "@storybook/react"

import {
  Typography,
  TypographyBlockquote,
  TypographyInlineCode,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP,
  TypographySmall,
  TypographyTable,
  TypographyTableCell,
  TypographyTableHeaderCell,
  TypographyTableHeaderRow,
  TypographyTableRow,
} from "./typography.js"

const meta = {
  title: "Foundations/Typography",
  component: Typography.H1,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Typography.H1>

export default meta

type Story = StoryObj<typeof meta>

export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div className="space-y-8 max-w-3xl">
      <section className="space-y-4">
        <Typography.H1>WorkOrder CMMS</Typography.H1>
        <TypographyLead>
          The core typography primitives used across the WorkOrder CMMS dashboard
          for work orders, assets, and maintenance planning.
        </TypographyLead>
      </section>

      <section className="space-y-2">
        <Typography.H2>Work orders overview</Typography.H2>
        <Typography.H3>Today&apos;s operational focus</Typography.H3>
        <Typography.H4>High‑impact items</Typography.H4>
      </section>

      <section className="space-y-4">
        <TypographyP>
          Your CMMS brings together all work orders, assets, and maintenance
          schedules in a single place. Supervisors get a clear overview of what
          needs to happen today, this week, and this month.
        </TypographyP>
        <TypographyP>
          Technicians see a focused list of assigned work, including clear
          priorities, estimated durations, and all required parts and
          instructions. No more chasing information in email, spreadsheets, or
          WhatsApp.
        </TypographyP>
        <TypographyBlockquote>
          &quot;If everything is urgent, nothing is. A good CMMS makes the real
          priorities obvious.&quot;
        </TypographyBlockquote>
      </section>

      <section className="space-y-2">
        <Typography.H3>Typical priority levels</Typography.H3>
        <TypographyList>
          <li>Priority 1 – Safety / production critical (immediate attention)</li>
          <li>Priority 2 – High impact, but can wait until today</li>
          <li>Priority 3 – Planned work, group by route or shutdown</li>
        </TypographyList>
      </section>

      <section className="space-y-2">
        <Typography.H3>Open work orders</Typography.H3>
        <TypographyTable>
          <thead>
            <TypographyTableHeaderRow>
              <TypographyTableHeaderCell>
                Work order
              </TypographyTableHeaderCell>
              <TypographyTableHeaderCell>
                Status
              </TypographyTableHeaderCell>
              <TypographyTableHeaderCell>Priority</TypographyTableHeaderCell>
              <TypographyTableHeaderCell>Asset</TypographyTableHeaderCell>
            </TypographyTableHeaderRow>
          </thead>
          <tbody>
            <TypographyTableRow>
              <TypographyTableCell>WO‑1042</TypographyTableCell>
              <TypographyTableCell>In progress</TypographyTableCell>
              <TypographyTableCell>P1</TypographyTableCell>
              <TypographyTableCell>Compressor line A</TypographyTableCell>
            </TypographyTableRow>
            <TypographyTableRow>
              <TypographyTableCell>WO‑1039</TypographyTableCell>
              <TypographyTableCell>Scheduled</TypographyTableCell>
              <TypographyTableCell>P2</TypographyTableCell>
              <TypographyTableCell>HVAC zone 3</TypographyTableCell>
            </TypographyTableRow>
            <TypographyTableRow>
              <TypographyTableCell>WO‑1027</TypographyTableCell>
              <TypographyTableCell>Awaiting parts</TypographyTableCell>
              <TypographyTableCell>P3</TypographyTableCell>
              <TypographyTableCell>Pump station B</TypographyTableCell>
            </TypographyTableRow>
          </tbody>
        </TypographyTable>
      </section>

      <section className="space-y-3">
        <TypographyLead>
          A confirmation pattern used throughout WorkOrder when changing status,
          closing work orders, or scheduling downtime.
        </TypographyLead>
        <Typography.Large>Are you absolutely sure?</Typography.Large>
        <div className="space-y-1">
          <TypographySmall>Reason for change</TypographySmall>
          <TypographyMuted>
            Give operators and maintenance clear context on why this status is
            changing.
          </TypographyMuted>
        </div>
      </section>

      <section className="space-y-2">
        <TypographyP>
          Inline code is used for API resources, integration keys, and config
          snippets. For example, when integrating your CMMS with your IoT or ERP
          stack:
        </TypographyP>
        <TypographyP>
          Use{" "}
          <TypographyInlineCode>
            /api/cmms/work-orders
          </TypographyInlineCode>
          {" "}
          to push new work orders into WorkOrder, or{" "}
          <TypographyInlineCode>X-WORKORDER-API-KEY</TypographyInlineCode> in
          your headers for secure access.
        </TypographyP>
      </section>
    </div>
  ),
}


