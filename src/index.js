// https://api.countapi.xyz/create?namespace=muzakparov.github.io&key=views&value=0
const countEl = document.getElementById("count");

updateVisitCount();

function updateVisitCount() {
  fetch("https://api.countapi.xyz/hit/muzakparov.github.io/views")
    .then(res => res.json())
    .then(res => {
      countEl.innerHTML = res.value;
    });
}
