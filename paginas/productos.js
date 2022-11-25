

class Productos {
    constructor(producto, precio, stock, imagen){
        this.producto = producto;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
   
    } 
}


   
const panIntegral = new Productos("Pan Integral", 360, 3,"../imagenes/paneIntegral.jpg");
const brotchen = new Productos("Brotchen", 200,4,"../imagenes/Brotchen.jpg");
const panNueces = new Productos("Pan de Nueces", 200,4,"../imagenes/PanNueces.jpg");
const panMaiz = new Productos("Pan de Maiz", 150,3,"../imagenes/panMaiz.jpg");

const arrayProductos = [panIntegral,brotchen, panNueces, panMaiz];

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach(Productos => {
    let div = document.createElement("div");
    div.innerHTML = `   <div class="card" style="width: 18rem;">
    <img src="${Productos.imagen}" alt="">"
    <div class="card-body">
      <h5 class="card-title">${Productos.producto}</h5>
      <p> precio: ${Productos.precio}.</p>
      <p> precio: ${Productos.stock}.</p>
      <button type="button" class="btn btn-primary" id="btn">Comprar</button>
    </div>
  </div> ` 
    contenedorProductos.appendChild(div);
   
})

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
    alert("haz añadido el producto al carrito") 
    compra.push(array.productos);
    
  });
 
const compra = [];
