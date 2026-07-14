# Week 6 Workbook

# Remembering Information

---

## Learning Objectives

By the end of today you should be able to:

- Explain why React state is temporary.
- Use browser `localStorage` to persist application data.
- Load previously saved data when a React application starts.
- Save application state automatically using `useEffect()`.
- Decide what information your own application should remember.

---

# Today's Big Idea

> Good applications remember.
>
> Not everything.
>
> The things users expect them to remember.

Today we'll make our applications feel much more professional by remembering information between visits.

---

# Guided Build

We'll work together on the Project Tracker reference application.

During the guided build we'll:

- Load existing tasks from browser storage.
- Save updated tasks automatically.
- Refresh the browser.
- Verify that our tasks are still there.

Keep notes below if they help you.

### Notes

____________________________________________________

____________________________________________________

____________________________________________________

____________________________________________________

---

# Project Planning

Before writing any code, think about your own application.

## What information should your application remember?

Tick anything that applies.

☐ User-created data

☐ Completed items

☐ Favourite items

☐ User preferences

☐ Theme (light/dark)

☐ Last viewed page

☐ Search history

☐ Something else:

____________________________________

---

# Activity 1

## Identify Your Application State

Write down the pieces of information your application currently stores in React state.

| State | Should it be remembered? |
|--------|--------------------------|
| | |
| | |
| | |
| | |

---

# Activity 2

## Choose One Feature

Select one important feature to persist today.

Examples:

- Tasks
- Notes
- Recipes
- Budget entries
- Workout history
- Favourite restaurants
- Quiz scores

My chosen feature:

____________________________________

Why?

____________________________________

____________________________________

---

# Activity 3

## Implement Browser Persistence

Add browser persistence to your chosen feature.

Checklist:

☐ Load existing data when the application starts.

☐ Save changes automatically.

☐ Refresh the browser.

☐ Verify that your data remains.

---

# Testing

Test your implementation.

☐ Add new information.

☐ Refresh the browser.

☐ Close the browser completely.

☐ Open it again.

☐ Confirm everything still works.

If something doesn't work...

What happened?

____________________________________

____________________________________

How did you fix it?

____________________________________

____________________________________

---

# Reflection

Think about your application.

What information did you deliberately choose **not** to remember?

Why?

____________________________________

____________________________________

____________________________________

---

# Stretch Activity 1

## Improve Your Persistence

Choose one improvement.

☐ Refactor your persistence code.

☐ Improve your variable names.

☐ Handle missing data gracefully.

☐ Handle invalid stored data.

☐ Add a button to clear saved data.

☐ Something else.

Describe what you improved.

____________________________________

____________________________________

____________________________________

---

# Stretch Activity 2

## Investigate Application Routing

This activity is optional. Use it only if your application needs separate
views rather than links to sections on one page.

Open and run the Week 6 Showcase application.

Choose one navigation link and trace it through the code.

☐ Find its `NavLink` in `Header.jsx`.

☐ Write down its path.

☐ Find the matching `Route` in `App.jsx`.

☐ Open the page component rendered by that route.

☐ Explain the connection to another learner or your tutor.

The route I traced:

____________________________________

The page component it renders:

____________________________________

## Plan One Route For Your Project

| Link text | Route path | Page component |
| --- | --- | --- |
|   |   |   |

Before adding the pattern to your project, explain why this content should be
a separate view rather than a section on the current page.

____________________________________

____________________________________

> Professional developers inspect documentation and working examples. The
> goal is to understand the pattern and adapt it, not to copy code you cannot
> explain.

---

# Stretch Activity 3

## Move Beyond Browser Storage

So far your application stores information in your own browser using `localStorage`.

Professional web applications often store information in an online database so that users can access it from multiple devices.

One popular option is **Supabase**.

If you'd like to explore further, create a free Supabase project and experiment with replacing your browser storage.

For example:

```javascript
// Read tasks
const { data: tasks } = await supabase
  .from('tasks')
  .select('*')

// Save a task
await supabase
  .from('tasks')
  .insert({
    title: newTask.title,
    priority: newTask.priority,
    status: newTask.status
  })
```

This is **not** required for the bootcamp.

Treat it as an optional exploration of how professional web applications store information online.

---

# End-of-Day Reflection

Complete these sentences.

Today I learned...

____________________________________

____________________________________

The biggest improvement to my application was...

____________________________________

____________________________________

The next thing I want to build is...

____________________________________

____________________________________
