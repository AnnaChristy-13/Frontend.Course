
const loadAllProducts = () => {
    fetch('https://dummyjson.com/products')

        .then(response => {
            if (!response.ok) {
                throw new Error("Error: ", response.status)
            }
            return response.json();

        }).then(data => {
            data.forEach(card => {

                const productContainer = document.getElementById('cardContainer');

                const productThumbnail = `<img src="https://cdn.dummyjson.com/product-images/1/${card.thumbnail}" class="thumbnail" alt="thumbnail"></img>`;
                const productName = `<h5 class="card-title">${card.title}</h5>`;
                const productPrice = `<p class="card-text">${card.price}</p>`;
                const productRating = `<p class="card-text">${card.rating}</p>`;
                const productCategory = `<p class="card-text">${card.category}</p>`;

                const cardHtml = `
                    <div class="card" style="width: 18rem;">
                        <div class="product-card">
                        ${productThumbnail}
                        ${productName}
                        ${productPrice}
                        ${productRating}
                        ${productCategory}
                        </div>
                    </div>
                `;

                productContainer.innerHTML += cardHtml;
            });
        })
        .catch(error => {
            console.log('Error:', error.message);
        });
};

loadAllProducts();