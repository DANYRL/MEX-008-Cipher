//Declaracion de variables
const inicio=document.getElementById("inicio");
const nivelDeSeguridadElegido=document.getElementById("nivel-de-seguridad-elegido");
const nivelDeSeguridadOtorgado=document.getElementById("nivel-de-seguridad-otorgado");
const ingresarReferencia=document.getElementById("ingresar-referencia");
const iniciarCifrado=document.getElementById("iniciar-cifrado");
const ingresarCodigo=document.getElementById("ingresar-codigo");
const iniciarDescifrado=document.getElementById("iniciar-descifrado");
const paginaDeCifrado=document.getElementById("pagina-de-cifrado");
const mostrarCodigo=document.getElementById("mostrar-codigo");
const paginaDeDescifrado=document.getElementById("pagina-de-descifrado");
const mostrarReferencia=document.getElementById("mostrar-referencia");

//Declaracion de funciones
const irAPaginaDeCifrado = () => {//constante pagina de CIFRADO
  paginaDeCifrado.classList.remove('disappear');//aparece página donde se va a mostrar la referencia ENCRIPTADA
  inicio.classList.add('disappear');//desaparece página donde indica qué quieres hacer
}

const irAPaginaDeDescifrado=()=>{//constante página de DESCIFRADO
  paginaDeDescifrado.classList.remove('disappear');//aparece página donde se va a revelar la referencia (DESCIFRADO)
  inicio.classList.add('disappear');//desaparece página donde indica qué quieres hacer
}

const mostrarCodigoSecreto=()=>{//Crear constante para mostrar REFERENCIA CIFRADA
   mostrarCodigo.classList.remove('disappear');
   inicio.classList.add('disappear');
   let string=document.getElementById("ingresar-referencia").value;/*Obtiene el valor de la variable string*/
   let offset=document.getElementById("nivel-de-seguridad-elegido").value;/*Obtiene el valor de la variable offset*/
   document.getElementById("mostrar-codigo").innerHTML = window.cipher.encode(offset,string);
}

const mostrarReferenciaCifrada=()=>{
   mostrarReferencia.classList.remove('disappear');
   inicio.classList.add('disappear');
   const string=document.getElementById("ingresar-codigo").value;/*Obtiene el valor de la variable string*/
   const offset=document.getElementById("nivel-de-seguridad-otorgado").value;/*Obtiene el valor de la variable offset*/
   document.getElementById("mostrar-referencia").innerHTML = window.cipher.decode(offset,string);
}

//Declarando eventos
iniciarCifrado.addEventListener('click',irAPaginaDeCifrado);
iniciarDescifrado.addEventListener('click',irAPaginaDeDescifrado);
iniciarCifrado.addEventListener('click',mostrarCodigoSecreto);
iniciarDescifrado.addEventListener('click',mostrarReferenciaCifrada);
