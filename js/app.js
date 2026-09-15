import { fetchOffers } from "./data.js";
import { renderOffers, renderLoading, renderError } from "./render.js";
import { filterState, applyFilters } from "./filters.js";

// Select your HTML container element
const container = document.querySelector("#offers-container"); // Adjust selector to match your HTML

let allOffers = [];

async function init() {
  try {
    renderLoading(container);
    allOffers = await fetchOffers();
    renderOffers(allOffers, container);
  } catch (error) {
    console.error(error);
    renderError(container);
  }
}

init();
