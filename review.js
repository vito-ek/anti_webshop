const form = document.querySelector("#form");
const select = document.querySelector("#product");
const starsBox = document.querySelector("#stars");
const id = new URLSearchParams(window.location.search).get("id");
let rating = 0;

/* ---------- Produkter ---------- */
const urls = ["https://dummyjson.com/products/category/beauty", "https://dummyjson.com/products/category/fragrances"];

Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
  .then((svar) => {
    select.innerHTML = `<option value="">Vælg produkt</option>`;
    svar
      .flatMap((data) => data.products)
      .forEach((p) => {
        select.innerHTML += `<option value="${p.id}" ${p.id == id ? "selected" : ""}>${p.title}</option>`;
      });
  })
  .catch(() => {
    select.innerHTML = `<option value="">Kunne ikke hente produkter</option>`;
  });

/* ---------- Stjerner (bygges her, så de altid findes) ---------- */
starsBox.innerHTML = [1, 2, 3, 4, 5].map((n) => `<span data-n="${n}">☆</span>`).join("");

const stars = starsBox.querySelectorAll("span");

function visStjerner(antal) {
  stars.forEach((s, i) => {
    s.textContent = i < antal ? "★" : "☆";
  });
}

stars.forEach((s) => {
  s.style.cursor = "pointer";

  s.addEventListener("click", () => {
    rating = Number(s.dataset.n);
    visStjerner(rating);
  });

  s.addEventListener("mouseenter", () => visStjerner(Number(s.dataset.n)));
});

starsBox.addEventListener("mouseleave", () => visStjerner(rating));

/* ---------- Send ---------- */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (rating === 0) {
    alert("Vælg antal stjerner");
    return;
  }

  console.log({
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    product: select.value,
    rating: rating,
    review: document.querySelector("#review").value,
  });

  form.hidden = true;
  document.querySelector("#tak").hidden = false;
});
