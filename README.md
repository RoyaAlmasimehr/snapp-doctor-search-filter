# Snapp Doctor – Frontend Technical Task

## Overview

This project is a performance-focused Search & Filter Engine built with React and TypeScript.
The main goal is to efficiently handle large datasets while keeping the UI smooth and responsive.

## How to Run

```bash
npm install
npm run dev


📌 مصاحبه‌گر اول اینو می‌خونه

---

## 4️⃣ دیتاست (Dataset)

```md
## Dataset

- A mock dataset of 5,000 items is generated on the client.
- Data is generated only once using useMemo.
- Each item includes id, name, category, price, and status.

## Search

- Text search is applied on the item name.
- Search input is debounced to avoid filtering on every keystroke.
- Implemented without external libraries.

## Filters

Implemented filters:
- Category
- Price range
- Status

All filters work together and run fully on the client.
Filtering logic is implemented using pure functions with O(n) complexity.

## Architecture

Search and filter logic is separated from UI components:

SearchInput / Filters
        ↓
useItemsController
        ↓
useFilteredItems
        ↓
applyFilters

## Virtualized List

The result list is virtualized using react-window.
Only visible items are rendered in the DOM to ensure smooth scrolling.

## Performance Optimizations

- useMemo for expensive computations
- useCallback for stable references
- Debounced search input
- Virtualized list rendering
- Minimal and predictable re-renders

## Performance Testing

- React DevTools Profiler was used to measure render times.
- Chrome DevTools was used to verify DOM virtualization.
- No input lag or frame drops were observed.

## Limitations

- Filtering is client-side only.
- For very large datasets, server-side filtering or Web Workers would be preferred.

## Conclusion

This project focuses on performance engineering rather than UI complexity.
All optimization decisions were validated using profiling tools.
