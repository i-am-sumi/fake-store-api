document.querySelector("#app").innerHTML = `
  <div class='container'>
 <div class="product"></div>
  </div>
`;

const productWrapper = document.querySelector(".product");

const createProduct = (product) => {
  const { image, title, description, price } = product;

  const details = `<div class=>
	<img src="${image}" style='max-width:400px' />
	<hr/>
	<h2>${title}</h2>
	<p>${description}</p>
  <p>price:${price}</p>
	</div>`;

  productWrapper.innerHTML = details;
};
const id = location.href.split("=")[1];

fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res) => res.json())
  .then((value) => {
    createProduct(value);
  });
