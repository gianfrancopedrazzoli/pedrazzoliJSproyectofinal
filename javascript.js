const LISTADO_PRODUCTOS = [];
class Producto {
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }

    descuento() {
        this.precio *= 0.9;
        return this.precio;
    }

    cambioNombre() {
        let nombreProd = prompt('ingrese un nuevo nombre');
        this.nombre = nombreProd;
        return this.nombre;
    }

    agregarStock() {
        let cantidadStock = Number(prompt('ingrese cantidad'));
        while (isNaN(cantidadStock || null)) {
            cantidadStock = Number(prompt('ingrese cantidad'));
        }
        this.stock += cantidadStock;
    }

    venta() {
        let ventaProducto = Number(prompt('ingrese cantidad a vender'));
        if (ventaProducto > this.stock || this.stock === 0) {
            alert(`ùsted posee ${this.stock} unidades del producto`);
            alert('no hay unidades sufucientes para la venta');
            let confirmAddStock = confirm('desea agregar stock?');
            if (confirmAddStock === true) {
                return this.agregarStock();
            } else {
                alert('no agrego stock');
            }
        }
        if (ventaProducto <= this.stock) {
            this.stock -= ventaProducto;
            return this.stock;
        }
    }
}

function agregarProducto() {
    let nombreProducto = prompt('ingrese el nombre del producto');
    let categoriaProducto = prompt('ingrese la categoria del producto');
    let precioProducto = Number(prompt('ingrese el precio'));
    let stockProducto = Number(prompt('ingrese el stock'));

    const PROD = new Producto(nombreProducto, categoriaProducto, precioProducto, stockProducto);
    LISTADO_PRODUCTOS.push(PROD);
}
