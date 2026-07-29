# Creative Process Software Development Bootcamp

Welcome to your Software Development Bootcamp repository.

This repository contains the course materials and Project Tracker examples from
the eight-week programme. Fork it into your own GitHub account and keep it as a
reference after the course: revisit the worksheets, run the examples and trace
how one application developed a week at a time.

> My goal isn't to build software with AI. My goal is to become a software
> developer who knows how to use AI well.

## Your journey

You are not here to copy one finished application. You are here to become a
developer by planning, building, testing, explaining and sharing software of
your own.

| Week | Your focus | Project Tracker example |
| --- | --- | --- |
| 1 | Choose a project, create a repository and backlog, and practise Git | You begin with your own idea |
| 2 | Create something people can see and use with HTML and CSS | A static, multi-page interface |
| 3 | Make the page do something with JavaScript and the DOM | Adding tasks and updating the page |
| 4 | Organise a growing application with React components, props and state | The same interface rebuilt as components |
| 5 | Strengthen your understanding through code review and developer studio | A React application to read and trace |
| 6 | Make the application remember useful information | Tasks saved in browser `localStorage` |
| 7 | Improve, test, build and prepare your project to share | A complete, deployable Showcase |
| 8 | Tell the story of what you built and the decisions you made | Your project is the showcase |

The course gradually gives you more independence. A smaller project you
understand is more valuable than a larger project you cannot explain.

## Find your course materials

Materials live in [`docs/weeks/`](docs/weeks/).

| Session | Materials |
| --- | --- |
| Introduction | [Slides](docs/weeks/intro/slides.md) |
| Working with AI | [AI Charter slides](docs/weeks/ai-charter/slides.md) |
| Week 1 | [Slides](docs/weeks/week-01/slides.md) · [Worksheet](docs/weeks/week-01/worksheet.md) · [Resources](docs/weeks/week-01/resources.md) |
| Week 2 | [Slides](docs/weeks/week-02/slides.md) · [Worksheet](docs/weeks/week-02/worksheet.md) · [Resources](docs/weeks/week-02/resources.md) |
| Week 3 | [Slides](docs/weeks/week-03/slides.md) · [Worksheet](docs/weeks/week-03/worksheet.md) · [Resources](docs/weeks/week-03/resources.md) |
| Week 4 | [Slides](docs/weeks/week-04/slides.md) · [Worksheet](docs/weeks/week-04/worksheet.md) · [Resources](docs/weeks/week-04/resources.md) |
| Week 5 | [Slides](docs/weeks/week-05/slides.md) · [Worksheet](docs/weeks/week-05/worksheet.md) · [Resources](docs/weeks/week-05/resources.md) |
| Week 6 | [Slides](docs/weeks/week-06/slides.md) · [Worksheet](docs/weeks/week-06/worksheet.md) · [Resources](docs/weeks/week-06/resources.md) |
| Week 7 | [Slides](docs/weeks/week-07/slides.md) · [Worksheet](docs/weeks/week-07/worksheet.md) · [Resources](docs/weeks/week-07/resources.md) |
| Week 8 | [Showcase slides](docs/weeks/week-08/slides.md) |

Use the worksheets to continue or repeat the practical work. Use the resources
when you need another explanation, official documentation or a next step.

## Explore the Project Tracker

The examples in [`src/project-tracker/`](src/project-tracker/) show how one
application changed during the course:

```text
HTML → CSS → JavaScript → React → persistence → deployment
```

Many weeks contain three versions:

- **Starter** — where the guided build begins.
- **Complete** — the core result of the guided build.
- **Showcase** — optional ideas showing how the application could go further.

Showcase does not mean “the answer”. Compare versions, run the code, change
something small and follow a feature across the files. Only reuse code that you
understand and can explain.

| Week | Examples |
| --- | --- |
| 2 | [Starter](src/project-tracker/week-02/starter/) · [Complete](src/project-tracker/week-02/complete/) · [Showcase](src/project-tracker/week-02/showcase/) |
| 3 | [Starter](src/project-tracker/week-03/starter/) · [Complete](src/project-tracker/week-03/complete/) · [Showcase](src/project-tracker/week-03/showcase/) |
| 4 | [Starter](src/project-tracker/week-04/starter/) · [Complete](src/project-tracker/week-04/complete/) · [Showcase](src/project-tracker/week-04/showcase/) |
| 5 | [Code Review](src/project-tracker/week-05/code-review/) |
| 6 | [Starter](src/project-tracker/week-06/starter/) · [Complete](src/project-tracker/week-06/complete/) · [Showcase](src/project-tracker/week-06/showcase/) |
| 7 | [Final Showcase](src/project-tracker/week-07/showcase/) |

Week 7's Showcase is the final runnable reference application. Week 8 is about
presenting and celebrating the learner projects.

## Run the final Showcase

The [Week 7 Showcase](src/project-tracker/week-07/showcase/) is a useful example
to return to after the course. You can add, edit, move and delete tasks. The
board is saved in your browser, and its separate views work on static hosting.

You need:

- a modern web browser;
- Git;
- Node.js 22 and npm;
- a code editor, such as Visual Studio Code.

From the root of this repository:

```bash
cd src/project-tracker/week-07/showcase
npm install
npm run dev
```

Open the local address printed in the terminal, usually
`http://localhost:5173`.

Stop the development server by returning to the terminal and pressing
<kbd>Ctrl</kbd>+<kbd>C</kbd>.

### Create a production build

Before deploying a Vite application, build it and check the result:

```bash
npm run build
npm run preview
```

- `npm run build` creates an optimised `dist/` folder.
- `npm run preview` lets you test that production build locally.

The application stores tasks using browser `localStorage`. Its data belongs to
the browser and address where you run it, so tasks in one browser or deployed
site will not automatically appear in another.

For a detailed map of the application, its features and its deployment choices,
read the [Week 7 Showcase README](src/project-tracker/week-07/showcase/README.md).

## Run an earlier example

Weeks 2 and 3 use plain HTML, CSS and JavaScript. Open the version's
`index.html` in a browser; there is nothing to install.

React examples from Week 4 onwards are separate Vite applications. Enter the
folder you want, then use the same pattern:

```bash
npm install
npm run dev
```

Each application has its own README where extra explanation is useful.

## Keep this repository

Forking creates your own copy on GitHub. Clone your fork when you want to work
with it on a computer:

```bash
git clone https://github.com/YOUR-USERNAME/creative-process-software-bootcamp-jun26.git
cd creative-process-software-bootcamp-jun26
```

Replace `YOUR-USERNAME` with your GitHub username.

This repository is a reference; your own project repository is the record of
your decisions and progress. Keep developing it after the bootcamp:

1. Choose one small improvement.
2. Add it to your backlog.
3. Work in a short, testable step.
4. Commit with a clear message.
5. Push your work to GitHub.
6. Explain what changed and what you learned.

When AI helps, ask it to explain, question and review your thinking. Stay in
control of the project and never submit code you could not confidently explain
to another student.
