# Anode Deno Monorepo

A Deno monorepo containing the Anode Livestore schema package and a CLI
application that demonstrates importing and using the schema.

## Structure

```
anode-jsr-test/
├── packages/
│   └── schema/           # Schema package (publishable to JSR)
│       ├── deno.json     # Package configuration
│       └── schema.ts     # Livestore schema definitions
├── apps/
│   └── cli/              # Command line application
│       ├── deno.json     # CLI app configuration  
│       ├── main.ts       # CLI entry point
│       └── README.md     # CLI documentation
└── deno.json             # Root workspace configuration
```

## Packages

### `@anode/schema`

Contains comprehensive Livestore schema definitions for:

- **Tables**: notebooks, cells, outputs, kernel sessions, execution queue, data
  connections, UI state
- **Events**: 24+ event types for notebook lifecycle, cell operations, kernel
  management, and execution tracking
- **Materializers**: Event handlers that update database state
- **Types**: TypeScript interfaces and utility functions for type safety

This package can be published to JSR and imported by other Deno projects.

### `@anode/cli`

A command line application that demonstrates the schema package by:

- Importing the complete schema structure
- Displaying all table definitions and their columns
- Listing available events and materializers
- Showing schema metadata and statistics
- Providing a comprehensive overview of the schema capabilities

## Usage

### Running the CLI App

From the root directory (recommended):

```bash
deno task cli
```

Or with auto-reload during development:

```bash
deno task cli:dev
```

Alternatively, run directly from the CLI directory:

```bash
cd apps/cli
deno task start
```

### Using the Schema Package

The schema can be imported directly in other Deno projects:

```typescript
import {
  CellData,
  events,
  materializers,
  // Type exports
  NotebookData,
  OutputData,
  schema,
  tables,
} from "@anode/schema";

// Access table definitions
console.log(tables.cells.sqliteDef.columns);

// Use events
const cellCreated = events.cellCreated;

// Access materializers
console.log(materializers);
```

## Development

The monorepo uses Deno workspaces to manage dependencies and provide clean
cross-package imports. Key features:

- **Import Maps**: Root `deno.json` defines `@anode/schema` alias for easy
  importing
- **Workspace Support**: Packages can reference each other using
  workspace-relative paths
- **Type Safety**: Full TypeScript support with strict mode enabled
- **Zero Build Step**: Direct `.ts` imports work without compilation

## CLI Output

The CLI app provides detailed information about the schema:

- 📊 **Schema Structure**: LiveStore schema object with symbols and metadata
- 🗂️ **Tables**: 7 main tables (notebook, cells, outputs, etc.) with column
  details
- ⚡ **Events**: 24+ events for notebook operations and state changes
- 🔄 **Materializers**: Event handlers that maintain database consistency
- 📝 **Summary**: Statistics and validation of schema completeness

## Publishing

The schema package can be published to JSR:

```bash
cd packages/schema
deno publish
```

## Requirements

- Deno 2.3.3+ (uses workspace features)
- Permissions: `--allow-env` (for Livestore utilities)
