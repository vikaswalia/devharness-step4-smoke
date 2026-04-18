# Plan - Issue #1: Add `sum(a, b)` function to utils.js

- **Issue URL**: https://github.com/vikaswalia/devharness-step4-smoke/issues/1
- **Branch**: `fix/issue-1-add-sum-a-b-function-to-utils-js`
- **Worktree**: `/private/tmp/devharness-step4-smoke` (main worktree, no separate worktree needed for this feature)
- **Started**: 2026-04-18
- **Stack**: node (plain JavaScript, no framework)

## Root cause

This is a feature request, not a bug. The `utils.js` file currently contains only a placeholder comment and no utility functions. Users need a `sum(a, b)` function to perform basic arithmetic addition.

### Evidence
- `utils.js` (line 1): `// utils - helper functions go here`
- Issue acceptance criteria explicitly require the function be exported and have a comment

## Fix strategy

Add a `sum(a, b)` function to `utils.js` that returns `a + b`, with a short JSDoc-style comment, and export it using ES module `export` syntax (matching the `"type": "module"` in package.json). Since the codebase has no test framework, use Node.js's built-in test runner (`node:test`) with `node:assert` for assertions.

### Alternative strategies not chosen
- **Alt A**: Use CommonJS `module.exports = { sum }` — rejected because `package.json` specifies `"type": "module"`, requiring ES module syntax
- **Alt B**: Add a test framework (jest/vitest) — rejected as scope creep; Node's built-in test runner is sufficient

## Acceptance criteria → test mapping

| # | Criterion | Test file & name | Status |
|---|-----------|------------------|--------|
| AC1 | `sum(a, b)` is exported from `utils.js` | `tests/utils.test.js::test sum function is exported` | to write |
| AC2 | Works for positive integers (e.g., `sum(2, 3) === 5`) | `tests/utils.test.js::test sum returns correct result for positive integers` | to write |
| AC3 | A short comment explaining what it does | Manual verification (see below) | N/A |

> AC3 cannot be automated because comments are not runtime-verifiable. Manual verification: open `utils.js` and confirm a comment above the function exists.

### Regression guard
- No regressions possible — this is an additive-only change with no existing functionality

## Files to change

- `utils.js` - Add `sum(a, b)` function with comment and ES module export
- `tests/utils.test.js` - New test file for `utils.js` utilities (will use Node's built-in test runner)

## Task checklist

- [ ] 1. Write failing test: verify `sum` is exported from `utils.js`
- [ ] 2. Write failing test: verify `sum(2, 3) === 5`
- [ ] 3. Implement `sum(a, b)` in `utils.js` with comment and `export`
- [ ] 4. Run tests — all pass
- [ ] 5. Run full test suite — no regressions
- [ ] 6. Run lint (manual review of diff)
- [ ] 7. Run typecheck (not applicable — plain JS, no type checker configured)
- [ ] 8. Commit changes
- [ ] 9. Push branch
- [ ] 10. Open PR with body referencing `Fixes #1`

## Rollback plan

Revert the single commit that added `sum` to `utils.js`. No data migration or feature flag needed — this is a pure addition.

## Risks

- **Low risk**: This is a minimal, additive change to a utility file
- No backwards-incompatible changes
- No data migration concerns
- No existing functionality affected (nothing existed before)

## Notes / session log

- Worktree note: The issue says worktree path is `/tmp/devharness-step4-smoke` which is the main working tree itself. Since this is a non-bug feature on the `main` branch, the worktree IS the main tree — no separate worktree creation needed.
- Test framework: Node.js built-in `node:test` module (available in Node 18+) with `node:assert`
- Package has no devDependencies — tests use Node built-ins only
