const catalogo = [
    {
        id: 1,
        title: "Etiquetas Escolares",
        price: 1500.00,
        description:
            "Plancha de etiqueta para lápiz(36 unidades),para cuadernos (6 unidades),para libros (6 unidades),para carpeta (4 unidades).La promo es solo por 1 diseño y abarca esas 4 planchas",
        category: "Yayis Love",
        image: "assets/prod1.jpg",
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 2,
        title: "Bolsitas Golosineras ",
        price: 1000.00,
        description:
            "El diseño que quieras y se hacen presonalizadas.",
        category: "Yayis Love",
        image:
            "assets/prod2.jpg",
        rating: {
            rate: 4.1,
            count: 259,
        },
    },
    {
        id: 3,
        title: "Stickers para Eventos y Emprendimientos",
        price: 1500.00,
        description:
            "Se realizan en los tamaños de una hoja A4.",
        category: "Yayis Love",
        image: "assets/prod3.jpg",
        rating: {
            rate: 4.7,
            count: 500,
        },
    },
    {
        id: 4,
        title: "FOTOS POLAROID 10,7X8,8 CM",
        price: 500.00,
        description:
            "Pueden ser personalizadas con nombre, fecha y un dibujo pequeño",
        category: "Yayis Love",
        image: "assets/prod4.jpg",
        rating: {
            rate: 2.1,
            count: 430,
        },
    },
 

];

// tarjeta almacena el div de nuestro html 
let tarjeta = document.getElementById("card-ejemplo");

catalogo.map((producto) => {

    // a nuestra variable tarjeta lo que vamos a hacer es insertarle a travez del innerHTML el codigo que se encuentra entre los backsticks
    tarjeta.innerHTML += `
    <div class="col-md-5 mb-5">
        <div class="card h-100 text-center p-4" key= ${producto.id} >
            <img src= ${producto.image} className="card-img-top" alt= ${producto.title} height="250px" />
            <div class="card-body">
                <h5 class="card-title mb-0"> ${producto.title.substring(0,40)}...</h5>
                <p class="card-title mb-0"> ${producto.description.substring(0,50)}...</p>
                <p class="card-text lead fw-bold">$ ${producto.price} </p>
            </div>
            <a href="#" class="btn btn-outline-dark"> Añadir al Carrito </a>
        </div>
    </div> 
    `
});

