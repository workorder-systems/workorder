# Plugin SDK

Development kit for building WorkOrder plugins.

## Purpose

This package provides the types, interfaces, and utilities needed to build plugins that extend WorkOrder functionality. Plugin developers depend on this package to ensure compatibility with the core system and marketplace requirements.

The SDK abstracts the complexity of plugin integration while providing clear extension points for customization.

## What Plugins Can Do

Plugins can extend WorkOrder with:
- Custom features and workflows
- Third-party integrations
- Domain-specific extensions
- Custom UI components (when framework is determined)

## Dependencies

This package depends on:
- [`packages/contracts`](../contracts/README.md) - for plugin contract specifications
- [`packages/domain`](../domain/README.md) - for extending core business concepts

This package is a dependency of:
- Plugin implementations (external, published packages)

## Architecture

Plugins built with this SDK:
- Implement defined interfaces from this package
- Follow the contract specifications in [`packages/contracts`](../contracts/README.md)
- May extend domain concepts from [`packages/domain`](../domain/README.md)
- Are validated against marketplace requirements
- Maintain compatibility with core WorkOrder updates

## Design Considerations

- **Isolation**: Plugins should be isolated from each other and the core system
- **Sandboxing**: Runtime isolation prevents plugins from breaking core functionality
- **Versioning**: SDK versioning must balance stability with evolution
- **Performance**: Plugin loading and execution should not degrade core system performance

## Status

Structure only. No code yet.
