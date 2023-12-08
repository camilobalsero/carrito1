function sortProducts(order) {
    let sortedProducts;

    if (order === 'asc') {
      sortedProducts = products.slice().sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      sortedProducts = products.slice().sort((a, b) => b.price - a.price);
    } else {
      return;
    }

    container.innerHTML = '';

    sortedProducts.forEach(product => makeCard(product));
  }