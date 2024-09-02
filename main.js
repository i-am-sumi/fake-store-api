import './style.css';
import slugify from 'slugify';

document.querySelector('#app').innerHTML = `
  <div class='container'>
  </div>
`;

const createProducts = (products) => {
  let cat = '';
  const productsStr = products.map((product) => {
    const { image, title, description, category } = product;
    cat = category;
    return `<div class="col">
    <div class="card">
      <img src="${image}" class="card-img-top" alt="${image}" style='height: 320px;'>
      <div class="card-body">
        <h5 class="card-title">${title.slice(0, 30)}...</h5>
        <p class="card-text">${description.slice(0, 100)}...</p>
      </div>
    </div>
  </div>`;
  });

  const section = document.createElement('section');
  section.classList.add('p-4', 'border', 'mb-4');

  const href = slugify(cat);

  section.innerHTML = `
  <h3>${cat} <a href="/categories/${href}.html">read more</a></h3>
  <div class="row row-cols-1 row-cols-md-4 g-4">
          ${productsStr.join('\n')}
          </div>`;

  document.querySelector('.container').appendChild(section);
};

const categories = [
  'jewelery',
  'electronics',
  "men's%20clothing",
  "women's%20clothing",
];

categories.forEach((category) => {
  fetch(`https://fakestoreapi.com/products/category/${category}?limit=4`)
    .then((res) => res.json())
    .then((value) => {
      createProducts(value);
    });
});
