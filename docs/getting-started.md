# Getting Started

This guide will help you set up WorkOrder for local development.

## Prerequisites

- **Docker Desktop** - Required for running Supabase locally
  - Download from [docker.com](https://www.docker.com/products/docker-desktop)
  - Ensure Docker is running before starting Supabase

- **Supabase CLI** - For managing local Supabase instances
  - Install: `brew install supabase/tap/supabase` (macOS)
  - Or follow: [Supabase CLI installation guide](https://supabase.com/docs/guides/cli/getting-started#installation)

## Starting Supabase Locally

From the `apps/api` directory, start the local Supabase stack:

```bash
cd apps/api
supabase start
```

This command:
- Starts all Supabase services (PostgreSQL, API, Auth, Storage, etc.)
- Creates a local database
- Generates API keys and connection strings
- Takes a few minutes on first run

## Accessing Local Services

After `supabase start` completes, you'll see connection details including:

### Supabase Studio
- **URL**: http://localhost:54323
- Web-based database management interface
- View tables, run queries, manage data

### API Endpoint
- **URL**: http://localhost:54321
- REST API for your local database
- Same API surface as production Supabase

### Database
- **Host**: localhost
- **Port**: 54322
- **Database**: postgres
- **User**: postgres
- **Password**: (shown in `supabase start` output)

### API Keys
- **anon key**: (shown in `supabase start` output)
- **service_role key**: (shown in `supabase start` output)
- **JWT secret**: (shown in `supabase start` output)

All keys and connection strings are displayed in the terminal after running `supabase start`.

## Stopping Supabase

To stop all local Supabase services:

```bash
cd apps/api
supabase stop
```

This stops all containers and frees up resources. Your data persists until you run `supabase db reset`.

## Next Steps

Once Supabase is running locally, you can:
- Explore the database schema in Supabase Studio
- Run database migrations (when they're added)
- Connect your web client to the local API
- Develop and test Edge Functions locally
