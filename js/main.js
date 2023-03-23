function calcularTotal(arr){
    let resultado = 0;
    arr.forEach( producto =>{
        resultado = resultado + producto.precio * producto.cantidad
    })
    return resultado;
}

const carritoCompra= []


class Producto{
    constructor(numero,nombre, precio, cantidad){
        this.numero = numero
        this.nombre = nombre         
        this.precio = precio 
        this.cantidad = cantidad

    }
}

class ProductoControler{
    constructor(){
        this.listaProductos = []
    }
    existe(numero){
        this.listaProductos.some(producto => producto.numero == numero)
    }

    mostrarCatalogo(){
        let mostrarCatalogo = ""
        this.listaProductos.forEach(producto =>{
            mostrarCatalogo += producto.numero + " Producto: " + producto.nombre + " precio: $ "+ producto.precio+"\n"
        })
        return mostrarCatalogo
    }
}


const controladorCatalogo= new ProductoControler();
controladorCatalogo.agregar(new Producto (01, "Placa Video Radeon rtx 580", 150000, 0)) 
controladorCatalogo.agregar(new Producto (02, "Placa Video NVidia 3080", 350000, 0))
controladorCatalogo.agregar(new Producto (03, "Placa Video Radeon rtx 5800", 300000, 0))


alert (controladorCatalogo.mostrarCatalogo())
let rta = ""

do {
    let numeroProducto = prompt("ingrese el numero del producto")
    if(!isNaN(numero)){
        if (controladorCatalogo.existe(numero)){
            let cantidad = prompt("cuantos lleva?")
            const producto = controladorCatalogo.buscar(numero)
            producto.cantidad = cantidad
            carritoCompra.Push(producto)

        } else{
            console.log("el numero ingresado no es valido")
        }
    }
    

    rta = prompt("desea comprar algo mas? s/n")
    
} while (rta != "n");

