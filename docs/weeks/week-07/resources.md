# Week 7 Resources

## Get Ready to Share

This week is primarily a developer studio. These resources support building,
deploying, testing and presenting your own project.

Your project does not need to be polished or complete. Use the material that
helps you make the next useful decision; you do not need to read everything.

---

# Essential Guides

## Vite

- [Vite – Deploying a Static Site](https://vite.dev/guide/static-deploy.html)

The GitHub Pages section explains why a Vite application needs a production
build and how its base path changes when it is hosted inside a project URL.

## GitHub Pages

- [GitHub – Configuring a Publishing Source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub – Using Custom Workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [GitHub – Viewing Workflow Run History](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history)

The course provides the workflow through the Week 7 Showcase. You are not
expected to design or type a GitHub Actions workflow during Week 7.

---

# Before You Deploy

## Preserve a stable version

1. Test the project's main user journey locally.
2. Commit the latest stable version.
3. Push the commit to GitHub.
4. Keep a note of the commit you intend to present.

## Create a production build

Run:

```bash
npm run build
```

Development mode is forgiving. A production build may reveal missing imports,
incorrect file-name capitalisation or other errors that need attention.

If the build succeeds, check it locally:

```bash
npm run preview
```

Open the address Vite displays and test the main user journey again.

---

# Deploy with the Course Workflow

The Week 7 Showcase contains a supplied `deploy-pages.yml` workflow. It
performs four jobs:

1. Check out the repository.
2. Install the project's dependencies.
3. Build the project using the repository's GitHub Pages base path.
4. Publish the `dist` directory to GitHub Pages.

Find it in the Showcase at:

```text
src/project-tracker/week-07/showcase/.github/workflows/deploy-pages.yml
```

Copy it—do not retype it—to the root of your own project repository at:

```text
.github/workflows/deploy-pages.yml
```

Then:

1. Commit and push the workflow.
2. Open the repository on GitHub.
3. Select **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open the **Actions** tab and select the deployment run.
6. When it succeeds, open the published URL.

The workflow runs after a push to `main`. It can also be started manually from
the Actions tab.

## Root project or nested project?

The workflow inside the Showcase is the learner starting point. It assumes this
common structure:

```text
your-project/
├── .github/workflows/deploy-pages.yml
├── package.json
├── package-lock.json
└── src/
```

The course cohort repository is different: its Showcase is nested inside
`src/project-tracker/week-07/showcase/`. The cohort therefore uses a separate
root-level `deploy-showcase.yml` with paths written for that repository.

Do not copy the cohort-specific workflow unchanged. If your own application is
nested, the working directory, npm cache lockfile and uploaded `dist` path must
all point to your application folder. Ask for support before adapting them.

## Why the build uses a base path

A GitHub project site normally lives at:

```text
https://username.github.io/repository-name/
```

Vite needs `/repository-name/` when it creates links to JavaScript, CSS and
other assets. The course workflow derives this value from the GitHub repository
name, so learners do not need to hard-code it in `vite.config.js`.

---

# React Router and GitHub Pages

## No React Router

Nothing extra is required. Deploy the application and test its main journey.

## `HashRouter`

`HashRouter` produces addresses such as:

```text
https://username.github.io/repository-name/#/about
```

The route after `#` stays in the browser. This makes hash-based routes
straightforward to host on GitHub Pages.

After deployment:

1. Use the application's navigation to open each view you plan to show.
2. Refresh the page.
3. Copy the complete URL into a new tab.

The Week 7 Showcase uses this course-supported approach.

## `BrowserRouter`

Navigation may appear to work until somebody refreshes a URL such as `/about`
or opens it directly. GitHub Pages then looks for a real file at that path and
may return a 404 page.

For this bootcamp, ask for support and consider changing to `HashRouter`.
Clean `BrowserRouter` URLs and `404.html` redirect workarounds are outside the
scope of Week 7.

Do not add React Router merely for deployment. If one page is enough for your
project, keep one page.

---

# Deployment Troubleshooting

| What you see | First checks |
| --- | --- |
| `npm run build` fails | Read the first useful error. Check imports, file names and syntax. |
| The Actions run fails during install | Confirm that `package.json` and `package-lock.json` are committed at the repository root. |
| The Actions run fails during build | Open the build step and compare its first useful error with your local build. |
| The published page is blank | Open the browser console. Check the workflow's base path and missing asset errors. |
| CSS or images are missing | Check import paths, file-name capitalisation and whether files were committed. |
| The home page works but refreshing another view gives 404 | Check whether the project uses `BrowserRouter`; use the routing guidance above. |
| Old information appears in the app | Remember that `localStorage` belongs to each website address. Clear it only if doing so is safe. |
| A recent change is not visible | Confirm that the latest workflow completed, then refresh without using the browser cache. |

Set a timebox. If deployment is still blocking useful work, record the problem
and prepare a presentation fallback.

---

# Presentation Fallbacks

Use the first practical option:

1. A deployed GitHub Pages version.
2. The project running locally with `npm run dev`.
3. A previous working version.
4. Screenshots or a short recording.
5. Selected code and an explanation of the intended behaviour.

A deployment problem does not erase the software you built or what you learned.

---

# Peer Testing Checklist

Ask a partner to attempt the project's main goal without showing them how.

Observe:

- what they notice first
- what they try to click or enter
- where they hesitate
- what behaves as they expect
- what behaves differently

Do not implement every suggestion. Decide which feedback matters for the
project you are presenting.

---

# Five-Minute Presentation Checklist

Prepare concise answers to these prompts:

1. What did you set out to build?
2. What did you actually build?
3. Show us one part of it.
4. What decisions did you make?
5. What challenged you, and how did you respond?
6. What did you learn, or what would you do next?

Slides are optional. Rehearse the exact route you will use to open the project,
and have your fallback ready before the presentation begins.

> Five minutes is a limit, not a target you must fill.
