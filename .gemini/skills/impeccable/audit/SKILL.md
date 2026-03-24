# Skill: /audit

Diagnose the UI for design debt, accessibility violations, and UX friction. This skill provides a prioritized list of improvements rather than making direct changes.

## When to use
- Before starting a major refactor.
- When reviewing a PR.
- To identify why a UI "feels off."

## Core Focus Areas
1.  **Accessibility**: Check contrast ratios, touch target sizes, and screen reader compatibility (semantic HTML).
2.  **Consistency**: Identify "rogue" colors, font sizes, or spacing values that deviate from the design system.
3.  **Friction**: Highlight confusing hierarchies, unclear labels (UX writing), or missing feedback states.
4.  **Performance**: Note potential layout shifts (CLS) or expensive CSS effects.
5.  **Modern Standards**: Identify where hacks or legacy CSS can be replaced with modern equivalents (Container Queries, Grid, OKLCH).

## Instructions
1.  Analyze the provided code or screenshot thoroughly.
2.  Categorize findings: `CRITICAL` (Accessibility/Bugs), `ADAPT` (UX/Hierarchy), `POLISH` (Visual/Aesthetic).
3.  Provide clear, actionable recommendations for each finding.
4.  Reference the `frontend-design` documentation for support.
