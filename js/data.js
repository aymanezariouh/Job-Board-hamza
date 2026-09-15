async function fetchOffers() {
  const response = await fetch("http://127.0.0.1:5500/data/offers.json");
  if (!response.ok) {
    throw new Error("Failed to fetch offers");
  }
  const data = await response.json();
  return data;
}
async function fetchOfferById(id) {
  const offers = await fetchOffers();
  const offerById = offers.find((offer) => (offer.id === id));

  if(!offerById){
    throw new Error('Failed to fetch offer by id');
  }
  return offerById;
}

// async function test(){
//     const offer = await fetchOfferById(3);
//     console.log(offer);
// }
// test();