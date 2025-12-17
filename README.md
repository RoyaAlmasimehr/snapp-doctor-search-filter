# 🩺 Snapp Doctor – Frontend Technical Task

---

## Overview

Performance-focused **Search & Filter Engine** built with **React + TypeScript**.

---

## 🚀 How to Run

```bash
npm install
npm run dev

📦 Dataset
5,000 client-side generated items
Generated once using useMemo

🔍 Search & Filters
Debounced text search on item name
Category, price range, and status filters
Pure O(n) filtering functions

🪟 Virtualized List
Implemented using react-window
Only visible items are rendered
Verified via Chrome DevTools (Elements tab)


⚡ Performance Optimizations
useMemo / useCallback
Debounced input
Virtualized rendering
Minimal re-renders