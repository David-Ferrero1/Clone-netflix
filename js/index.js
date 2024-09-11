const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// selction de tab content item
function selectItem(e) {
  // rénitialiser la bordure rouge
  removeBorder();
  removeShow();
  // Ajouter une bordure à current tab
  this.classList.add("tab-border");
  // Rappel de content du DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // mettre la class show
  tabContentItem.classList.add("show");
}

// Ecoute de l'évènement click
tabItems.forEach((item) => item.addEventListener("click", selectItem));

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
