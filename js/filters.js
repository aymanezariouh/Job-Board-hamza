export const filterState = {
  search: "",
  ville: "all",
  typeContrat: "all",
  technologies: "all",
  sortBy: "recent",
};

export function applyFilters(offers, state) {
  const query = state.search.trim().toLowerCase();

  return offers.filter((offer) => {
    const matchesContract =
      state.typeContrat === "all" ||
      offer.typeContrat.toLowerCase() === state.typeContrat.toLowerCase();

    const matchesCity =
      state.ville === "all" ||
      offer.ville.toLowerCase() === state.ville.toLowerCase();

    const matchesTech =
      state.technologies === "all" ||
      offer.technologies.some(
        (item) => item.toLowerCase() === state.technologies.toLowerCase(),
      );

    const matchesSearch =
      query === "" || offer.titre.toLowerCase().includes(query);

    return matchesContract && matchesCity && matchesTech && matchesSearch;
  });
}
