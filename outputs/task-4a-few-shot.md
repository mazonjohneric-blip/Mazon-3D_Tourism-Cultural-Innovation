# Task 4A — Few-Shot Prompting

## Objective
To use examples to guide the consistency and format of destination information on the IslaGabay website.

## Exact Prompt
Act as a beginner frontend developer. Continue working on my existing IslaGabay — Marinduque Culture & Tourism Guide project.

I want to improve the responsible tourism checklist using few-shot prompting. Follow the examples below to maintain a consistent format.

Example 1:
Item: Respect heritage sites
Category: Heritage
Description: Follow site rules and treat cultural places respectfully.

Example 2:
Item: Reduce single-use waste
Category: Environment
Description: Use reusable items when practical and dispose of waste properly.

Task:

Generate four additional general responsible-tourism checklist items.
Follow the same Item, Category, and Description format for every item.
Keep the items practical, clear, and suitable for a tourism website.
Add the items to the existing checklist using beginner-friendly JavaScript.
Make sure the checklist progress counter and reset button still work.
Do not duplicate the two examples.
Do not invent official tourism rules or unsupported local facts.
Do not remove existing website features or create a new project.
Save or show the actual generated code and explain which files you changed. Tell me how to test the checklist in the browser.

## Actual Copilot Output
Added four general responsible-tourism items to the existing checklist:

Item: Be mindful of water and energy
Category: Environment
Description: Turn off taps, lights, and air conditioning when you do not need them.
Item: Keep noise considerate
Category: Community
Description: Keep conversations and music at a considerate volume in shared spaces.
Item: Learn before you visit
Category: Culture
Description: Read about local customs and stay open to guidance from local people.
Item: Choose lower-impact transport
Category: Environment
Description: Walk, cycle, or share a ride when practical.
Files changed

script.js — defines and adds the four items, then includes their checkboxes in the existing progress and reset behavior.
index.html — updates the initial counter to eight items.
style.css — displays each added item’s fields on separate lines.
Browser check: Verified the page shows eight checkboxes; checking one updates the counter to “1 of 8 completed,” and Reset returns it to “0 of 8 completed.”

To test it yourself, open or reload index.html, scroll to A responsible travel checklist, check a few items, then click Reset checklist.

