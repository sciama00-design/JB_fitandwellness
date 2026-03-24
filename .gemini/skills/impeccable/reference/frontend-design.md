# Frontend Design Reference

This document serves as the foundation for the Impeccable Style design system. It contains the core principles and standards that should be followed for all frontend development tasks.

## Core Principles

1.  **Accessibility First**: Every design decision starts with accessibility. High contrast (WCAG AA/AAA), clear focus states, and logical structure are non-negotiable.
2.  **Rhythm & Spacing**: Use the **Rule of 8** (spacing based on 8px increments). Avoid arbitrary pixel values. Use relative units (rem, em) for responsiveness.
3.  **Modern CSS**: Leverage the latest CSS features: **OKLCH** for color, **Container Queries** for component responsiveness, and **Logical Properties** for internationalization.
4.  **UX Writing**: Microcopy should be clear, concise, and action-oriented. Buttons should describe the outcome (e.g., "Create Plan" instead of "Submit").
5.  **Optical Balance**: Favor optical alignment over mathematical centering. Use subtle shadows and gradients to create depth without clutter.

## Color & Contrast

-   **OKLCH**: Use `oklch(L C H)` for all colors. It provides a perceptually uniform color space where lightness (L) is consistent across different hues (H).
-   **No Pure Black**: Avoid `#000000`. Use deep, desaturated grays or brand-tinted darks for better readability and a more premium feel.
-   **Contrast Ratios**: Aim for at least 4.5:1 for normal text and 3:1 for large text/UI elements.

## Typography

-   **Scale**: Use a consistent typographic scale (e.g., Major Third or Perfect Fourth).
-   **Line Height**: Standardize around 1.5 - 1.6 for body text. Headings should have tighter line heights (1.1 - 1.25).
-   **Paragraph Width**: Limit line length to 45–75 characters for optimal readability.

## Interaction Design

-   **Snappy Interactions**: Transitions should be fast (150-300ms) and use intentional easing (e.g., `cubic-bezier(0.16, 1, 0.3, 1)` for "out" transitions).
-   **Clear Feedback**: Every interaction (hover, active, focus, disabled) must have a distinct and meaningful visual state.
-   **Touch Targets**: Minimum 44x44px for mobile interactions.
