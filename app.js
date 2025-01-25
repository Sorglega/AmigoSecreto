// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Array para almacenar los nombres de los amigos

// Función para agregar un nuevo amigo a la lista
function agregarAmigo() {
  validarEntradaUsuario(); // Valida la entrada del usuario
  limpiarInput(); // Limpia el campo de entrada
  recorrerListaAmigos(); // Actualiza la lista de amigos en la interfaz
  // limpiarListaSorteado(); // (Comentario) Puede usarse para limpiar la lista de sorteados si es necesario
}

// Función para limpiar el campo de entrada
function limpiarInput() {
  document.getElementById('amigo').value = '';
}

// Función para limpiar la lista de amigos mostrada en la interfaz
function limpiarListaAmigos() {
  let listaAmigos = document.getElementById('listaAmigos');

  while (listaAmigos.firstChild) {
    listaAmigos.removeChild(listaAmigos.firstChild);
  }
}

// Función para limpiar la lista de resultados del sorteo
function limpiarListaSorteado() {
  let listaSorteado = document.getElementById('resultado');

  while (listaSorteado.firstChild) {
    listaSorteado.removeChild(listaSorteado.firstChild);
  }
}

// Función para resetear las listas de amigos y resultados
function resetearListas() {
  amigos = []; // Resetea el array de amigos
  limpiarListaAmigos(); // Limpia la lista de amigos en la interfaz
  limpiarListaSorteado(); // Limpia la lista de resultados del sorteo
}

// Función para validar la entrada del usuario
function validarEntradaUsuario() {
  let nombre = document.getElementById('amigo').value;

  if (nombre.trim() === '') {
    alert('El campo no puede estar vacío, ingrese un nombre válido.');
  } else {
    amigos.push(nombre); // Agrega el nombre al array de amigos
    console.log(amigos); // Muestra la lista de amigos en la consola
  }
}

// Función para recorrer y mostrar la lista de amigos en la interfaz
function recorrerListaAmigos() {
  let ul = document.getElementById('listaAmigos');
  ul.innerHTML = '';

  amigos.forEach(amigo => {
    let li = document.createElement('li');
    li.textContent = amigo;
    li.classList.add('amigo-item');
    ul.append(li);
  });
}

// Función para realizar el sorteo de un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('La lista de amigos está vacía');
  } else {
    let amigoAleatorio = Math.floor(Math.random() * amigos.length); // Obtiene un índice aleatorio
    let amigo = amigos[amigoAleatorio]; // Obtiene el nombre correspondiente al índice aleatorio
    let li = document.createElement('li');
    li.textContent = `Tu amigo secreto es ${amigo}`;
    document.getElementById('resultado').append(li); // Muestra el resultado del sorteo en la interfaz
    // limpiarListaAmigos(); // (Comentario) Puede usarse para limpiar la lista de amigos si es necesario
    // amigos = []; // (Comentario) Puede usarse para resetear la lista de amigos si es necesario
  }
}
