const mostrarListaEstudiantes = (estudiantes) => {
    console.log("Listado de estudiantes registrados:\n");
    estudiantes.forEach((estudiante) => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    });
    };

module.exports = {mostrarListaEstudiantes};