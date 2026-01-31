'use client';

import * as React from 'react';
import type { ColumnDef, Column, Row } from '@tanstack/react-table';
import { Building2, Calendar, DollarSign, Settings, Wrench, Plus } from 'lucide-react';
import { DataTable } from '@workspace/ui/components/data-table/data-table';
import { DataTableColumnHeader } from '@workspace/ui/components/data-table/data-table-column-header';
import { DataTableToolbar } from '@workspace/ui/components/data-table/data-table-toolbar';
import { useDataTable } from '@workspace/ui/hooks/use-data-table';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import { ExtensionPoint } from '@workspace/ui/components/app-shell';
import { PageHeader } from '@workspace/ui/components/page-header';

// Force dynamic rendering to ensure NuqsAdapter is available
export const dynamic = 'force-dynamic';

// Asset type definition
interface Asset {
  id: string;
  name: string;
  type: 'hvac' | 'electrical' | 'plumbing' | 'mechanical';
  status: 'operational' | 'maintenance' | 'out-of-service';
  location: string;
  lastMaintenance: string;
  nextMaintenance: string;
  cost: number;
}

// Sample asset data
const assetsData: Asset[] = [
  {
    id: '1',
    name: 'HVAC Unit #5',
    type: 'hvac',
    status: 'operational',
    location: 'Building A - Floor 3',
    lastMaintenance: '2024-01-15',
    nextMaintenance: '2024-04-15',
    cost: 15000,
  },
  {
    id: '2',
    name: 'Electrical Panel B',
    type: 'electrical',
    status: 'maintenance',
    location: 'Building B - Basement',
    lastMaintenance: '2023-12-10',
    nextMaintenance: '2024-03-10',
    cost: 8500,
  },
  {
    id: '3',
    name: 'Plumbing System Main',
    type: 'plumbing',
    status: 'operational',
    location: 'Building A - Basement',
    lastMaintenance: '2024-01-20',
    nextMaintenance: '2024-07-20',
    cost: 12000,
  },
  {
    id: '4',
    name: 'Generator Unit 1',
    type: 'mechanical',
    status: 'operational',
    location: 'Building C - Ground Floor',
    lastMaintenance: '2024-01-05',
    nextMaintenance: '2024-04-05',
    cost: 45000,
  },
  {
    id: '5',
    name: 'HVAC Unit #2',
    type: 'hvac',
    status: 'out-of-service',
    location: 'Building A - Floor 1',
    lastMaintenance: '2023-11-30',
    nextMaintenance: '2024-02-28',
    cost: 18000,
  },
  {
    id: '6',
    name: 'Fire Safety System',
    type: 'electrical',
    status: 'operational',
    location: 'Building A - All Floors',
    lastMaintenance: '2024-01-10',
    nextMaintenance: '2024-07-10',
    cost: 25000,
  },
  {
    id: '7',
    name: 'Water Heater System',
    type: 'plumbing',
    status: 'operational',
    location: 'Building B - Basement',
    lastMaintenance: '2024-01-18',
    nextMaintenance: '2024-07-18',
    cost: 9500,
  },
  {
    id: '8',
    name: 'Elevator Motor #1',
    type: 'mechanical',
    status: 'maintenance',
    location: 'Building A - Elevator Shaft',
    lastMaintenance: '2023-12-25',
    nextMaintenance: '2024-03-25',
    cost: 32000,
  },
];

const typeIcons = {
  hvac: Building2,
  electrical: Settings,
  plumbing: Wrench,
  mechanical: Wrench,
};

const typeLabels = {
  hvac: 'HVAC',
  electrical: 'Electrical',
  plumbing: 'Plumbing',
  mechanical: 'Mechanical',
};

