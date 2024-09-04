document.querySelector("#app").innerHTML = `
  <div class='container'>
 <div class="jewelery-details"></div>
  </div>
`;

const jeweleryWrapper = document.querySelector(".jewelery-details");

const createJewelery = (product) => {
  const { image, title, description, price } = product;

  const details = `<div class=>
	<img src="${image}" style='max-width:400px' />
	<hr/>
	<h2>${title}</h2>
	<p>${description}</p>
  <p>price:${price}</p>
	</div>`;

  jeweleryWrapper.innerHTML = details;
};

const id = location.href.split("=")[1];

fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res) => res.json())
  .then((value) => {
    createJewelery(value);
  });
