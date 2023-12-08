const container = document.querySelector(".cards");

const products = [
  {
    sku: "1",
    stock: "10",
    tittle: "Asus Tuf",
    description:
      "El ASUS TUF Gaming F15 ofrece rendimiento de juego potente con un diseño duradero. Con procesadores Intel Core i7",
    image: "./images/asusTuf.jpg",
    price: 3000,
    category: "computers",
  },
  {
    sku: "2",
    stock: "8",
    tittle: "Lenovo ideapad gaming3",
    description:
      "El Lenovo ideapad gaming3 tiene un Sistema operativo Windows 11 Home. Perfecta para videojuegos con requerimientos en memoria gráfica de 4Gb y memoria RAM de 8GB.",
    image: "./images/lenovoideapad.jpg",
    price: 3400,
    category: "computers",
  },

  {
    sku: "3",
    stock: "9",
    tittle: "OnePlus 9 Pro",
    description:
      "El OnePlus 9 Pro es un smartphone de gama alta con una potente cámara Hasselblad y un rendimiento excepcional. Experimenta la velocidad y la calidad de OnePlus.",
    image: "./images/OnePlus9pro.jpeg",
    price: 54000,
    category: "cel",
  },
  {
    sku: "4",
    stock: "7",
    tittle: "PlayStation 5",
    description:
      "La consola PlayStation 5 de Sony ofrece gráficos de última generación y una experiencia de juego inmersiva. Descubre nuevos mundos con la potencia de la PS5.",
    image: "./images/Play5.png",
    price: 9900,
    category: "gaming",
  },
  {
    sku: "5",
    stock: "50",
    tittle: "Dell XPS 13",
    description:
      "La laptop Dell XPS 13 es una ultrabook premium con un diseño elegante y un rendimiento potente. Maximiza tu productividad con esta poderosa computadora portátil.",
    image: "./images/dell.png",
    price: 829,
    category: "computers",
  },
  {
    sku: "6",
    stock: "20",
    title: "AMD Ryzen 7 5800X",
    description:
      "El procesador AMD Ryzen 7 5800X ofrece un rendimiento de alta gama para tu PC. Con múltiples núcleos y velocidades rápidas, es ideal para entusiastas de la informática.",
    image: "./images/ryzen7.jpg",
    price: 490,
    category: "components",
  },
  {
    sku: "7",
    stock: "15",
    tittle: "iPhone 13 Pro",
    description:
      "El iPhone 13 Pro de Apple presenta una potente cámara triple, rendimiento rápido y una pantalla ProMotion. Descubre la última innovación de Apple en smartphones.",
    image: "./images/iphone13.jpg",
    price: 900,
    category: "cel",
  },
  {
    sku: "8",
    stock: "18",
    tittle: "Xbox Series X",
    description:
      "La consola Xbox Series X ofrece potencia de próxima generación para juegos inmersivos. Con gráficos impresionantes y tiempos de carga rápidos, disfruta de la experiencia de juego definitiva.",
    image: "./images/xboxSeriesX.png",
    price: 99.000,
    category: "gaming",
  },
  {
    sku: "9",
    stock: "3",
    tittle: "Lenovo Legion 5",
    description:
      "La laptop Lenovo Legion 5 es una máquina gaming con un potente procesador y una tarjeta gráfica dedicada. Sumérgete en tus juegos favoritos con esta laptop de alto rendimiento.",
    image: "./images/lenovoLegion.jpg",
    price: 900,
    category: "computers",
  },
  {
    sku: "10",
    stock: "33",
    tittle: "NVIDIA GeForce RTX 3080",
    description:
      "La tarjeta gráfica NVIDIA GeForce RTX 3080 ofrece un rendimiento gráfico excepcional para juegos y aplicaciones intensivas. Experimenta la potencia de la arquitectura Ampere.",
    image: "./images/RTX3080.jpg",
    price: 3000,
    category: "components",
  },
  {
    sku: "11",
    stock: "12",
    tittle: "Samsung Galaxy S21",
    description:
      "El Samsung Galaxy S21 es un smartphone con una cámara versátil, rendimiento rápido y diseño elegante. Captura momentos increíbles con la calidad de Samsung.",
    image: "./images/s21.jpg",
    price: 479,
    category: "cel",
  },
  {
    sku: "12",
    stock: "22",
    tittle: "Nintendo Switch",
    description:
      "La consola Nintendo Switch ofrece versatilidad para jugar en casa o en movimiento. Con su diseño modular, disfruta de juegos divertidos en cualquier lugar.",
    image: "./images/nintendo.webp",
    price: 300,
    category: "gaming",
  },
  {
    sku: "13",
    stock: "10",
    tittle: "HP Envy x360",
    description:
      "La laptop HP Envy x360 combina rendimiento y versatilidad con su diseño convertible. Ideal para trabajo y entretenimiento con una pantalla táctil Full HD.",
    image: "./images/hpConvertible.avif",
    price: 790,
    category: "computers",
  },
  {
    sku: "14",
    stock: "50",
    tittle: "Intel Core i9-11900K",
    description:
      "El procesador Intel Core i9-11900K ofrece un rendimiento de alta gama para usuarios exigentes. Con múltiples núcleos y velocidades rápidas, es perfecto para gaming y creación de contenido.",
    image: "./images/corei9.png",
    price: 1990,
    category: "components",
  },
  {
    sku: "15",
    stock: "26",
    tittle: "Google Pixel 6",
    description:
      "El Google Pixel 6 es un smartphone con una destacada calidad de cámara y el poder del software de Google. Captura fotos impresionantes y disfruta de la experiencia Android pura.",
    image: "./images/pixel6.jpg",
    price: 1900,
    category: "cel",
  },
  {
    sku: "16",
    stock: "21",
    tittle: "PlayStation 4 Pro",
    description:
      "La PlayStation 4 Pro ofrece gráficos mejorados y un rendimiento mejorado para juegos. Disfruta de una amplia biblioteca de títulos en esta consola de Sony.",
    image: "./images/Play4pro.webp",
    price: 300,
    category: "gaming",
  },
  {
    sku: "17",
    stock: "15",
    tittle: "Asus ROG Zephyrus G14",
    description:
      "La laptop Asus ROG Zephyrus G14 es una máquina gaming ultradelgada con potente rendimiento y una pantalla de alta calidad. Lleva tus juegos a cualquier lugar con esta laptop portátil.",
    image: "./images/asusRog.jpg",
    price: 9.000,
    category: "computers",
  },
  {
    sku: "18",
    stock: "4",
    tittle: "AMD Radeon RX 6800 XT",
    description:
      "La tarjeta gráfica AMD Radeon RX 6800 XT ofrece un rendimiento gráfico excepcional para juegos y aplicaciones exigentes. Experimenta la potencia de la arquitectura RDNA 2.",
    image: "./images/amd6800.jpg",
    price: 2900,
    category: "components",
  },
  {
    sku: "19",
    stock: "50",
    tittle: "iPhone 13",
    description:
      "El iPhone 13 de Apple combina rendimiento rápido con una cámara avanzada. Disfruta de la última tecnología de Apple en un diseño elegante y compacto.",
    image: "./images/iphone13Normal.jpg",
    price: 599,
    category: "cel",
  },

  {
    sku: "20",
    stock: "44",
    tittle: "Xbox One X",
    description:
      "La Xbox One X ofrece gráficos de alta calidad y rendimiento mejorado para una experiencia de juego inmersiva. Disfruta de juegos en 4K y sumérgete en el mundo de Xbox.",
    image: "./images/xboxOneX.jpg",
    price: 4000,
    category: "gaming",
  },

  {
    sku: "21",
    stock: "6",
    tittle: "Samsung Galaxy Z Fold 3",
    description:
      "El Samsung Galaxy Z Fold 3 es un smartphone plegable con pantalla AMOLED y funciones avanzadas. Experimenta la innovación en dispositivos móviles con Samsung.",
    image: "./images/zfold.avif",
    price: 9900,
    category: "cel",
  },
  {
    sku: "22",
    stock: "30",
    tittle: "Nintendo Switch Lite",
    description:
      "La Nintendo Switch Lite es una versión portátil de la consola Switch con controles integrados. Disfruta de juegos divertidos en cualquier lugar con esta versión compacta.",
    image: "./images/switch.jpg",
    price: 96.000,
    category: "gaming",
  },
  {
    sku: "23",
    stock: "14",
    tittle: "MacBook Pro 16",
    description:
      "El MacBook Pro 16 de Apple es una potente laptop para profesionales creativos. Con una pantalla Retina y el chip M1 Pro, lleva tu creatividad al siguiente nivel.",
    image: "./images/macbook.jpg",
    price: 3990,
    category: "computers",
  },
  {
    sku: "24",
    stock: "18",
    tittle: "Corsair Vengeance LPX 16GB RAM",
    description:
      "La memoria RAM Corsair Vengeance LPX de 16GB ofrece un rendimiento rápido y confiable para tu PC. Mejora la velocidad de tu sistema con esta memoria de alta calidad.",
    image: "./images/ram.webp",
    price: 9000,
    category: "components",
  },
  {
    sku: "25",
    stock: "25",
    tittle: "Google Pixel 6 Pro",
    description:
      "El Google Pixel 6 Pro es la versión premium del smartphone de Google con una cámara avanzada y características de gama alta. Captura momentos inolvidables con este dispositivo.",
    image: "./images/pixel6pro.jpg",
    price: 590,
    category: "cel",
  },
  {
    sku: "26",
    stock: "34",
    tittle: "PlayStation 4 Slim",
    description:
      "La PlayStation 4 Slim es una versión más delgada de la consola PS4 con un diseño elegante. Disfruta de una amplia variedad de juegos en esta consola compacta.",
    image: "./images/play4slim.webp",
    price: 990,
    category: "gaming",
  },
  {
    sku: "27",
    stock: "21",
    tittle: "Acer Predator Helios 300",
    description:
      "La laptop Acer Predator Helios 300 es una máquina gaming con un potente procesador y tarjeta gráfica. Experimenta el rendimiento excepcional para juegos intensivos.",
    image: "./images/predator.jpg",
    price: 7299,
    category: "computers",
  },
  {
    sku: "28",
    stock: "18",
    tittle: "NZXT Kraken X63 RGB",
    description:
      "El NZXT Kraken X63 RGB es un sistema de refrigeración líquida para tu PC. Mantén tus componentes frescos con este sistema de enfriamiento de alta gama.",
    image: "./images/kraken.avif",
    price:8000,
    category: "components",
  },
  {
    sku: "29",
    stock: "35",
    tittle: "OnePlus Nord 2",
    description:
      "El OnePlus Nord 2 es un smartphone de gama media con características premium. Disfruta de un rendimiento eficiente y una cámara versátil con este dispositivo.",
    image: "./images/oneplus.png",
    price: 9000,
    category: "cel",
  },
  {
    sku: "30",
    stock: "25",
    tittle: "Logitech G Pro X Mechanical Keyboard",
    description:
      "El teclado mecánico Logitech G Pro X ofrece interruptores intercambiables y un diseño compacto. Personaliza tu experiencia de juego con este teclado de alta calidad.",
    image: "./images/logitech.webp",
    price: 4000,
    category: "components",
  },
];

function makeCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-category", product.category);
  card.setAttribute("id",product.sku);

  const tittle = document.createElement("h5");
  tittle.textContent = product.tittle;
  tittle.classList.add("card-tittle");

  const description = document.createElement("p");
  description.textContent = product.description;
  description.classList.add("card-text");

  const price = document.createElement("p");
  price.textContent = `$${product.price}`; // Agrega el símbolo $ al precio
  price.classList.add("card-text");
  
  const stockCard = document.createElement('p')
    stockCard.textContent = `Disponibles:${product.stock}`
    stockCard.classList.add('card-text')


  const car = document.createElement("button");
  car.textContent = "Agregar al carrito";
  car.classList.add("car");
  car.addEventListener("click", () => addToCart(product)); // Agrega al carrito al hacer clic


  const imgCard = document.createElement("img");
  imgCard.src = product.image;
  imgCard.classList.add("card-img-top");

  card.appendChild(imgCard);
  card.appendChild(tittle);
  card.appendChild(description);
  card.appendChild(price);
  card.appendChild(stockCard);
  card.appendChild(car);
  

  container.appendChild(card);
}

products.forEach((product) => {
  makeCard(product);
});





// Inicializa los productos y renderiza la interfaz

/*
<div class="card" style="width: 18rem;">
          <img src="./images/asusTuf.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Asus Tuf</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button class="car">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
            </button>
          </div>
        </div>
*/
