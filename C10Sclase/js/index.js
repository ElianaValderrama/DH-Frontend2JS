/* --------------------------- listado de albumes --------------------------- */
const albumesFamosos = [
  {
    id: "x123",
    nombre: "Nevermind",
    imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
    like: true,
  },
  {
    id: "y123",
    nombre: "Thriller",
    imagen:
      "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
    like: true,
  },
  {
    id: "z123",
    nombre: "The wall",
    imagen:
      "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
    like: true,
  },
  {
    id: "f123",
    nombre: "Abbey Road",
    imagen:
      "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: false,
  },
  {
    id: "a123",
    nombre: "Origin of Symmetry",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false,
  },
  {
    id: "b123",
    nombre: "Back in Black",
    imagen:
      "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false,
  },
];

const nombreUsuario = document.querySelector("#nombreUsuario");
const covers = document.querySelector(".covers");
/* -------------------------------------------------------------------------- */
/*                    FUNCION: captar el nombre de usuario                    */
/* -------------------------------------------------------------------------- */
function obtenerNombre() {
  const nombre = prompt("Ingrese su nombre: ");
  nombreUsuario.innerText = nombre;
}

obtenerNombre();
/* -------------------------------------------------------------------------- */
/*                  FUNCION: renderizar tarjetas de albumes                   */
/* -------------------------------------------------------------------------- */
function renderizarAlbumes() {
  albumesFamosos.forEach((album) => {
    covers.innerHTML += `
      <li>
        <img src="${album.imagen}" alt="${album.nombre}">
        <p>${album.nombre}</p>
        <i class="fa fa-heart ${album.like ? "favorito" : ""}"></i>
      </li>
    `;
  });
}

renderizarAlbumes();
