const searchInput = document.querySelector("#destination-search");
const filterButtons = document.querySelectorAll(".filter-button");
const destinationCards = document.querySelectorAll(".place-card");
const emptyState = document.querySelector("#empty-state");
const resultsCount = document.querySelector("#results-count");

let activeCategory = "all";

function updateDestinations() {
  const searchText = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  // A card stays visible only when it matches both the search and selected category.
  destinationCards.forEach((card) => {
    const matchesCategory =
      activeCategory === "all" || card.dataset.category === activeCategory;
    const searchableText = `${card.querySelector("h3").textContent} ${
      card.querySelector("p").textContent
    }`.toLowerCase();
    const matchesSearch = searchableText.includes(searchText);
    const isVisible = matchesCategory && matchesSearch;

    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  resultsCount.textContent = `${visibleCount} ${
    visibleCount === 1 ? "destination" : "destinations"
  } shown`;
  emptyState.hidden = visibleCount !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    filterButtons.forEach((filterButton) => {
      filterButton.setAttribute(
        "aria-pressed",
        String(filterButton === button)
      );
    });

    updateDestinations();
  });
});

searchInput.addEventListener("input", updateDestinations);
updateDestinations();

const additionalChecklistItems = [
  {
    item: "Be mindful of water and energy",
    category: "Environment",
    description: "Turn off taps, lights, and air conditioning when you do not need them."
  },
  {
    item: "Keep noise considerate",
    category: "Community",
    description: "Keep conversations and music at a considerate volume in shared spaces."
  },
  {
    item: "Learn before you visit",
    category: "Culture",
    description: "Read about local customs and stay open to guidance from local people."
  },
  {
    item: "Choose lower-impact transport",
    category: "Environment",
    description: "Walk, cycle, or share a ride when practical."
  }
];

const checklist = document.querySelector(".checklist");

additionalChecklistItems.forEach((checklistItem) => {
  const listItem = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const details = document.createElement("span");
  const item = document.createElement("strong");
  const category = document.createElement("span");
  const description = document.createElement("span");

  checkbox.className = "checklist-item";
  checkbox.type = "checkbox";
  details.className = "checklist-item-details";
  item.textContent = checklistItem.item;
  category.className = "checklist-item-category";
  category.textContent = checklistItem.category;
  description.textContent = checklistItem.description;
  details.append(item, category, description);

  label.append(checkbox, details);
  listItem.append(label);
  checklist.append(listItem);
});

const checklistItems = document.querySelectorAll(".checklist-item");
const checklistProgress = document.querySelector("#checklist-progress");
const resetChecklistButton = document.querySelector("#reset-checklist");

function updateChecklistProgress() {
  const completedCount = document.querySelectorAll(
    ".checklist-item:checked"
  ).length;

  checklistProgress.textContent = `${completedCount} of ${checklistItems.length} completed`;
}

checklistItems.forEach((item) => {
  item.addEventListener("change", updateChecklistProgress);
});

resetChecklistButton.addEventListener("click", () => {
  checklistItems.forEach((item) => {
    item.checked = false;
  });

  updateChecklistProgress();
});

updateChecklistProgress();
