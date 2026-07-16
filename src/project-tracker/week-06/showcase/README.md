# Project Tracker – Week 6 Showcase

This optional Showcase begins from the Week 6 Complete application and
demonstrates two possible extensions:

- safer persistence code extracted into `src/utils/taskStorage.js`
- navigation between separate application views using React Router

The Showcase is not the guided-build answer or the Week 6 success criterion.
Use it as professional reference code: run it, trace a feature through the
files, explain the pattern and adapt only what your own project needs.

## Getting Started

```bash
npm install
npm run dev
```

## Trace The Routing

1. Open `src/main.jsx` and find the `HashRouter` around `App`.
2. Open `src/components/Header.jsx` and follow a `NavLink` path.
3. Open `src/App.jsx` and find the `Route` with the same path.
4. Open the page component rendered by that route.
5. Explain how the URL leads to the component before adapting the pattern.

The application provides these routes:

| URL | Page component |
| --- | --- |
| `#/` | `DashboardPage` |
| `#/summary` | `SummaryPage` |
| `#/about` | `AboutPage` |
| any other path | `NotFoundPage` |

`HashRouter` keeps the route in the hash portion of the URL. This makes the
example straightforward to deploy to static hosting such as GitHub Pages,
because the route is not sent to the web server.

## Project Structure

```text
src/
├── App.jsx                     Shared state, persistence and route definitions
├── main.jsx                    React entry point and HashRouter
├── components/                Reusable interface components
├── pages/                     Components rendered for particular routes
│   ├── DashboardPage.jsx
│   ├── SummaryPage.jsx
│   ├── AboutPage.jsx
│   └── NotFoundPage.jsx
├── utils/
│   └── taskStorage.js          Defensive storage helpers
└── styles/
    └── style.css
```

## Important Boundary

React Router is an optional extension. The Week 6 core idea remains:

> Good applications remember the things users expect them to remember.

If your project only moves to sections on one page, normal anchor links may be
all it needs.
