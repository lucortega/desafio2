debugger
let username = prompt ("ingrese su nombre")
username.toUpperCase
let huespedes = parseInt (prompt ("Ingrese cantidad de huespedes"))

 if (huespedes >4) {
    console.warn ("No tenemos disponibles cabanas para mas de 4 personas")
   
} else if (huespedes <=4){
    console.log ("bienvenidos a Cabana Verde")
}


function Cabana (nombre, huespedes, precio, servicio) {
    this.nombre = nombre
    this.huespedes = huespedes
    this.precio = precio
    this.servicio = servicio
    this.precioFinal = function () {
        return this.precio + this.servicio
    }
    this.allInclusive = function () {
        return this.precio + (this.servicio *2)
    }
}

const desayuno = 500
const traslados = 500




const cabanatutuca = new Cabana ("tutuca", 2, 2500, desayuno)
const cabanatata = new Cabana ("tata", 4, 4500, traslados)
const cabanamonte = new Cabana ("monte", 4, 6000, traslados)

