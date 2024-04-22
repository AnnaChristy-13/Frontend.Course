// Сверстать страничку с продуктами из предыдущей задачи продукты отображаются один за другим - верстка на ваше усмотрение-
// добавить инпут куда пользователь может ввести цену - после ввода продукты фильтруются по цене меньше или равно указанной пользователем.

const fitnessShop = [
    { name: 'Fitness rope', price: 80.0 },
    { name: 'Pilates roller', price: 58.0 },
    { name: 'Ball chair', price: 100.0 },
    { name: 'Trampoline', price: 500.0 },
    { name: 'Mat storage', price: 98.0 },
    { name: 'Yoga Mat', price: 169.0 },
    { name: 'Yoga Wheel', price: 68.0 },
    { name: 'Bangles', price: 49.0 },
];

function createProducts() {
    for (let i = 0; i < fitnessShop.length; i++) {
        const productName = document.getElementById(`nameProduct${i + 1}`);
        productName.innerText = fitnessShop[i].name;
        const productPrice = document.getElementById(`priceProduct${i + 1}`);
        productPrice.innerText = fitnessShop[i].price + '\u20ac';
    }
}

function updateProductCount() {
    const visibleProducts = document.querySelectorAll('.product:not([style="display: none;"])');
    const totalCount = document.getElementById('totalCount');
    totalCount.innerText = visibleProducts.length;
}

function filterProducts(minPrice, maxPrice) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const price = parseFloat(product.querySelector('.productPrice').textContent);
        if (isNaN(price) || price < minPrice || price > maxPrice) {
            product.style.display = 'none';
        } else {
            product.style.display = 'block';
        }
    });
    updateProductCount();
}

document.getElementById('btnPriceFilter').addEventListener('click', () => {
    const minPrice = parseFloat(document.getElementById('ofPrice').value);
    const maxPrice = parseFloat(document.getElementById('toPrice').value);
    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
        resetProducts();
        filterProducts(minPrice, maxPrice);
    } else {
        alert('Please enter prices.');
    }
});

function resetProducts() {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.display = 'block';
    });
}

createProducts();