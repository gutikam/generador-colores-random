const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor; // Usa el color generado aleatoriamente
    color.textContent = randomColor; // Muestra el color generado
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}