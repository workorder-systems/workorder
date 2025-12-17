# Contracts

Shared API contracts, event definitions, and interface specifications.

## Purpose

This package defines the contracts that ensure consistency across applications, Edge Functions, and plugins. It serves as the source of truth for how different parts of the system communicate, enabling type-safe integration across boundaries.

Contracts act as the API surface layer—they define what can be exchanged between components without exposing implementation details.

## Contents

- API request/response type definitions
- Event names and payload schemas
- Shared interface definitions
- Plugin contract specifications

## Dependencies

This package depends on:
- [`packages/domain`](../domain/README.md) - contracts reference domain types in API definitions
- Standard library types

This package has no dependencies on:
- Infrastructure or framework dependencies

This package is a dependency of:
- All applications (`apps/web`, future Edge Functions)
- [`packages/plugin-sdk`](../plugin-sdk/README.md) - for plugin contract specifications

## Versioning Strategy

Versioning stability is critical. Breaking changes here affect:
- All applications
- Edge Functions
- Published plugins
- The plugin marketplace

**Versioning approach:**
- Follow semantic versioning strictly
- Use deprecation periods for breaking changes when possible
- Consider versioned API namespaces for major changes
- Document migration paths for breaking changes

Changes to contracts require careful coordination across the entire system.

## Status

Structure only. No code yet.
