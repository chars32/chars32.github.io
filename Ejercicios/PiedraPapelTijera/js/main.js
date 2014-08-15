//creamos una lista para poder elegir, despues de sortear, la opcion de la pc
var opciones = ["Piedra", "Papel", "Tijera" , "Lizard", "Spock"];

//variable para almacenar el resultado
var resultado

//----------------------------------------------------------------------------------

//creamos una funcion para obtener el numero 
function numAleatorio(min, max){
	var numero = Math.floor( Math.random() * (max - min + 1) + min )
	return numero
};

//creamos una funcion para comparar las opciones y obtenemo el resultado
function juego(usuario, pc){
	//logica si es empate
	if(usuario === pc){
		resultado = "Empate"
	};

	//Logica piedra
	if(usuario === "Piedra"){
		if(pc === "Tijera" || pc === "Lizard"){
			resultado = "Ganas"
		}else if(pc === "Papel" || pc === "Spock"){
			resultado = "Pierdes"
		}
	};

	//Logica papel
	if(usuario === "Papel"){
		if(pc === "Piedra" || pc === "Spock"){
			resultado = "Ganas"
		}else if(pc === "Tijera" || pc === "Lizard"){
			resultado = "Pierdes"
		}
	};

	//Logica tijera
	if(usuario === "Tijera"){
		if(pc === "Papel" || pc === "Lizard"){
			resultado = "Ganas"
		}else if(pc === "Piedra" || pc === "Spock"){
			resultado = "Pierdes"
		}
	};

	//Logica lizard
	if(usuario === "Lizard"){
		if(pc === "Spock" || pc === "Papel"){
			resultado = "Ganas"
		}else if(pc === "Piedra" || pc === "Tijera"){
			resultado = "Pierdes"
		}
	};

	//Logica spock
	if(usuario === "Spock"){
		if(pc === "Tijera" || pc === "Piedra"){
			resultado = "Ganas"
		}else if(pc === "Papel" || pc === "Lizard"){
			resultado = "Pierdes"
		}
	};

};

//Hacemos funcion para saber que pinta si gana o pierde
function compara(resultado){	
	if(resultado === "Empate"){
		document.getElementById("resultado").innerHTML="<span>" + resultado + "</span>"
	}else if(resultado === "Ganas"){
		document.getElementById("resultado").innerHTML="<span>" + resultado + "</span>"
	}else if(resultado === "Pierdes"){
		document.getElementById("resultado").innerHTML="<span>" + resultado + "</span>"
	}
}

//Cambiar imagenes segun eleccion
function cambiar(user, pc){
	document.getElementById("usuario").innerHTML="<img src='imagenes/" + user + ".png'>"
	document.getElementById("pc").innerHTML="<img src='imagenes/" + pc + ".png'>"
}

// ----------------------------------------------------------------------------------

//obtenes la opcion que elige el usuario
$('li').click(function(){
	var OpcionUser = ($(this).text().trim())
	var OpcionPc = opciones[numAleatorio(0,4)]
	juego(OpcionUser, OpcionPc)
	cambiar(OpcionUser, OpcionPc)
	compara(resultado)

	console.log(OpcionUser, OpcionPc)
	console.log(resultado)
});
