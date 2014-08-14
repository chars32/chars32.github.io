//--- Declaramos arreglos y variables que usraemos

var matriz = [[],[],[],[],[],[]]

var unos = 0
var ceros = 0

var aciertos=0
var fallas=0

//--- Funciones para obtener los tiros malos y buenos del jugador

function tirosBuenos(){
	aciertos += 1
	return aciertos
}

function tirosMalos(){
	fallas += 1
	return fallas
}

//--- funcion para poder limpiar el html y se pinte un juego nuevo
function playAgain(){
	$('.otra').click(function(){
		location.reload()
	})
}

//--- funcion para dibujar tablero y contar los unos y ceros que en el se encuentran

function dibujarTablero(){
	for(x=0; x<=3; x++){
		for(y=0; y<=3; y++){
			matriz[x][y] = Math.floor( Math.random() * (1 - 0 + 1) + 0 )
			if(matriz[x][y]===0){
				$('#tablero').append('<div class="cuadros" id="' + matriz[x][y] + '"></div>')
				ceros += 1
			}else{
				$('#tablero').append('<div class="cuadros" id="' + matriz[x][y] + '"></div>')
				unos += 1
			}
		}
	}
};



//--- funcion para que cuando seleccionemos una carta cambie y contamos el tiro si es bueno o malo

function voltearCartas(){
	$('.cuadros').click(function(){
		var opcion = this.id
		if(opcion === "1"){
			$(this).addClass('verde')
			tirosBuenos()
			if(aciertos == unos){
				console.log("ganaste")
				$('#resultado').html('<figure><img src="img/win.jpg" /></figure>')
				$('#opcion').html('<p class="otra">¿Otra vez?</p>')
				playAgain()
			}
		}else{
			$(this).addClass('rojo')
			tirosMalos()
			if(fallas == ceros){
				console.log('perdiste')
				$('#resultado').html('<figure><img src="img/loose.png" /></figure>')
				$('#opcion').html('<p class="otra">¿Otra vez?</p>')
				playAgain()
			}
		}
	});	
};


//--- Funcion principal

function main(){
	dibujarTablero()
	voltearCartas()
}

main()