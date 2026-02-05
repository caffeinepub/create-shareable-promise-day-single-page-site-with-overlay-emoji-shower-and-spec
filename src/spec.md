# Specification

## Summary
**Goal:** Deliver a public, shareable single-page Promise Day greeting site that matches the provided content and layout, with an emoji shower overlay that appears above the card content.

**Planned changes:**
- Implement a single public page at `/` reproducing the provided Promise Day content (hero 🤝, heading, English message text, signature) and loading the three images from the exact provided URLs.
- Update the emoji shower so emojis render as a non-interactive overlay above the card/photos/text (correct z-index, `pointer-events: none`) and clean up emoji elements after animations complete.
- Apply the requested photo layout: rings photo first at the top of the card, with the other two photos below in a responsive 2-column layout that wraps on narrow screens, with consistent rounded styling.
- Apply a cohesive romantic visual theme (palette, typography, spacing, card styling) that is not blue/purple-dominant and remains readable on mobile/desktop.

**User-visible outcome:** Anyone can open the shared link to view the Promise Day greeting page with the specified message and photo layout, while emoji animations shower over the content without blocking scrolling or clicks.
