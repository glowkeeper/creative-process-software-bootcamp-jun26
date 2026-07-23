---
marp: true
paginate: true
footer: Week 7
---

# Software Development Bootcamp

## Week 7

Get Ready to Share

Dr Steve Huckle

<!--
Keep the opening brief.

Today is a project-release studio. Learners should spend most of the session at
their own keyboards.
-->

---

# Your Project Does Not Need to Be...

- Polished
- Complete
- Full of features
- The same as anybody else's

<!--
Establish this before discussing deployment or presentations.

Things taking longer than expected and adjusting scope are normal parts of
software development.
-->

---

# Today Is About...

- What you built
- The decisions you made
- The challenges you encountered
- How you responded
- What you learned

<!--
The project is evidence of a development process, not a product-design contest.
-->

---

# Today's Goal

Make the most important part of your project:

## Understandable

## Reliable

## Ready to share

<!--
Ready to share does not mean finished.

It means the learner can show something meaningful and explain it honestly.
-->

---

# Today's Journey

```text
Take Stock → Release Plan → Improve

↓

Peer Test → Respond and Stabilise

↓

Build and Deploy → Prepare and Rehearse
```

<!--
Give learners the shape of the day before introducing the Big Idea.

The three breaks appear explicitly as we move through the journey.
-->

---

<!-- _class: big-idea section-slide -->

# Big Idea

## Good software is improved through iteration.

---

# Iteration

```text
Choose

↓

Change

↓

Test

↓

Learn
```

<!--
Iteration is not simply adding more.

Each cycle gives us evidence for the next decision.
-->

---

# Finishing Is a Development Skill

Finishing includes deciding:

- What matters now
- What is reliable enough to show
- What needs testing
- What can wait

<!--
Reducing scope is not giving up. It is a professional response to limited time.
-->

---

# Take Stock

Open your project and GitHub Project board.

Ask:

- What works now?
- What is unfinished or uncertain?
- What is the most important user journey?

<!--
Allow learners to inspect the real project rather than answering from memory.

Refer back to Week 1: the project board is the plan for their project, while
the backlog captures work the project may need.
-->

---

# Your Essential User Journey

Complete:

> A user should be able to __________
>
> without __________________________.

Now try it.

<!--
Ask learners to demonstrate the journey immediately.

What actually happens matters more than what they remember happening.
-->

---

# Make a Release Plan

Review your project board.

1. Choose one must-do task.
2. Move it into **In Progress**.
3. Keep one worthwhile task in **Ready**.
4. Leave deferred work in your backlog.

<!--
The worthwhile improvement happens only if the must-do work is stable.

Encourage concrete, testable outcomes.

Allow approximately 20 minutes for release planning, including the essential
user journey and definition of done.

Do not ask learners to create a separate release-planning document. The board
they began in Week 1 remains the source of truth for planned project work.
-->

---

# Define Done

Not:

> Fix completed tasks.

Try:

> A user can mark a task complete and see its status change.

<!--
Definitions of done describe evidence rather than effort.

Ask learners to add or refine this outcome on the task in their project board.
It should be clear enough that they can test it before moving the task to Done.
-->

---

<!-- _class: section-slide -->

# Developer Studio 1

## Improve

Your project. Your decisions. Your keyboard.

<!--
Allow approximately 75 minutes.

By the checkpoint, learners should have made and tested one meaningful
improvement.
-->

---

# Work in Small Cycles

1. Choose one improvement.
2. Make the change.
3. Test the result.
4. Commit the stable version.
5. Review your plan.

<!--
Keep one task in In Progress on the project board. Add useful implementation
notes or discoveries to the task when appropriate.

Do not require a fixed number of changes or commits.
-->

---

# If You Become Stuck

Ask:

- What did I expect?
- What actually happened?
- What evidence can I see?
- What is the smallest next test?
- What was the last working version?

<!--
Encourage learners to use the console, terminal and version history as evidence.
-->

---

# Studio Checkpoint

- Does the task's intended outcome work?
- If yes, move it to **Done**.
- If not, keep it **In Progress** and record the next step.
- Put new ideas in the backlog—not into today's scope.

<!--
Use this as a brief standing checkpoint rather than a long group report.

The board should show the honest state of the work. A task does not need to be
moved to Done simply because the studio block has ended.
-->

---

<!-- _class: section-slide -->

# Morning Break

## Save your work first

<!--
Before the break, ask learners to save and commit a stable version where
possible.
-->

---

<!-- _class: section-slide -->

# Peer Test

## Observe before you explain

<!--
Allow approximately 30 minutes for both partners to test and record evidence.

By the checkpoint, each learner should have recorded observations and chosen
one response.
-->

---

# Give Your Partner One Goal

For example:

> Add a task and mark it complete.

Do not show them how.

Watch what happens.

<!--
The owner may intervene if the tester is completely blocked or continuing would
cause a problem.
-->

---

# Record Evidence

- What did they understand immediately?
- Where did they hesitate?
- What behaved unexpectedly?
- What feedback matters now?
- What will you defer?

<!--
Feedback is information, not a compulsory list of changes.
-->

---

# Developer Studio 2

## Respond and Stabilise

Choose one response to the evidence.

Then:

```text
Change → Test → Commit
```

<!--
Allow approximately 45 minutes.

