const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("nombre").value;
  const lastName = document.getElementById("apellido").value;
  const email = document.getElementById("correo").value;

  const data = { name, lastName, email };
  formulario.reset();
  try {
    const server = await fetch("http://localhost:2000/api/usuario", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const respond = await server.json();
    console.log("Los datos se ingresaron correctamente", respond);
  } catch (error) {
    console.error("Error al ingresar los datos");
  }
});
