
# Current Feature

Dashboard UI Phase 3

## Status

<!-- Not Started|In Progress|Completed -->

In Progress

## Goals

<!-- Goals & requirements -->

Implement phase 3 of 3 for the dashboard UI layout (see @context/features/dashboard-phase-3-spec.md):

- The main area to the right
- Recent collections
- Pinned items
- 10 recent items
- 4 stats cards at the top for number of items, collections, favorite items and favorite collections (not in screenshot)

## Notes

<!-- Any extra notes -->

- Use @context/screenshots/dashboard-ui-main.png as the visual reference
- Use mock data from @src/lib/mock-data.ts (import directly for now, no DB yet)
- Builds on @context/features/dashboard-phase-1-spec.md and @context/features/dashboard-phase-2-spec.md

## History

- Project setup and boilerplate cleanup
- Initial Next.js and Tailwind CSS setup
- Dashboard UI Phase 1: ShadCN init, /dashboard route, dark mode by default, display-only top bar, sidebar/main placeholders (see @context/features/dashboard-phase-1-spec.md)
- Dashboard UI Phase 2: collapsible sidebar with type links, favorite/recent collections, user avatar footer, and mobile drawer (Sheet) behavior (see @context/features/dashboard-phase-2-spec.md)