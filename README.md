# Base Template

Basic template repository to be reused for a variety of JavaScript-based projects.

## Installation

Install dependencies:

```bash
yarn
```

Install hooks:

```bash
yarn prepare
```

Install `yamllint` and `actionlint`.

## Commands

Commit changes using conventional changelog:

```bash
yarn commit
```

Lint files:

```bash
yarn lint
```

Lint `yml` files:

```bash
make -f MAKEFILE
```

**Note**: `release.yml` will run this before versioning and publishing.

## License

MIT
