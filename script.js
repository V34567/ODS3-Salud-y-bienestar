const imagenes = [
"4.jpg",
"3.jpg",
"7.jpg"
];

let index = 0;

setInterval(() => {
index = (index + 1) % imagenes.length;
document.getElementById("imagenCarrusel").src = imagenes[index];
}, 3000);
