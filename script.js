const endpoint1 = "https://dummyjson.com/products/category/beauty";
const endpoint2 = "https://dummyjson.com/products/category/fragrances";

function hent(endpoint) {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      data.products.forEach((product) => {
        document.querySelector("#produktliste").innerHTML += `
        <article>
          <img src="${product.thumbnail}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>Price ${product.price}</p>
          <p>Rating: ${product.rating}</p>
        </article>
      `;
      });
    });
}

hent(endpoint1);
hent(endpoint2);
