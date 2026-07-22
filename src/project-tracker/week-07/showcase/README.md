# Project Tracker – Week 7 Showcase

This is the only Week 7 reference application state. Week 7 introduces no new
React concept, so there is no Starter or Complete application.

The Showcase begins with the Week 6 Showcase and brings the course ideas
together in a complete, adaptable project tracker.

## What the Project Can Do

- Add a task with a title and description.
- Edit an existing task.
- Move a task between To Do, In Progress and Done.
- Delete a task.
- Reset the example board.
- Save every board change in `localStorage`.
- Summarise task numbers and completion progress.
- Navigate between Dashboard, Summary and About views.
- Refresh or share hash-based routes on static hosting.

## Run the Project

```bash
npm install
npm run dev
```

Before deployment, create and check a production build:

```bash
npm run build
npm run preview
```

## Trace Before You Adapt

Choose one behaviour and follow it through the code:

1. Find the control the user interacts with.
2. Find the event handler in the component.
3. Follow the callback prop towards `App.jsx`.
4. Find the function that updates `tasks`.
5. Explain why the updated tasks appear in a different column.
6. Refresh the page and explain why the change remains.

The goal is not to copy the whole Project Tracker. Adapt only patterns your own
project needs, and make sure you can explain every line you use.

## Project Structure

```text
.github/
└── workflows/
    └── deploy-pages.yml       Course-provided GitHub Pages workflow
src/
├── App.jsx                    Shared task state and update functions
├── main.jsx                   React entry point and HashRouter
├── components/
│   ├── AddTaskForm.jsx        Adds tasks
│   ├── Board.jsx              Groups tasks into board columns
│   ├── TaskCard.jsx           Edits, moves and deletes a task
│   └── ...
├── pages/                     Dashboard, Summary, About and not-found views
├── styles/style.css
└── utils/taskStorage.js       Loads, validates, saves and clears tasks
```

## Adapt the Deployment Pattern

The Showcase contains:

```text
.github/workflows/deploy-pages.yml
```

GitHub only discovers workflows in that exact path at the root of a repository.
When adapting this pattern, copy the workflow to the root of your own project
repository—not into `src` or another nested folder.

The workflow assumes that `package.json`, `package-lock.json` and the Vite
application are also at the repository root. It:

1. Installs the project dependencies.
2. Builds the Vite application for the repository's Pages URL.
3. Uploads the generated `dist` directory.
4. Publishes it through GitHub Pages.

After committing and pushing the workflow, open the repository on GitHub and
select:

```text
Settings → Pages → Build and deployment → GitHub Actions
```

Then inspect the run in the Actions tab and test the published site.

### If your project is in a subfolder

Do not copy the cohort repository's `deploy-showcase.yml` unchanged. That file
contains paths written specifically for the nested course Showcase.

If your own Vite project is in a subfolder rather than at the repository root,
you will need to adapt three parts of the workflow:

1. Set the working directory for `npm ci` and `npm run build`.
2. Point `cache-dependency-path` to that project's `package-lock.json`.
3. Point the uploaded artifact path to that project's `dist` directory.

Ask for support before changing these paths. A path that is correct for the
cohort repository may not be correct for your repository.

## Routing on GitHub Pages

The Showcase uses `HashRouter`, so its routes look like:

```text
https://username.github.io/repository-name/#/about
```

The route after `#` remains in the browser. This avoids the direct-path 404
problem that `BrowserRouter` can encounter on static GitHub Pages hosting.

## Important Boundary

The Showcase is reference code, not the expected Week 7 outcome. A learner's
project does not need all these features, visual polish or a successful public
deployment. It needs a demonstrable version, an honest explanation and a
fallback if deployment is unavailable.
