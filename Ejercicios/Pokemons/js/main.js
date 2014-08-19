var opcion = ""

var listapokemons = [
					["Garchomp",354,359,"Hielo","Dragon"],
					["Deoxys",304,359,"Bicho","Psyquico"],
					["Charizard",324,310,"Agua","Fuego"],
					["Arcanine",299,200,"Agua","Fuego"],
					["Mewtwo",350,300,"Fantasma","Psyquico"],
					["Pidgeot",200,150,"Hielo","Volador"],
					["Pikachu",100,250,"Agua", "Electrico"]
]

function listaNombres(){
	var nombres = [[],[],[],[],[],[],[]]
	for(x=0; x<listapokemons.length; x++){
		nombres[x] += listapokemons[x][0]
	}
	pintarPantalla(nombres)
	darClick(nombres)
}

function pintarPantalla(arg){
	var infoPokes = ""
	for(x=0; x<arg.length; x++){
		info = document.getElementById('listapokes')
		infoPokes += "<li id='"+arg[x]+"'>"+arg[x]+"</li>"
	}
	info.innerHTML=infoPokes
}
//-----------------------------------------------------
function darClick(arg){
	for(x=0; x<arg.length; x++){
		pokes = document.getElementById(arg[x])
		agregarEvento(pokes)
	}
}

function agregarEvento(arg){
	arg.addEventListener('click', function(){
		opcion = arg.innerText
		document.getElementById('primero').style.display = "none"
		darEstructura(opcion)
	})
}

function darEstructura(arg){
	for(x=0; x<listapokemons.length; x++){
		if(listapokemons[x][0] == arg){
			datos = new estructura(listapokemons[x][0], listapokemons[x][1], listapokemons[x][2], listapokemons[x][3], listapokemons[x][4])
			info = document.getElementById("datospokes")
			infodatos = "<h1>"+datos.nombre+"</h1>"
			infodatos += "<figure><img src=img/"+datos.nombre+".png /></figure>"
			infodatos += "<p id='vida' class='redondeo'> <b>Vida: </b>"+datos.vida+"</p>"
			infodatos += "<p id='ataque' class='redondeo'> <b>Ataque: </b>"+datos.ataque+"</p>"
			infodatos += "<p id='debilidad' class='redondeo'> <b>Debilidad: </b>"+datos.debilidad+"</p>"
			infodatos += "<p id='tipo' class='redondeo'> <b>Tipo: </b>"+datos.tipo+"</p>"
			info.innerHTML = infodatos		
		}
	}
}
//-----------------------------------------------------

function estructura(n, v, a, d, t){	
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.debilidad = d;
	this.tipo = t;
	return this
}

listaNombres()