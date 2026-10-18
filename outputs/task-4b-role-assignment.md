# Task 4B — Role Assignment

## Objective
Review the existing website from an accessibility reviewer's perspective.

## Exact Prompt
Act as a frontend accessibility reviewer.

Review my existing IslaGabay — Marinduque Culture & Tourism Guide project. Inspect index.html, style.css, and script.js before making recommendations.

Focus on:

Appropriate HTML headings and semantic elements.
Accessible labels for the search field and checklist controls.
Keyboard access and visible focus indicators.
Readability, spacing, and usability on small screens.
Whether the search, filters, checklist, and reset button can be used as intended.
Identify up to three specific issues that are supported by the actual code. For each issue, explain:
What the issue is.
Where it appears.
Why it matters.
The smallest practical improvement.
Do not invent problems that are not supported by the code. If you cannot verify an issue from the code alone, label it as needing a browser test. Do not redesign the whole website or remove existing features.
Use simple English suitable for a beginner. Give me a short list of manual tests to perform after applying any recommended changes.
## Actual Copilot Output
Accessibility review
The HTML uses a clear heading order and semantic elements. The search field has a label, checklist items are wrapped in labels, and keyboard focus has a visible outline. I found two specific areas to improve:

Some orange text has low contrast. In style.css, section labels use orange text; the culture link does too at style.css. Against the page backgrounds, this orange does not meet the 4.5:1 contrast target for normal text. Why it matters: Some people may have trouble reading it. Smallest improvement: Use a darker text color for these items, while keeping the current orange for decoration.

Navigation text is very small on narrow screens. At widths up to 480px, navigation links are 9px in style.css. Why it matters: Small text can be difficult to read on phones. Smallest improvement: Increase the mobile link size and let the navigation wrap if needed; check that it still fits at 320px wide.

## What Worked
Function check: In the browser, searching, filtering, checking an item, and resetting the checklist worked as intended. At 320px wide, I did not find horizontal overflow. The code also shows that search and checklist progress updates are announced politely to assistive technology.

## What Needs Improvement
[Identify any remaining problems or recommendations that you have not implemented.]

## Next Action / Verification
Manual tests after changes
Check text contrast with a contrast checker.
At 320px and 375px wide, confirm the navigation is readable and does not cause horizontal scrolling.
Use Tab and Enter/Space to reach and operate the search, filters, checklist, and reset button; confirm the focus outline is visible.