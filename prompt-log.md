# IslaGabay — Lab Activity #4 Prompt Log

## Record status

This log links the five experiment records in [`outputs/`](./outputs/). The project contains the current website and a preserved Task 2 baseline at [`task-2-baseline/index.html`](./task-2-baseline/index.html), but no original Copilot conversation transcript was available when these records were prepared. Therefore, the exact historical prompts, verbatim Copilot responses, and experiment-specific observations are marked for the student to fill in. Code descriptions below refer to files currently in the workspace; they are not presented as past Copilot responses.

Do not replace a placeholder with reconstructed wording or a test result unless it is supported by your actual conversation or a test you perform.

## Project context — Task 1

- **Sector:** Tourism and cultural innovation.
- **Project:** IslaGabay — Marinduque Culture & Tourism Guide.
- **Local challenge:** Visitors may need a clear starting point for discovering Marinduque destinations and traditions. Access, conditions, and travel arrangements should be confirmed with local sources.
- **Target users:** Prospective domestic and international visitors, first-time travelers to Marinduque, and residents or community organizations sharing a basic visitor guide.
- **Proposed solution:** A responsive, single-page guide to sample destinations, local culture, and responsible-travel practices. It is a prototype, not an official directory or booking service.
- **Technology constraint:** Semantic HTML, CSS, and vanilla JavaScript; no backend, database, or external frontend framework.

## Task 2 — Zero-Shot Prompting

**Record:** [`outputs/task-2-zero-shot.md`](./outputs/task-2-zero-shot.md)

**Artifact available:** [`task-2-baseline/index.html`](./task-2-baseline/index.html) is the preserved baseline. Do not overwrite it. The baseline contains a hero, introduction, three destination cards, a culture section, and a visit call to action.

**Still needed:** Add the exact original prompt, verbatim Copilot output, and your actual experiment observations to the linked record.

## Task 3 — Structured Prompt

**Record:** [`outputs/task-3-structured-prompt.md`](./outputs/task-3-structured-prompt.md)

**Artifact available:** The current page is implemented in [`index.html`](./index.html), [`style.css`](./style.css), and [`script.js`](./script.js). It includes four sample destination cards, search and category filters, a no-results message, a culture section, and an interactive responsible-travel checklist.

**Still needed:** Add the exact original structured prompt, verbatim Copilot output, and the results of tests you perform.

## Task 4A — Few-Shot Prompting

**Record:** [`outputs/task-4a-few-shot.md`](./outputs/task-4a-few-shot.md)

**Artifact available:** The current checklist includes static HTML entries and additional entries represented as item/category/description data in [`script.js`](./script.js).

**Still needed:** Add the exact prompt with its original examples, the verbatim Copilot output, and your actual comparison and browser test results.

## Task 4B — Role Assignment

**Record:** [`outputs/task-4b-role-assignment.md`](./outputs/task-4b-role-assignment.md)

**Artifact available:** Source review shows semantic landmarks, labeled controls, image alternatives, live status regions, and keyboard-focus styling. This source review is not a full accessibility audit and is not a saved role-based Copilot response.

**Still needed:** Add the actual role-assignment prompt and response, then record the accessibility checks you really perform.

## Task 5 — Analysis and Refinement

**Record:** [`outputs/task-5-analysis.md`](./outputs/task-5-analysis.md)

**Artifact available:** The current checklist is generated and updated by [`script.js`](./script.js) and styled by [`style.css`](./style.css).

**Still needed:** Add the actual analysis prompt and response, identify the issue you selected and the source changes you made, and record the browser verification results. The previous experiment transcript and before/after evidence are not present in the project files.

## Task 6 — Final Reflection

### Evidence-based comparison

- **Zero-shot and baseline:** The preserved baseline provides a static tourism landing page. The current root page additionally includes destination search and filters, a no-results state, and a responsible-travel checklist.
- **Structured prompt artifact:** The current files implement the main tourism content and interactions described above, using HTML, CSS, and vanilla JavaScript.
- **Few-shot artifact:** The JavaScript checklist entries use a consistent item/category/description data shape.
- **Role-assignment artifact:** The current source contains accessibility-supporting features, but source inspection alone cannot establish full accessibility conformance.
- **Analysis/refinement:** The current checklist has separate data fields and progress/reset behavior. Without the historical prompt, response, and test notes, this log cannot attribute a change to Task 5 or confirm the result of that experiment.

These observations compare artifacts currently available in the project. They do not prove which prompt produced a particular feature or what Copilot said at the time.

### Student reflection — complete before submission

- **Which prompting approach helped you most, and why?** [Write your own reflection based on the actual conversations and results.]
- **What changed between the Task 2 baseline and the current prototype?** [Describe changes you verified.]
- **What did you learn from testing or refining the website?** [Record your own experience.]
- **What would you improve next?** [Name a realistic next step.]

## Submission checklist

- [x] Preserve the Task 2 baseline at [`task-2-baseline/index.html`](./task-2-baseline/index.html).
- [x] Create five experiment record templates in [`outputs/`](./outputs/).
- [x] Add project overview and run instructions in [`README.md`](./README.md).
- [x] Organize the five experiments and include a Task 6 reflection section.
- [ ] Fill each experiment's exact prompt and actual Copilot output from the original conversations.
- [ ] Add your own experiment observations and actual browser test results to the output records.
- [ ] Complete the Task 6 student reflection.
- [ ] Add any repository or hosted-demo links required by your instructor.
