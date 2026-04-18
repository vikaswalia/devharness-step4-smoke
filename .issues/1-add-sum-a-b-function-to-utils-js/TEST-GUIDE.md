# Manual Test Guide - PR #2 (Issue #1)

- **Fix**: Add `sum(a, b)` function to `utils.js` for basic arithmetic addition
- **Branch**: `dev` (source) → `main` (target)
- **Root cause**: Feature request — `utils.js` had no utility functions

## Test environment setup

- **Branch**: `dev`
- **Dev server**: Not required (CLI utility function)
- **Prerequisites**: Node.js 18+ (for built-in test runner)

## Automated test summary

- **Fix-related tests**: 2/2 PASS
- **Full suite**: 2 pass, 0 fail
- **Pre-existing failures**: none

---

## TEST 0 of 3 | Verify the original bug no longer reproduces

**WHAT:** The `sum` function did not exist and calling it would fail
**WHY:** This was the feature request — users needed a `sum(a, b)` function

**HOW:**
1. Open a Node.js REPL: `node`
2. Try to import the function: `await import('./utils.js')`
3. Verify `sum` is exported: `const { sum } = await import('./utils.js')`

**PASS IF:** The import succeeds without error and `sum` is available as an exported function
**FAIL IF:** Error about `sum` not being exported or module not found

Result: [ ]

---

## TEST 1 of 3 | Verify `sum(a, b)` is exported (AC1)

**WHAT:** `sum` is exported from `utils.js` and can be imported
**WHY:** AC1 requires the function be exported from the module

**HOW:**
1. Open a Node.js REPL: `node`
2. Import the function: `const { sum } = await import('./utils.js')`
3. Verify `sum` is a function: `console.log(typeof sum)`

**PASS IF:** `typeof sum` returns `'function'`
**FAIL IF:** `typeof sum` returns `'undefined'` or throws an error

Result: [ ]

---

## TEST 2 of 3 | Verify `sum(2, 3) === 5` (AC2)

**WHAT:** `sum(2, 3)` returns the correct result of `5`
**WHY:** AC2 requires the function to work correctly for positive integers

**HOW:**
1. Open a Node.js REPL: `node`
2. Import the function: `const { sum } = await import('./utils.js')`
3. Call `sum(2, 3)`: `console.log(sum(2, 3))`
4. Verify output is `5`

**PASS IF:** `sum(2, 3)` returns `5`
**FAIL IF:** Returns any value other than `5` (e.g., `undefined`, error, or wrong number)

Result: [ ]

---

## TEST 3 of 3 | Verify comment exists above function (AC3)

**WHAT:** A short comment explaining what `sum` does exists above the function
**WHY:** AC3 requires documentation within the code

**HOW:**
1. Open `utils.js` in any text editor
2. Look for a comment above the `sum` function definition
3. Verify the comment describes what the function does

**PASS IF:** Comment exists and describes the function's behavior
**FAIL IF:** No comment above the function, or comment is unrelated to `sum`

Result: [ ]

---

## Running automated tests

```bash
# Run all tests
npm test

# Run only utils tests
npm test -- tests/utils.test.js
```

Expected output:
```
Node.js v22.0.0

  sum function is exported
    ✔ passes in 1ms

  sum returns correct result for positive integers
    ✔ passes in 0ms

  2 tests passed | 0 failed
```