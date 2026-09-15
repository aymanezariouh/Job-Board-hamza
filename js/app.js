const container = document.querySelector("#offers-container");

async function init() {
  try{
    renderLoading(container);
  const offers = await fetchOffers();

  renderOffers(offers, container);
  }catch(error){
    renderError(container);
  }
}
init();
