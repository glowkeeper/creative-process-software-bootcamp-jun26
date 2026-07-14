---
marp: true
paginate: true
footer: Week 6
---

# Software Development Bootcamp

## Week 6

Remembering Information

Dr Steve Huckle

<!--
Welcome everyone back.

Last week we spent time consolidating everything we'd learned about React.

Hopefully you now feel much more comfortable building your own applications.

Today we're introducing just one new idea.

It's a surprisingly small amount of code...

...but it makes a huge difference to how your application feels.

Most of today will be spent applying this idea to your own projects.
-->

---

<!-- _class: mentimeter-slide -->

# Confidence Check

## Mentimeter Activity

<!--
MENTIMETER

Question:
How confident do you currently feel developing your React application?

Purpose:
Establish a baseline before introducing persistence.

Discussion:

Hopefully confidence has increased following last week's consolidation session.

Today introduces just one new concept, leaving plenty of time to continue developing learner-owned projects.
-->

---

# Today's Goal

Today we'll make our React applications remember information.

We'll improve the Project Tracker reference application...

...and then apply exactly the same idea to our own projects.

By the end of today your application should continue working after the browser is refreshed.

<!--

Today's goal is deliberately small.

We are not introducing lots of new React concepts.

We're improving the experience of using an application we've already built.

-->

---

<!-- _class: big-idea section-slide -->

# Big Idea

## Good applications remember.

## Not everything.

## The things users expect them to remember.

<!--

Everything we do today comes back to this idea.

The challenge isn't simply storing data.

The challenge is deciding what information users expect an application to remember.

-->

---

# Looking Back

Our React applications can already:

- Display information
- Respond to user input
- Update themselves automatically
- Organise code using components
- Manage state with `useState()`

<!--

Celebrate progress.

Only six weeks ago most of this was completely new.

Now we're ready to make our applications feel much more professional.

-->

---

# A Problem

Let's try something...

1. Add a task
2. Refresh the browser

What happened?

<!--

Live demonstration.

Open the Week 6 Starter application.

Add a task.

Refresh the browser.

The new task disappears.

Ask:

"Is React broken?"

The answer is obviously no.

The application is behaving exactly as we built it.

-->

---

# Is React Broken?

No.

React remembers information...

...only while your application is running.

Refreshing the browser starts a brand new application.

<!--

This is an important distinction.

React state belongs to the running application.

Close or refresh the application...

...and that state disappears.

-->

---

# React State

```text
React State

↓

Fast

↓

Temporary
```

<!--

React state is perfect for information we need right now.

It updates the interface immediately.

But it is temporary.

When the application starts again, React creates brand new state.

-->

---

# Browser Storage

```text
localStorage

↓

Simple

↓

Persistent
```

<!--

localStorage belongs to the browser.

Not the React application.

That means information can survive:

- refreshes
- closing the browser
- reopening the browser

without introducing databases or servers.

-->

---

# Today's Journey

```text
Starter Application

↓

Tasks disappear

↓

Read saved tasks

↓

Save updated tasks

↓

Refresh

↓

Tasks remain
```

<!--

Today's guided build is intentionally small.

There are only two real coding steps.

The payoff, however, is enormous.

Afterwards we'll spend most of today's session applying the same idea to your own projects.

-->

---

<!-- _class: guided-build section-slide -->

# Guided Build

## Making Our Application Remember

<!--

We'll improve the Project Tracker reference application.

We'll only introduce two small pieces of code.

Everything else already exists.

The application architecture doesn't change.

We're simply teaching it how to remember.

-->

---

# Step 1

## Loading Existing Tasks

```javascript
const [tasks, setTasks] = useState(getInitialTasks)
```

<!--

This line doesn't look very different from Week 4.

But one small change makes a big difference.

Instead of passing React an array...

...we're passing it a function.

That function decides what the initial task list should be.

-->

---

# A Small Detail

Notice...

```javascript
useState(getInitialTasks)
```

There are **no brackets** after `getInitialTasks`.

