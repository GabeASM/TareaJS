
function combate() {
    crearPesonaje()

    
}
function numeroRandom(min , max ){
    return Math.random() * (max - min) + min 
}

function crearPesonaje () {
    let jugadores = []

    for(let i = 0 ;  i<2 ; i++){
        const vida = numeroRandom(100 , 150)
        let jugador = {
            nombre : 'Jugador' + i , 
            vidaMaxima : vida,
            vidaActual : vida ,
            daño : numeroRandom(15 , 30)
        }
        jugadores.push(jugador)
    }
    console.log(jugadores);

    pelea(jugadores)
   
}
function pelea(jugadores){
    let condicion = false
    let jugador = jugadores[0]
    let jugador2 = jugadores[1]

    while(condicion === false){
        console.log("jugador 1 le pega a jugador 2");
        jugador2.vidaActual = jugador2.vidaActual - jugador.daño

        console.log("jugador 2 le pega a jugodor 1");
        jugador.vidaActual = jugador.vidaActual - jugador2.daño

        console.log(jugador.vidaActual);
        console.log(jugador2.vidaActual);

        if(jugador.vidaActual <= 0) {
            console.log("JUGADOR 2 HA GANADO");
            condicion = true
        } 
        else if (jugador2.vidaActual <= 0){
            console.log("JUGADOR 1 HA GANADO ");
            condicion = true
        } 
    }
}


combate()
