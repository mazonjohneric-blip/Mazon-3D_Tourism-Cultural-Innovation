# IslaGabay — Marinduque Culture & Tourism Guide

IslaGabay is a responsive, single-page tourism guide prototype about Marinduque, Philippines. It introduces sample destinations, local culture, and considerate travel practices.

## Intended users and local challenge

The guide is for prospective domestic and international visitors, first-time travelers to Marinduque, and residents or community groups who want a simple visitor resource. Travelers may not know where to start when exploring local destinations and traditions. IslaGabay offers a starting point while reminding visitors to confirm current access, conditions, and arrangements with local sources.

This is a community-oriented prototype, not an official tourism directory or a booking service. Destination listings are samples.

## Features

- Responsive single-page layout with destination, culture, and responsible-travel sections.
- Sample destination cards with text search and category filters.
- An empty state when there are no matching destinations.
- A responsible-travel checklist with completion progress and a reset button.
- Semantic HTML, labeled controls, descriptive image alternatives, and keyboard-friendly controls.

## Built with

- Semantic HTML in `index.html`
- CSS in `style.css`
- Vanilla JavaScript in `script.js`

No backend, database, package installation, or external frontend framework is required. Destination and feature images use remote URLs, so an internet connection may be needed to load them.

## Project files

```text
.
├── index.html                 Current IslaGabay page
├── style.css                  Layout, colors, responsive rules, and image styling
├── script.js                  Destination filters and checklist interactions
├── prompt-log.md              Lab experiment index and Task 6 reflection
├── README.md                  Project overview and run instructions
├── outputs/
│   ├── task-2-zero-shot.md
│   ├── task-3-structured-prompt.md
│   ├── task-4a-few-shot.md
│   ├── task-4b-role-assignment.md
│   └── task-5-analysis.md
└── task-2-baseline/
    └── index.html             Preserved Task 2 baseline snapshot
```

## Run the website

1. Open the project folder in Visual Studio Code or File Explorer.
2. Open the root `index.html` in a web browser. You can also use the VS Code **Live Server** extension if it is already available.
3. Try searching for a destination, selecting a category filter, checking a travel item, and using **Reset checklist**.
4. Resize the browser window or use its responsive device view to check the mobile layout.

The `task-2-baseline/index.html` file is an archived baseline. Open the root `index.html` to use the current prototype.

## Lab Activity #4 evidence

The files in `outputs/` provide a consistent template for the five experiments. Historical exact prompts and verbatim Copilot responses were not available in the project, so those fields are intentionally marked for completion from the actual conversation history. Do not present reconstructed wording or unverified browser checks as historical evidence.