<!--

Professional Tip

If we wrote:

useState(getInitialTasks())

JavaScript would call the function every time App re-renders.

React would ignore the result after the first render...

...but the function would still execute.

Passing the function itself allows React to call it only once when it creates the state.

You don't need learners to memorise this.

Simply point it out as an example of thoughtful React code.

-->

---

# Where Do The Tasks Come From?

```javascript
function getInitialTasks() {
  const savedTasks =
    localStorage.getItem(savedTasksKey)

  if (savedTasks !== null) {
    return JSON.parse(savedTasks)
  }

  return initialTasks
}
```

<!--

Read this slowly.

Ask learners:

What happens if we've saved tasks before?

Answer:

Return those tasks.

Otherwise...

Return the original starter tasks.

That's all this function does.

-->

---

# What Happens?

```text
Application Starts

↓

Look Inside Browser Storage

↓

Tasks Found?

↓

Yes → Use Them

No  → Use Default Tasks
```

<!--

This is simply a decision.

The application asks:

"Have I been here before?"

If yes...

Continue where the user left off.

-->

---

# Step 2

## Saving Updated Tasks

```javascript
useEffect(function () {
  localStorage.setItem(
    savedTasksKey,
    JSON.stringify(tasks)
  )
}, [tasks])
```

<!--

This is the second—and final—piece of new code.

Whenever the tasks change...

Save them.

That's the entire persistence mechanism.

-->

---

# Why useEffect?

Think about what happens...

```text
Task Changes

↓

React Updates State

↓

Save Tasks

↓

Ready For Next Time
```

<!--

We don't want to save continuously.

We only need to save when the task list changes.

useEffect lets React do exactly that.

-->

---

# Before And After

| Before | After |
|---------|-------|
| Add Task | Add Task |
| Refresh | Refresh |
| Task disappears | Task remains |

<!--

Demonstrate this live.

The interface hasn't changed.

The architecture hasn't changed.

We've only added a little code...

...but the application feels much more professional.

-->

---

# A Better User Experience

Imagine writing:

- A shopping list
- Revision notes
- A to-do list

Would you expect them to disappear every time you refreshed the page?

<!--

Almost everyone says "No."

This isn't really about React.

It's about building software people can trust.

-->

---

# What Should We Remember?

Should these be remembered?

- Tasks ✅
- Completed tasks ✅
- Current filter 🤔
- Search text 🤔
- Open dialog ❌

<!--

There isn't always one correct answer.

This is a design decision.

Professional developers decide what belongs in long-term storage...

...and what belongs only in temporary application state.

-->

---

# The Reference Application

The Project Tracker now remembers tasks.

Your application will probably need to remember something different.

Ask yourself:

> **What should my application remember?**

<!--

Restaurant finder?

Favourite restaurants.

Recipe app?

Saved recipes.

Habit tracker?

Current habits.

Workout tracker?

Workout history.

Every project has different needs.

-->

---

# Today's Development Goals

## Minimum

- Make one important piece of information persistent.

## Target

- Persist everything your users would reasonably expect.

## Stretch

Improve the quality of your persistence.

Or investigate routing if your application needs separate views.

<!--

Do not introduce online databases.

Today's goal is browser persistence only.

Students needing a bigger challenge can improve their implementation.

Routing is optional and lives only in the Showcase reference application.

-->

---

<!-- _class: stretch-activity section-slide -->

# Optional Stretch

## Does Your Application Need Separate Views?

Use:

- An anchor for another section on the same page
- A route for another view inside your application
- A normal web link for another website

<!--

Do not present routing as a Week 6 requirement.

Some learner projects now need navigation between genuinely separate views.
For those learners, introduce the Showcase as code to investigate.

-->

---

# Professional Developers Reference Code

They:

1. Run a working example
2. Locate the relevant files
3. Trace how the pieces connect
4. Explain the pattern
5. Adapt only what they need

<!--

Referencing working code is a normal professional practice.

The important distinction is between understanding and unexplained copying.