Encourage a stable commit before the deployment checkpoint.

By lunch, learners should have responded to one useful observation, tested the
essential user journey, preserved a stable version and stopped adding scope.
-->

---

<!-- _class: section-slide -->

# Lunch

## Save and commit before you leave

<!--
The next block begins with the production build and deployment attempt.
-->

---

<!-- _class: section-slide -->

# Build and Share

## Deployment is useful—not a verdict.

<!--
Allow approximately 60 minutes for the production build and deployment attempt.

By the checkpoint, learners should have either a published URL or a recorded
deployment problem and fallback route.

Introduce the model briefly:

Source code → GitHub Actions builds → GitHub Pages hosts dist
-->

---

# Before GitHub Pages

1. Commit stable work.
2. Run `npm run build`.
3. Run `npm run preview`.
4. Test the essential journey.

<!--
A successful build command is not sufficient. Learners need to open and use
the preview.
-->

---

# Deploy Your Project

Use the workflow from the Week 7 Showcase:

```text
.github/workflows/deploy-pages.yml
```

Copy it to the same path in your project, then commit and push.

<!--
Learners are not expected to author the YAML.

Do not type the file line by line. Demonstrate copying it from the Showcase into
the root of a prepared project repository.

The cohort repository uses a different root-level workflow because its
Showcase is nested. Learners should adapt the simpler workflow inside the
Showcase, not copy the cohort-specific paths unchanged.

Then show Settings → Pages, the Actions run, where a failure appears and the
completed published Showcase.

Keep the walkthrough to approximately 10–15 minutes, then return learners to
their own keyboards and the detailed resources guide.
-->

---

# Test What You Published

- Open the published URL
- Try the essential user journey
- Check images and styles
- Refresh any routed view
- Open the presentation URL in a new tab

<!--
Local success does not prove that the published version works.

If the project uses HashRouter, URLs containing # are expected. Test a routed
view by refreshing it and opening the full address in a new tab.

If it uses BrowserRouter, ask the learner to consult the resources before
changing it. Do not introduce the 404 redirect workaround.

Use a timebox. Deployment trouble must not consume rehearsal time.

If deployment fails, record what failed, keep the evidence and prepare another
way to demonstrate.
-->

---

# Your Demonstration Options

1. Published GitHub Pages site
2. Project running locally
3. Previous working version
4. Screenshots or a short recording
5. Code and an explanation

<!--
All five can support a valid Week 8 presentation.

Before moving on, each learner needs either a tested published URL or a
recorded deployment problem and another demonstration route.

Do not let deployment consume rehearsal time.
-->

---

# Stabilise or Prepare Your Fallback

Use this block to:

- Fix a small, understood issue
- Test the version you will show
- Prepare local data, screenshots or a recording
- Practise opening your demonstration quickly

<!--
Allow approximately 45 minutes.

This is not another feature-development block.

Help learners leave it with a demonstrable version and a credible fallback.
-->

---

<!-- _class: section-slide -->

# Afternoon Break

## Your presentation is next

<!--
Ask learners to return ready to prepare concise notes and rehearse.
-->

---

<!-- _class: section-slide -->

# Week 8

## Prepare to tell the story of your project

<!--
Allow approximately 25 minutes.

By the checkpoint, learners should have concise notes for the six prompts and
know exactly what they intend to demonstrate.
-->

---

# Your Five-Minute Presentation

1. What did you set out to build?
2. What did you actually build?
3. Show us one part of it.
4. What decisions did you make?
5. What challenged you, and how did you respond?
6. What did you learn, or what would you do next?

<!--
These are prompts, not six equally weighted sections.
-->

---

# A Possible Shape

- **1 minute:** intention and current outcome
- **2 minutes:** demonstration
- **1 minute:** decisions and challenges
- **1 minute:** learning and next steps

<!--
Five minutes is a maximum.

A clear three- or four-minute presentation is completely acceptable.
-->

---

# Slides Are Optional

Use what helps you communicate:

- Your application
- A deployed or local version
- Screenshots
- Selected code
- Brief notes
- A small number of slides

<!--
Do not let slide-making become a new polishing task.
-->

---

# Rehearse in Pairs

Present for no more than five minutes.

Your partner answers:

1. What was clear?
2. What would you like to hear more about?
3. What could be shortened?

<!--
Allow approximately 30 minutes.

Allow enough time for both partners to present, receive feedback and note one
change.
-->

---

# Before You Leave

- Which version will you show?
- How will you open it?
- What is your fallback?
- Can you explain what is incomplete?
- Have you rehearsed within five minutes?

<!--
Allow approximately 15 minutes for the exit check and final reflection.
-->

---

# Final Reflection

- What improvement mattered most today?
- What did you deliberately choose not to do?
- What part of your story do you want to share?

---

<!-- _class: big-idea section-slide -->

# Your project is evidence of your learning,

## not a test of perfection.

---

# Next Week

## Project Showcase

```text
5 minutes presenting

+

3 minutes for questions and feedback
```

<!--
There are approximately twelve learners in a 2.5-hour window.

Keep to eight-minute slots so transitions and technical delays do not remove
time from later presenters.
-->

---

# Mentimeter AI Import

<!--
No Mentimeter activity is required this week.

The session prioritises learner project work, peer testing and timed rehearsal.
-->
