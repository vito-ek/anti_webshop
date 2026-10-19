const id = new URLSearchParams(window.location.search).get("id");
console.log(id);

const endpoint = `https://dummyjson.com/products/${id}`;

const product = document.querySelector("#product");

const backbutton = document.querySelector("#backbutton");
backbutton.addEventListener("click", () => history.back());

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    product.innerHTML += `
        <article>
          <img src="${product.thumbnail}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p>${product.rating}</p>
          <p>${product.reviews}</p>
        </article>
      `;
  });
