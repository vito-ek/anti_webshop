const id = new URLSearchParams(window.location.search).get("id");

const endpoint = `https://dummyjson.com/products/${id}`;

const product = document.querySelector("#product");

document.querySelector("#backbutton").addEventListener("click", () => history.back());

function stjerner(antal) {
  const hele = Math.round(antal);
  return "★".repeat(hele) + "☆".repeat(5 - hele);
}

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    const anmeldelser = (data.reviews || [])
      .map(
        (r) => `
        <div class="review">
          <div class="review-top">
            <div>
              <strong>${r.reviewerName}</strong>
              <span>${new Date(r.date).toLocaleDateString("da-DK")}</span>
            </div>
            <p>${r.comment}</p>
          </div>
          <div class="stars">${stjerner(r.rating)}</div>
        </div>
      `,
      )
      .join("");

    product.innerHTML = `
      <img class="produktbillede" src="${data.thumbnail}" alt="${data.title}">
      <h2>${data.title}</h2>
      <p class="beskrivelse">${data.description}</p>

      <button class="review-btn">Review this product</button>

      <section class="reviews-box">
        <div class="reviews-inner">
          <p class="reviews-titel">Reviews: ${Math.round(data.rating)} stars</p>
          <div class="stars">${stjerner(data.rating)}</div>
          ${anmeldelser}
        </div>
      </section>
    `;

    // NY: send brugeren videre til review-siden
    document.querySelector(".review-btn").addEventListener("click", () => {
      location.href = `review.html?id=${data.id}`;
    });
  });

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  const erAaben = menu.classList.toggle("active");

  burger.textContent = erAaben ? "×" : "☰";
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    burger.textContent = "☰";
  });
});
