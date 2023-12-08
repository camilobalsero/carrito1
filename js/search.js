document.getElementById('searchInput').addEventListener('input', function () {

    const searchTerm = this.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.tittle && product.tittle.toLowerCase().includes(searchTerm)
    );    

    container.innerHTML = '';

    filteredProducts.forEach(product => makeCard(product));
});
    