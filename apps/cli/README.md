# Anode CLI

A simple command line application that demonstrates importing and using the Anode schema package.

## Purpose

This CLI app imports the `@anode/schema` package and displays:
- Schema structure
- Available tables and their columns
- Event definitions
- Materializers
- Full schema JSON output

## Usage

Run the CLI app:

```bash
deno task start
```

Or run with auto-reload during development:

```bash
deno task dev
```

## Output

The app will display a formatted overview of the schema including:
- 📊 Schema structure
- 🗂️ Table definitions and columns
- ⚡ Available events
- 🔄 Materializers
- 📝 Complete schema JSON

This is useful for:
- Understanding the schema structure
- Debugging schema definitions
- Validating schema exports
- Testing the package import system