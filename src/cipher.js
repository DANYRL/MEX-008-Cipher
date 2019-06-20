window.cipher = {//Cipher es objeto, se crea en él metodo de cifrar y descifrar (metodo=funciones dentro de un objeto)
 encode : (offset,string)=> {//metodo encode, contiene los argumentos "ingredientes" (offset, string)
	offset = parseInt(offset)
	let result = "";
	string = string.toUpperCase();
	for(let i=0; i<string.length; i++){
	const ascii = string[i].charCodeAt();
	const formula = (ascii-65+offset)%26+65;
	const letter = String.fromCharCode(formula)
	result = result + letter
  }
  return result;
},
decode : (offset,string)=> {
 let result = "";
 offset = parseInt(offset)
 string = string.toUpperCase();
 for(let i=0; i<string.length; i++){
	const ascii = string[i].charCodeAt();
	const formula = (ascii-90-offset)%26+90;
	const letter = String.fromCharCode(formula)
	result = result + letter
 }
 return result;
 }
};
