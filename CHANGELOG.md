# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Comprehensive CI/CD pipeline with GitHub Actions
- Unit test suites for schema package and CLI app
- Development workflow with formatting, linting, and type checking
- Security audit in CI pipeline
- Publish dry-run validation
- CONTRIBUTING.md with development guidelines

### Changed

- Updated Deno version requirement to 2.3.3+
- Improved error handling in CLI app
- Enhanced documentation with usage examples

### Fixed

- All linting and type checking diagnostics resolved
- Proper compiler options configuration across packages
- Missing export for materializers in schema package

## [0.1.0] - 2024-01-XX

### Added

- Initial Deno monorepo structure with workspace support
- Schema package (`@anode/schema`) with Livestore definitions
- CLI application (`@anode/cli`) demonstrating schema usage
- Comprehensive schema with 7 main tables:
  - `notebook` - Notebook metadata and settings
  - `cells` - Individual code/markdown cells
  - `outputs` - Cell execution outputs
  - `kernelSessions` - Kernel session management
  - `executionQueue` - Execution queue tracking
  - `dataConnections` - Database connections
  - `uiState` - UI state management
- 24+ event types for notebook operations:
  - Notebook lifecycle events
  - Cell CRUD operations
  - Kernel session management
  - Execution tracking
  - Output handling
  - SQL connection management
  - AI integration events
- Materializers for event-driven state management
- TypeScript type exports with full type inference
- Import maps for clean cross-package references
- Root-level development tasks
- Comprehensive README documentation

### Technical Details

- Built on Livestore schema system
- Uses SQLite state management
- Event sourcing with materializers
- Full TypeScript support with strict mode
- Zero build step - direct .ts imports
- JSR-ready package configuration

### Repository Structure

- `packages/schema/` - Core schema package (publishable)
- `apps/cli/` - Command line demonstration app
- Workspace configuration with import maps
- Development tooling and scripts
