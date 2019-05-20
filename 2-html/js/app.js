
var ans = document.getElmentById('answer');
var qns = prompt('cual es su nombre?');

if(qns === 'Diego') {
	ans.innerHTML = "Bienvenido Administrador: "+qns;
} else {
	ans.innerHTML = "Bienvenido Visitante: "+qns;
}