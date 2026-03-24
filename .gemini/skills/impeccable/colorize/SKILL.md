# Skill: /colorize

Harmonize the color system using modern, accessible standards. This skill focuses on the implementation and correction of the color palette.

## When to use
- When colors feel "muddy" or "cheap."
- To ensure consistent dark/light mode transitions.
- To migrate from HSL/Hex to **OKLCH**.

## Core Focus Areas
1.  **OKLCH Implementation**: Use `oklch(L C H)` for all colors. OKLCH's perceptual uniformity ensures that "lightness" (L) is consistent across different hues (H), allowing for better accessibility calculations and more harmonious palettes.
2.  **Semantic Mapping**: Ensure color variables are correctly mapped to roles (primary, secondary, surface, outline, status).
3.  **Contrast Mastery**: Enforce WCAG AA/AAA standards. Use OKLCH's lightness to precisely calculate and adjust contrast.
4.  **Premium Tones**: Avoid "over-saturated" or "pure" colors. Use subtle chroma (C) adjustments to create sophisticated, high-end aesthetics.
5.  **Dark Mode depth**: Ensure dark mode uses a range of elevations (using depth/lightness) rather than being a single flat dark surface.

## Instructions
- Provide all color changes in **OKLCH**.
- Ensure contrast ratios are verified.
- Focus on "Midnight & Aurora" (Current project theme) - Use deep cyans, indigos, and teals for the primary accent, and rich, desaturated zincs for the background.
