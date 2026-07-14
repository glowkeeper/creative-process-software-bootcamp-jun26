# Week 6 Resources

This week we introduced **browser persistence** using `localStorage`.

The goal wasn't to learn lots of new React features. Instead, we explored how a small amount of code can make an application feel much more professional by remembering information between visits.

As always, **everything you need to complete the bootcamp has been taught during the workshops**. These resources are entirely optional if you'd like to reinforce or explore today's ideas further.

---

## Essential Reading

### Browser Storage

- **MDN – Window.localStorage**  
  https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

A clear explanation of what `localStorage` is, how it works, and its limitations.

---

### React Effects

- **React Documentation – Synchronizing with Effects**  
  https://react.dev/learn/synchronizing-with-effects

Explains why `useEffect()` exists and when it should be used.

---

### React State

- **React Documentation – State: A Component's Memory**  
  https://react.dev/learn/state-a-components-memory

A useful refresher on React state and why it is temporary.

---

## Continue Exploring

### JavaScript Object Notation (JSON)

- **MDN – JSON**  
  https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON

Explains `JSON.stringify()` and `JSON.parse()`, which allow JavaScript objects to be stored in browser storage.

---

### Web Storage API

- **MDN – Web Storage API**  
  https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

A broader overview of browser storage, including `localStorage` and `sessionStorage`.

---

## Stretch

### React Router

- [React Router – Declarative Installation](https://reactrouter.com/start/declarative/installation)

- [React Router – Routing](https://reactrouter.com/start/declarative/routing)

- [React Router – Navigating](https://reactrouter.com/start/declarative/navigating)

React Router is optional in Week 6. The Showcase application demonstrates a
small routing pattern for projects that need separate views.

Start by running the Showcase and tracing one path from `NavLink`, to `Route`,
to the page component it renders. Understand the pattern before adapting it to
your own application.

If your navigation only moves to another section on the current page, normal
anchor links are enough and you do not need React Router.

---

### Supabase

- https://supabase.com/

Supabase is a free online backend that provides a PostgreSQL database and JavaScript API.

Replacing browser storage with an online database allows applications to synchronise information across multiple devices and users.

This is **not required** for the bootcamp, but it provides an excellent introduction to how many professional web applications persist data.

---

## Challenge Yourself

Can you answer these questions?

- Why does React state disappear when the browser is refreshed?
- Why is `localStorage` able to remember information?
- Why do we use `JSON.stringify()` when saving data?
- Why do we use `JSON.parse()` when loading data?
- Why do we use `useEffect()` when saving state?
- Should every piece of application state be persistent?
- What information should *your* application remember?

If you can confidently answer these questions, you've understood the key ideas from Week 6.

---

## Key Takeaway

Good applications remember.

Not everything.

The things users expect them to remember.
