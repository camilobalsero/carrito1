let imgSelected = " ";
let skuProduct = 0;

const modal = document.querySelector('.modal');
const btncloseModal = document.getElementById('close-modal');
const newProduct = document.getElementById('new-product');
const newPrice = document.getElementById('new-price');
const newDescrip = document.getElementById('new-description');
const newCategory = document.getElementById('new-category');
const newStock = document.getElementById('new-stock');
const newImage = document.getElementById('new-image');
const btnNewProduct = document.getElementById('btn-new-create');
const btnCreate = document.getElementById('btn-create');

const btnCloseModal2 = document.getElementById('close-modal2');
const btnModify = document.getElementById('btn-modify');
const modalModify = document.querySelector('.modal-modify');

const btnUpdate = document.getElementById('update-product');

btnCreate.addEventListener('click', showModal);
btncloseModal.addEventListener('click', function() {
    modal.style.display = 'none'
    document.querySelector('.overlay').style.display = 'none'
  });
btnNewProduct.addEventListener('click', createNewProduct);
newImage.addEventListener('change', importImg);

function showModal() {
    modal.style.display = 'block'
    document.querySelector('.overlay').style.display = 'block'
  }

function createNewProduct() {
    const productName = newProduct.value;
    const price = newPrice.value;
    const description = newDescrip.value;
    const category = newCategory.value;
    const stock = newStock.value;

    const newProductObject = {
        name: productName,
        price: price,
        description: description,
        category: category,
        image: imgSelected,
        stock: stock,
    };

    products.push(newProductObject);
    makeCard(newProductObject);
    modal.style.display = 'none';
    newProduct.value = '';
    newPrice.value = '';
    newDescrip.value = '';
    newCategory.value = '';
    newStock.value = '';
    newImage.value = '';

    document.querySelector('.overlay').style.display = 'none'
}

function importImg(event) {
    const currentImg = event.target.files[0];
    const objectURL = URL.createObjectURL(currentImg);
    imgSelected = objectURL;
}

function renderCards(){
    container.innerHTML = ''; // Limpiar el contenedor antes de renderizar
  
    products.map(product => {
        product ? makeCard(product) : null;
    });
  }

function importImg(event) {
    const currentImg = event.target.files[0];
    const objectURL = URL.createObjectURL(currentImg);
    imgSelected = objectURL;
}


btnModify.addEventListener('click', showModalModify);
btnCloseModal2.addEventListener('click', function () {
    modalModify.style.display = 'none'
    document.querySelector('.overlay').style.display = 'none'
});

function showModalModify(){
    modalModify.style.display = 'block'
    document.querySelector('.overlay').style.display = 'block'
}


function importImg(event) {
    const currentImg = event.target.files[0];
    const objectURL = URL.createObjectURL(currentImg);
    imgSelected = objectURL;
}

function renderCards(){
    container.innerHTML = ''; // Limpiar el contenedor antes de renderizar
  
    products.map(product => {
        product ? makeCard(product) : null;
    });
  }
  

  btnUpdate.addEventListener('click', updateProduct);

  function updateProduct() {
    const skuToUpdate = document.getElementById('new-sku2').value;
    const indexToUpdate = products.findIndex(product => product.sku === skuToUpdate);
  
    if (indexToUpdate !== -1) {
      // Actualiza los valores del producto con los nuevos valores del formulario
      products[indexToUpdate].tittle = document.getElementById('new-product2').value;
      products[indexToUpdate].image = imgSelected;
      products[indexToUpdate].price = document.getElementById('new-price2').value;
      products[indexToUpdate].description = document.getElementById('new-description2').value;
      products[indexToUpdate].stock = document.getElementById('new-stock2').value;
      products[indexToUpdate].category = document.getElementById('new-category2').value;
  
  
      // Limpia el formulario después de la actualización
      document.getElementById('new-sku2').value = '';
      document.getElementById('new-product2').value = '';
      document.getElementById('new-image2').value = '';
      document.getElementById('new-price2').value = '';
      document.getElementById('new-description2').value = '';
      document.getElementById('new-stock2').value = '';
      document.getElementById('new-category2').value = '';
  
      // Cierra el modal de modificación
      document.querySelector('.overlay').style.display = 'none'
      modalModify.style.display = 'none'
  
      // Vuelve a renderizar las tarjetas con los productos actualizados
      renderCards();
    } else {
      // Si no se encuentra el producto, puedes mostrar un mensaje de error o realizar alguna acción adicional.
      console.log('Producto no encontrado para actualizar');
    }
  }

  const callProduct = document.getElementById('call-product').addEventListener('click', updateModifyForm);

function updateModifyForm() {
  const skuToModify = document.getElementById('new-sku2').value;
  const productToModify = products.find(product => product.sku === skuToModify);

  if (productToModify) {
    // Llena los campos del formulario con los datos del producto
    document.getElementById('new-product2').value = productToModify.tittle;
    document.getElementById('new-price2').value = productToModify.price;
    document.getElementById('new-description2').value = productToModify.description;
    document.getElementById('new-stock2').value = productToModify.stock;
    document.getElementById('new-category2').value = productToModify.category;

    const imgPreview = document.getElementById('new-image2');
        imgPreview.src = productToModify.image;
        imgSelected = productToModify.image;

    document.getElementById('new-image2').addEventListener('change', updateImagePreview);

  } else {
    // Si no se encuentra el producto, puedes mostrar un mensaje de error o realizar alguna acción adicional.
    console.log('Producto no encontrado');
  }
}

function updateImagePreview(event) {
    const currentImg = event.target.files[0];
    const objectURL = URL.createObjectURL(currentImg);
    imgSelected = objectURL;
  
    const imgPreview = document.getElementById('new-image2-preview');
    imgPreview.src = objectURL;
}