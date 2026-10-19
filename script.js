const endpoint = "https://dummyjson.com/products";

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    data.products.forEach((product) => {
      document.querySelector("#produktliste").innerHTML += `
        <article>
          <img src="${product.thumbnail}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>${product.price} $</p>
        </article>
      `;
    });
  });
