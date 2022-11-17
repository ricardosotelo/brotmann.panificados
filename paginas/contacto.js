class registro {
    constructor (nombre, apellido, direccion, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion; 
        this.email = email; 
    }
}
const clientes = [];

const formulario =document.getElementById ("formulario");
const submit = document.getElementById ("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    clienteNuevo()
})
    
   


function clienteNuevo() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const direccion = document.getElementById("direccion").value;
    const email = document.getElementById("email").value;

    const nuevoCliente = new registro (nombre, apellido, direccion, email);
   
    clientes.push(nuevoCliente);
    console.log(clientes);
    formulario.reset();
}







