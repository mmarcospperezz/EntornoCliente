class Producto {
    constructor(id, nombre, categoria, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }

    actualizarCantidad(nuevaCantidad) {
        this.stock = cantidaActual;
        let nuevaCantidad = prompt(Number("Introduce la nueva cantidad"));
        this.stock = nuevaCantidad;
    }

    obtenerValorTotal(){
        return this.precio * this.stock;
    }
}

class Almacen extends Producto{
    constructor(productos){
        super(this.id, this.nombre, this.categoria, this.precio, this.stock)
        this.productos = productos[Producto];
    }

    agregarProducto(nuevoProducto){
        this.productos = [nuevoProducto];
    }

    eliminarProducto(id){
        let producto = id;
        if(this.productos.includes(id)){
            this.productos.delete(producto);
        }
    }

    buscarProducto(id){
        this.productos.find(id);
    }
}