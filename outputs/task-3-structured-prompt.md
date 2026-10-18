# Task 3 — Structured Prompting

## Objective
To improve the IslaGabay website by using a structured prompt with Role, Task, Context, Constraints, Expected Output, and Acceptance Criteria.

## Exact Prompt
Act as a beginner-friendly frontend web developer.

TASK:
Create a responsive single-page website called "IslaGabay — Marinduque Culture & Tourism Guide."

CONTEXT:
The website is a small community-focused prototype that helps tourists and interested visitors explore tourism and culture in Marinduque, Philippines.

CONSTRAINTS:
Use semantic HTML, CSS, and vanilla JavaScript only. Do not use React, Bootstrap, backend services, databases, authentication, or external APIs. Use clearly labeled demonstration data when necessary. Do not invent official statistics or unsupported historical facts. Keep the code simple and add comments for beginners.

EXPECTED OUTPUT:
Create or update these files in my existing VS Code workspace:

index.html
style.css
script.js
Include:
A homepage with a title, introduction, and navigation.
Destination cards with sample tourism categories such as beaches, nature, and heritage.
A search bar and category filters.
A responsible tourism checklist with a progress counter and reset button.
ACCEPTANCE CRITERIA:
The page must be readable on desktop and mobile. The search and category filters must work together. The checklist must update its progress when items are checked, and the reset button must uncheck them. Use accessible labels and keyboard-friendly controls.
Before editing, inspect the existing project. Preserve the Task 2 baseline in a separate output folder. Explain which files you create or change and how to test the features. Use beginner-friendly explanations.
## Actual Copilot Output
Implemented IslaGabay — Marinduque Culture & Tourism Guide.

Files
index.html — semantic page structure, navigation, destination cards, filters, and responsible-travel checklist.
style.css — responsive layout, accessible focus styles, and CSS-only scenic illustrations.
script.js — combines search and category filters, updates the checklist count, and resets checked items.
Task 2 baseline — preserved copy of the original page in its own folder.
The destination cards are labeled as sample listings, with a reminder to check local conditions. The new page makes no external resource requests.

## What Worked
Open index.html in your browser. Choose a category and enter a search term—the results must match both. Check checklist items to update the progress count, then select Reset checklist. These controls are keyboard-friendly: use Tab to move between controls and Space or Enter to activate them.

## What Needs Improvement
[Describe the remaining issues you observed.]

## Comparison with Task 2
1. [First actual difference between the Task 2 baseline and Task 3 result.]
2. [Second actual difference between the Task 2 baseline and Task 3 result.]

## Next Action / Verification
Browser-tested the combined search and category filters, no-match state, checklist progress and reset, and layouts at mobile and desktop widths. No horizontal overflow was detected.