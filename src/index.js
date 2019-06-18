//Declaracion de variables
const inicio=document.getElementById("inicio");
//const ingresarReferencia=document.getElementById("ingresar-referencia");
const iniciarCifrado=document.getElementById("iniciar-cifrado");
//const ingresarCodigo=document.getElementById("ingresar-codigo");
const iniciarDescifrado=document.getElementById("iniciar-descifrado");
const paginaDeCifrado=document.getElementById("pagina-de-cifrado");
//const mostrarCodigo=document.getElementById("mostrar-codigo");
const paginaDeDescifrado=document.getElementById("pagina-de-descifrado");
//const mostrarReferencia=document.getElementById("mostrar-referencia");

//Declaracion de funciones
const cifrarReferencia = () => {//constante pagina de CIFRADO
  paginaDeCifrado.classList.remove('disappear');//aparece página donde se va a mostrar la referencia ENCRIPTADA
  inicio.classList.add('disappear');//desaparece página donde indica qué quieres hacer
}

const descifrarReferencia=()=>{//constante página de DESCIFRADO
  paginaDeDescifrado.classList.remove('disappear');//aparece página donde se va a revelar la referencia (DESCIFRADO)
  inicio.classList.add('disappear');//desaparece página donde indica qué quieres hacer
}

// const encryptionReference=()=>{//Crear constante para mostrar REFERENCIA CIFRADA
//   showEncryptedPage.classList.remove('disappear');
//   root.classList.add('disappear');
//   let string=document.getElementById("message-to-hide").value;/*Obtiene el valor de la variable string*/
//   let offset=document.getElementById("hide-key").value;/*Obtiene el valor de la variable offset*/
//   document.getElementById("hide-message").innerHTML = window.cipher.encode(offset,string);
// }
//
// const showDiscoverMessage=()=>{
//   showDiscoverMessagePage.classList.remove('disappear');
//   discoverPage.classList.add('disappear');
//   const string=document.getElementById("message-to-discover").value;/*Obtiene el valor de la variable string*/
//   const offset=document.getElementById("discover-key").value;/*Obtiene el valor de la variable offset*/
//   document.getElementById("discover-message").innerHTML = window.cipher.decode(offset,string);
// }

/*Declaracion de eventos*/

iniciarCifrado.addEventListener('click',cifrarReferencia);
iniciarDescifrado.addEventListener('click',descifrarReferencia);
// discover.addEventListener('click',showDiscoverPage);
// hideButton.addEventListener('click',showHideMessage);
// discoverButton.addEventListener('click',showDiscoverMessage);
