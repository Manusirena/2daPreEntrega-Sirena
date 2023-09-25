const carrito = [];




const mostrarVestimenta = () => {
    const listaProductos = productos.filter((producto) => producto.tipo.includes('vestimenta'));
    
console.log(listaProductos);

    
};

const mostrarAlimentos= () => {
    const listaProductos = productos.filter((producto) => producto.tipo.includes('alimento'));
 
    console.log(listaProductos);

}

const mostrarElectodomesticos = () => {
    const listaProductos = productos.filter((producto) => producto.tipo.includes('electrodomesticos'));
   
    console.log(listaProductos);
}

const comprar = () => {
    const productosBaratos = prompt('que stock de productos desea ver? Vestimenta, Alimentos o electrodomesticos');

   if(productosBaratos === 'vestimenta') {
    mostrarVestimenta();
   }else if(productosBaratos === 'alimentos') {
    mostrarAlimentos();
   }else if(productosBaratos === 'electrodomesticos') {
    mostrarElectodomesticos();
   }else {
    alert('por favor ingrese un categoria')
   }
}

const comprarProductos = (listaProductos) => {
    let productoNombre = '';
    let productoCantidad = 0;
    let seguirComprando = false;

    do{
        productoNombre = prompt('¿Que producto desea comprar?'+'\n'+listaProductos.join('\n'));
        
        productoCantidad = parseInt(prompt('¿Quantos queres comprar?'));

       const encontrado = productos.some(producto => producto.nombre.toLocaleLowerCase() === productoNombre);

       if(encontrado) {
        const producto = productos.find(producto => producto.nombre.toLocaleLowerCase() === productoNombre); 
       }else {
        alert('el producto no se encuentra en el catalogo');
       }
       

       seguirComprando= confirm('Desea seguir comprando?')
    }while(seguirComprando);
}


const agregarAlCarrito = (producto) => {
    const productoId = producto.id;

    const productoRepetido = carrito.find(producto => producto.id === productoId);
    if (!productoRepetido) {
        carrito.push(producto);
    }else {
        
    }
    console.log(carrito);
    console.log(productoRepetido);
    
    
};
comprar();