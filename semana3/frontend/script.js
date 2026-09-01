const alumno = {
	nombre: "Roberto Romero",
	foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGeNgMUYtSonD21u8UZnGKc06xjN4wrmZf3oiMI54AtA&s",
	carrera: "Desarrollo de Software",
	anio: 2020,
	edad:18
}

document.getElementById("nombre").innerHTML = alumno.nombre 
document.getElementById("foto").src = alumno.foto
document.getElementById("carrera").innerHTML = alumno.carrera
document.getElementById("anio").innerHTML = alumno.anio
document.getElementById("edad").innerHTML = alumno.edad