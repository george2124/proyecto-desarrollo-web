// DARK MODE
document.getElementById("modoBtn").onclick = () => {
    document.body.classList.toggle("dark");
};

// CONTADOR ANIMADO
let contador = document.getElementById("contador");
let valor = 0;

let intervalo = setInterval(() => {
    valor += 50;
    contador.textContent = valor;

    if (valor >= 5000) clearInterval(intervalo);
}, 50);