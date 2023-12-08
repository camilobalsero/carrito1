function filterByCategory(category) {
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = 'none';
    });

    if (category === 'Todo') {
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = 'block';
        });
    } else {
        
        document.querySelectorAll(`[data-category="${category}"]`).forEach(card => {
            card.style.display = 'block';
        });
    }
}

container.innerHTML = '';

window.addEventListener('DOMContentLoaded', () => {
    products.forEach(product => makeCard(product));
});