const statusColors = {
  operational: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  maintenance: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  'out-of-service': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

export default function AssetsPage() {
  const columns = React.useMemo<ColumnDef<Asset>[]>(
    () => [
      {
        id: 'name',
        accessorKey: 'name',
        header: ({ column }: { column: Column<Asset> }) => (
          <DataTableColumnHeader column={column} label="Asset Name" />
        ),
        cell: ({ row }: { row: Row<Asset> }) => {
          const asset = row.original as Asset;
          const Icon = typeIcons[asset.type];
  return (
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-muted-foreground" />
              <div className="font-medium">{asset.name}</div>
            </div>
          );
        },
        meta: {
          label: 'Asset Name',
          placeholder: 'Search assets...',
          variant: 'text',
        },
        enableColumnFilter: true,
      },
      {
        id: 'type',
        accessorKey: 'type',
        header: ({ column }: { column: Column<Asset> }) => (
          <DataTableColumnHeader column={column} label="Type" />
        ),
        cell: ({ row }: { row: Row<Asset> }) => {
          const type = row.getValue('type') as Asset['type'];
          return (
            <Badge variant="secondary">{typeLabels[type]}</Badge>
          );
        },
        meta: {
          label: 'Type',
          variant: 'select',
          options: [
            { label: 'HVAC', value: 'hvac' },
            { label: 'Electrical', value: 'electrical' },
            { label: 'Plumbing', value: 'plumbing' },
            { label: 'Mechanical', value: 'mechanical' },
          ],
        },
        enableColumnFilter: true,
        filterFn: (row: Row<Asset>, id: string, value: string[]) => {
          return value.includes(row.getValue(id));
        },
      },
      {
        id: 'status',
        accessorKey: 'status',
        header: ({ column }: { column: Column<Asset> }) => (
          <DataTableColumnHeader column={column} label="Status" />
        ),
        cell: ({ row }: { row: Row<Asset> }) => {
          const status = row.getValue('status') as Asset['status'];
          return (
            <Badge className={statusColors[status]}>
              {status.replace('-', ' ')}
            </Badge>
          );
        },
        meta: {
          label: 'Status',
          variant: 'select',
          options: [
            { label: 'Operational', value: 'operational' },
            { label: 'Maintenance', value: 'maintenance' },
            { label: 'Out of Service', value: 'out-of-service' },
          ],
        },
        enableColumnFilter: true,
        filterFn: (row: Row<Asset>, id: string, value: string[]) => {
          return value.includes(row.getValue(id));
        },
      },
      {
        id: 'location',
        accessorKey: 'location',
        header: ({ column }: { column: Column<Asset> }) => (
          <DataTableColumnHeader column={column} label="Location" />
        ),
        cell: ({ row }: { row: Row<Asset> }) => (
          <div className="text-sm">{row.getValue('location')}</div>
        ),
        meta: {
          label: 'Location',
          placeholder: 'Search locations...',
          variant: 'text',
        },
        enableColumnFilter: true,
      },
      {
        id: 'lastMaintenance',
        accessorKey: 'lastMaintenance',
        header: ({ column }: { column: Column<Asset> }) => (
          <DataTableColumnHeader column={column} label="Last Maintenance" />
        ),
        cell: ({ row }: { row: Row<Asset> }) => {
          const date = new Date(row.getValue('lastMaintenance'));
          return <div className="text-sm">{date.toLocaleDateString()}</div>;
        },
        meta: {
          label: 'Last Maintenance',
          variant: 'date',
          icon: Calendar,
        },
        enableColumnFilter: true,
      },
      {
        id: 'nextMaintenance',
        accessorKey: 'nextMaintenance',
        header: ({ column }: { column: Column<Asset> }) => (
          <DataTableColumnHeader column={column} label="Next Maintenance" />
        ),
        cell: ({ row }: { row: Row<Asset> }) => {
          const date = new Date(row.getValue('nextMaintenance'));
          return <div className="text-sm">{date.toLocaleDateString()}</div>;
        },
        meta: {
          label: 'Next Maintenance',
          variant: 'date',
          icon: Calendar,
        },
        enableColumnFilter: true,
      },
      {
        id: 'cost',
        accessorKey: 'cost',
        header: ({ column }: { column: Column<Asset> }) => (
          <DataTableColumnHeader column={column} label="Cost" />
        ),
        cell: ({ row }: { row: Row<Asset> }) => {
          const cost = row.getValue('cost') as number;
          return (
            <div className="font-medium">
              ${cost.toLocaleString('en-US')}
            </div>
          );
        },
        meta: {
          label: 'Cost',
          variant: 'number',
          unit: '$',
          icon: DollarSign,
        },
        enableColumnFilter: true,
      },
    ],
    []
  );

  const { table } = useDataTable({
    data: assetsData,
    columns,
    pageCount: Math.ceil(assetsData.length / 10),
    initialState: {
      pagination: { pageIndex: 0, pageSize: 10 },
    },
    getRowId: (row) => row.id,
  });

  return (
    <>
      <ExtensionPoint name="page.header">
        <PageHeader
          title="Assets"
          description="Manage and track all facility assets"
          actions={
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Asset
            </Button>
          }
        />
      </ExtensionPoint>

      <div className="w-full space-y-4">
        <DataTable table={table}>
          <DataTableToolbar table={table} />
        </DataTable>
      </div>
    </>
  );
}
