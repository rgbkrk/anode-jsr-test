# Contributing to Anode Schema

Thank you for your interest in contributing to the Anode Schema project! This document provides guidelines and information for contributors.

## Development Setup

### Prerequisites

- [Deno 2.3.3+](https://deno.land/manual/getting_started/installation)
- Git

### Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/anode-jsr-test.git
   cd anode-jsr-test
   ```

3. Install dependencies (Deno will handle this automatically)
4. Run the development setup:
   ```bash
   deno task dev
   ```

## Project Structure

```
anode-jsr-test/
├── packages/
│   └── schema/           # Core schema package
├── apps/
│   └── cli/              # CLI demonstration app
├── .github/workflows/    # CI/CD pipelines
└── README.md
```

## Development Workflow

### Before Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make sure everything is working:
   ```bash
   deno task ci
   ```

### Making Changes

1. **Schema Changes**: Edit `packages/schema/schema.ts`
2. **CLI Changes**: Edit `apps/cli/main.ts`
3. **Tests**: Add/update tests in `*.test.ts` files

### Testing Your Changes

Run the full test suite:
```bash
deno task ci
```

This will run:
- Code formatting check
- Linting
- Type checking
- Unit tests
- CLI functionality test

### Individual Commands

```bash
# Format code
deno task fmt

# Run linter
deno task lint

# Type check
deno task check

# Run tests
deno task test

# Test CLI
deno task cli

# Test publishing
deno task publish:dry-run
```

## Code Standards

### Formatting
- Use `deno fmt` for consistent formatting
- 2-space indentation
- Follow Deno style guidelines

### Linting
- All code must pass `deno lint`
- Use TypeScript strict mode
- Avoid `any` types when possible

### Testing
- Add tests for new functionality
- Maintain test coverage
- Tests should be descriptive and focused

## Commit Guidelines

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build/tooling changes

Examples:
```
feat(schema): add new table for user preferences
fix(cli): handle empty schema gracefully
docs: update README with new installation steps
```

## Schema Development

### Adding New Tables

1. Add table definition to `packages/schema/schema.ts`
2. Add corresponding events if needed
3. Add materializers for event handling
4. Update type exports
5. Add tests for new functionality

### Event System

- Events should follow the `v1.EventName` naming convention
- Use proper TypeScript schemas for event data
- Add materializers to handle state changes

### Type Safety

- Leverage TypeScript's type inference
- Export proper type definitions
- Use `Record<string, unknown>` instead of `any` when needed

## Pull Request Process

1. Ensure all tests pass: `deno task ci`
2. Update documentation if needed
3. Add tests for new features
4. Create a pull request with:
   - Clear description of changes
   - Link to any related issues
   - Screenshots if UI changes

### PR Checklist

- [ ] Code passes all CI checks
- [ ] Tests added/updated for changes
- [ ] Documentation updated if needed
- [ ] Commit messages follow conventions
- [ ] No breaking changes (or clearly documented)

## Release Process

Releases are handled by maintainers:

1. Version bump in `packages/schema/deno.json`
2. Update CHANGELOG.md
3. Create GitHub release
4. Publish to JSR: `deno task publish:schema`

## Getting Help

- Create an issue for bugs or feature requests
- Start discussions for questions or ideas
- Check existing issues before creating new ones

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help maintain a welcoming environment
- Follow GitHub's community guidelines

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (BSD-3-Clause).