Learners should be able to explain every line they add to their own project.

-->

---

# Trace A Showcase Route

```text
NavLink in Header.jsx

↓ matching path

Route in App.jsx

↓ renders

Page component in src/pages/
```

<!--

Run the Week 6 Showcase and select About.

Ask learners to follow /about from Header.jsx to App.jsx and then to
AboutPage.jsx.

This is an investigation, not a follow-along build.

-->

---

# The Routing Pattern

```jsx
<NavLink to="/about">About</NavLink>

<Routes>
  <Route path="/about" element={<AboutPage />} />
</Routes>
```

The path connects the link to the page component.

<!--

Keep the mental model small: a path maps to a component.

The Showcase also contains HashRouter in main.jsx. It uses hash-based URLs so
the application remains straightforward to deploy to static hosting.

Do not introduce nested routes, loaders or programmatic navigation.

-->

---

# Before You Adapt It

Can you explain:

- Why the application needs a router?
- Where the router wraps the application?
- How a `NavLink` path matches a `Route` path?
- Which component the route renders?

If yes, adapt the pattern to one view in your own application.

---

<!-- _class: guided-build section-slide -->

# Developer Studio

## Time To Build

<!--

This is now the longest part of today's workshop.

Circulate continuously.

Help learners identify:

• What should be remembered?

• Where does that state currently live?

• How can they initialise it?

• When should it be saved?

Encourage learners to help one another.

The reference application remains available as a guide throughout.

-->

---

# Reflection

## What did your application learn to remember today?

Think about:

- What did you choose to save?
- Why did you choose that information?
- Was there anything you deliberately chose **not** to save?

<!--

Today's lesson wasn't really about localStorage.

It was about making thoughtful design decisions.

Different applications should remember different things.

Encourage learners to share examples from their own projects.

-->

---

<!-- _class: mentimeter-slide section-slide -->

# Confidence Check

## Mentimeter Activity

<!--

MENTIMETER

Question:

How confident do you now feel adding persistence to a React application?

Purpose:

Measure confidence following today's guided build.

Discussion:

Compare with the confidence check from the beginning of the session.

Most learners should now feel that persistence is a relatively small addition with a significant impact on user experience.

-->

---

<!-- _class: recap section-slide -->

# What Have We Learned Today?

- React state is temporary
- `localStorage` survives browser refreshes
- `useState()` can initialise state from browser storage
- `useEffect()` can automatically save changes
- Good applications remember the information users expect them to remember

<!--

Return to today's Big Idea.

Good applications remember.

Not everything.

The things users expect them to remember.

We've only added a small amount of code today...

...but we've made our applications feel much more professional.

-->

---

# Looking Ahead

Next week we'll prepare our applications for other people to use.

We'll learn how to:

- Build our application
- Deploy it
- Share it
- Prepare for our Week 8 presentations

<!--

By next week your application should be feeling like a genuine software project.

We'll take the final step...

...sharing it with other people.

-->

---

# Week 7

## Sharing Your Application

```text
Build

↓

Deploy

↓

Present
```

<!--

We'll explore how professional developers package and share their applications.

By the end of next week you'll have a URL that you can share with anyone.

-->

---

# Thank You

Questions?

Dr Steve Huckle

steve@huckle.studio

<!--

Spend the majority of today's workshop supporting learners with their own projects.

The reference application is now just that:

A reference.

The real learning happens in their own applications.

Celebrate every learner who leaves today with an application that remembers something important.

-->

<!-- EXPORT-IGNORE-START -->

---

# Mentimeter AI Import

<!--

INTERNAL AUTHORING SECTION

Type: Scale

Question:

How confident do you currently feel developing your React application?

Options:

- Very Unconfident
- Unconfident
- Neutral
- Confident
- Very Confident

---

Type: Scale

Question:

How confident do you now feel adding persistence to a React application?

Options:

- Very Unconfident
- Unconfident
- Neutral
- Confident
- Very Confident

-->

<!-- EXPORT-IGNORE-END -->
