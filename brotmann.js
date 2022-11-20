const horario = "http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires";
const contenedor = document.getElementById("contenedorTiempo");

fetch(horario)
    .then(respuesta => respuesta.json())
    .then(({datetime, day_of_week, day_of_year}) => {
        contenedor.innerHTML= `
            <h2>Horarios: </h2>
            <br>
            <p> Hora: ${datetime} </p>
            <br>
            <p> Dia de la Semana: ${day_of_week} </p>
            <br>
            <p> Dia del año: ${day_of_year} </p>
        
            `
    })
    .catch(error => console.log(error))

  
        
    