document.querySelector("#app").innerHTML = `
  <div class='container'>
 <div class="women-details"></div>
  </div>
`;

const womenDreshWrapper = document.querySelector(".women-details");

const createWomenDresh = (product) => {
  const { image, title, description, price } = product;

  const details = `<div class=>
	<img src="${image}" style='max-width:400px' />
	<hr/>
	<h2>${title}</h2>
	<p>${description}</p>
  <p>price:${price}</p>
	</div>`;

  womenDreshWrapper.innerHTML = details;
};

const id = location.href.split("=")[1];

fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res) => res.json())
  .then((value) => {
    createWomenDresh(value);
  });
