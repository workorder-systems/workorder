# Domain

Pure business domain models and logic.

## Purpose

This package contains the core business concepts, domain models, and business rules that represent WorkOrder's problem space. It embodies the business logic without coupling to infrastructure, frameworks, or external concerns.

Following domain-driven design principles, this package is the heart of the system. All other packages depend on this foundation.

## Architecture

This package follows hexagonal architecture (ports and adapters) where the domain sits at the center. It defines:
- Entity models representing core business concepts
- Value objects for domain concepts
- Domain services for business operations
- Business rules and invariants

## Dependencies

This package has zero dependencies on:
- Infrastructure (Supabase, databases, HTTP clients)
- Frameworks (React, Vue, etc.)
- UI libraries
- External services
- Other packages in this monorepo

It depends only on:
- Standard library types and utilities

This package is a dependency of:
- [`packages/contracts`](../contracts/README.md) - contracts reference domain types in API definitions
- [`packages/plugin-sdk`](../plugin-sdk/README.md) - for plugin developers extending domain concepts
- Applications that need business logic

## Design Principles

- **Portable**: Can run in any JavaScript/TypeScript environment without modification
- **Testable**: Pure functions and immutable data structures enable straightforward unit testing
- **Publishable**: Designed to be independently versioned and published as a stable foundation
- **Stable**: Core domain concepts change infrequently; breaking changes here are significant

## Status

Structure only. No code yet.
