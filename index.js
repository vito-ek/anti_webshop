const endpoint1 = "https://dummyjson.com/products/category/beauty";
const endpoint2 = "https://dummyjson.com/products/category/fragrances";

const produktliste = document.querySelector("#produktliste");
const visantal = document.querySelector("#visantal");

function visData(data) {
  visantal.textContent = data.length;

  let markup = "";
  produktliste.innerHTML = "";

  data.forEach((element) => {
    markup += `
  <a class="link" href="productdetails.html?id=${element.id}">
    <article class="card">
      <img src="${element.thumbnail}" alt="${element.title}">
      <h2>${element.title}</h2>
      <h3>Brand: ${element.brand}</h3>
      <p>Rating: ${element.rating} ★</p>
    </article>
  </a>
`;
  });

  produktliste.innerHTML = markup;
}

let allData;
let udsnit;

function getData() {
  Promise.all([fetch(endpoint1).then((response) => response.json()), fetch(endpoint2).then((response) => response.json())]).then((data) => {
    allData = data.flatMap((kategori) => kategori.products);
    udsnit = [...allData];
    visData(udsnit);
  });
}

function filter(e) {
  const valgt = e.target.textContent;

  if (valgt == "All") {
    udsnit = [...allData];
  } else {
    udsnit = allData.filter((element) => element.category == valgt.toLowerCase());
  }

  visData(udsnit);
}

document.querySelectorAll("#filter button").forEach((knap) => {
  knap.addEventListener("click", filter);
});

getData();

document.querySelectorAll("#sortering button").forEach((button) => button.addEventListener("click", sorter));

function sorter(e) {
  const valgt = e.target.textContent;

  if (valgt == "Rating high-low") {
    udsnit.sort((a, b) => b.rating - a.rating);
  } else if (valgt == "Rating low-high") {
    udsnit.sort((a, b) => a.rating - b.rating);
  }

  visData(udsnit);
}

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
