const params = new URLSearchParams(window.location.search);
const detailContainer = document.querySelector("#offer-detail");
const idParam=params.get("id")
const id = Number(idParam);
// console.log(id)
// console.log(typeof(id))

async function initDetail() {
  //   console.log(offer.profilRecherche);
  //   console.log(typeof offer.profilRecherche);
  //   console.log(Array.isArray(offer.profilRecherche));
  detailContainer.innerHTML = `
  <div class="empty-box">
    <div class="empty-inner">
      <p>Chargement de l'offre...</p>
    </div>
  </div>
`;
if(!idParam ||Number.isNaN(id)){
    detailContainer.innerHTML=`
        <div class='empty-box'>
            <div class='empty-inner'>
                <h2>Offer ivalide</h2>
                <p class='muted'>
                    Aucun identifiant d'offer valide n'a été fourni.
                </p>
                <a href='index.html' class='btn btn-primary'>Retour aux offers</a>
            </div>    
        </div>
    `;
    return;

}
  try {
    const offer = await fetchOfferById(id);
    detailContainer.innerHTML = `
    <section class="panel detail-card">

      <div class="detail-title-row">

        <div>
          <div class="badges">
            <span class="badge">${offer.entreprise}</span>
            <span class="badge">${offer.typeContrat}</span>
          </div>

          <h1>${offer.titre}</h1>

          <p class="muted">
            ${offer.entreprise} • ${offer.ville}
          </p>
        </div>

        <span class="muted small">
          ▣ Publié le ${offer.datePublication}
        </span>

      </div>
     <div class="stack-label">
  STACK TECHNIQUE
</div>     
<div class="badges">
  ${offer.technologies
    .map((technologie) => {
      return `<span class="badge">${technologie}</span>`;
    })
    .join("")}
</div> 
<hr class="sep" />
<div class="detail-section">
   <h2>Description du poste</h2>
   <p> ${offer.descriptionLongue}</p>
</div>
<hr class="sep" />
<div class="detail-section">
    <h2>Profil recherché</h2>
    <p>${offer.profilRecherche}</p>
</div>

    </section>
  `;
  } catch (error) {
    // 4. Error
    detailContainer.innerHTML = `
      <div class="empty-box">
        <div class="empty-inner">

          <h2>Offre introuvable</h2>

          <p class="muted">
            Cette offre n'existe pas ou n'est plus disponible.
          </p>

          <a href="index.html" class="btn btn-primary">
            Retour aux offres
          </a>

        </div>
      </div>
    `;
    console.log(error);
  }
}
initDetail();
