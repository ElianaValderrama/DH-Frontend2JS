const botones = document.querySelectorAll("button");

botones.forEach((boton) => boton.addEventListener("click", enviarMensaje));

function enviarMensaje(evento) {
  const elemento = evento.target;
  console.log("ELEMENTO QUE DISPARA EL EVENTO: ", elemento);

  const dataset = elemento.dataset;
  console.log("DATASET DEL ELEMENTO: ", dataset);

  const titulo = dataset.titulo;
  console.log("TITULO: ", titulo);

  const idUsuario = Number(dataset.idUsuario);
  console.log("ID USUARIO: ", idUsuario);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: titulo,
      userId: idUsuario,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("RESPUESTA DE LA API: ", data);
      const mensaje = document.querySelector("#mensaje-posteado");
      mensaje.innerText = data.title;
    });
}
