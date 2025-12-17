# Web Client

The primary web application for WorkOrder.

## Overview

This is the main client application that users interact with. It connects to Supabase backend services via `supabase-js` and implements the WorkOrder interface for managing maintenance operations.

The application serves as the primary entry point for end users and demonstrates how to compose the domain, contracts, and plugin system into a cohesive user experience.

## Architecture

- **Type**: Single-page application
- **Backend**: Supabase (authentication, database access, real-time features via `supabase-js`)
- **Extensibility**: Supports plugin loading and marketplace integration
- **Resilience**: Planned offline-first PWA implementation for unreliable connectivity scenarios

## Dependencies

This application depends on:
- Supabase backend services (`supabase-js`)
- [`packages/domain`](../../packages/domain/README.md) - for business logic
- [`packages/contracts`](../../packages/contracts/README.md) - for API contracts
- [`packages/plugin-sdk`](../../packages/plugin-sdk/README.md) - for plugin runtime support

## Design Approach

The application layer orchestrates:
- User interactions → domain operations
- API calls using contract definitions
- Plugin lifecycle and integration
- Offline synchronization when connectivity is unreliable

This follows a layered architecture where the application coordinates between infrastructure (Supabase) and business logic (domain).

## Status

Early development. Framework and build tooling to be determined.
