

class Productos {
    constructor(producto, precio, stock,){
        this.producto = producto;
        this.precio = precio;
        this.stock = stock;
   
    } 
}


   
const panIntegral = new Productos("Pan integral", 360, 3, );
const panCenteno = new Productos("Pan de centeno", 200,4);
const panLino = new Productos("Pan de lino", 200,4);
const panMaiz = new Productos("Pan de maiz", 150,3);

const arrayProductos = [panIntegral,panCenteno, panLino, panMaiz];

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach(Productos => {
    let div = document.createElement("div");
    div.innerHTML = `   <div class="card" style="width: 18rem;">
    <img src="../imagenes/paneIntegral.jpg" alt="">"
    <div class="card-body">
      <h5 class="card-title">${Productos.producto}</h5>
      <p> precio: ${Productos.precio}.</p>
      <p> precio: ${Productos.stock}.</p>
      <bottom id="btn"> comprar </bottom>
    </div>
  </div> ` 
    contenedorProductos.appendChild(div);
})

const btn = document.getElementById("btn");

btn.addEventListener("click", ()=> {

    alert("haz añadido el producto al carrito") 

    
    
    
});
 
