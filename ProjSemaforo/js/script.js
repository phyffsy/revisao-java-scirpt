const tela = document.getElementById("minhaTela");
const caneta = tela.getContext("2d");

caneta.fillStyle = "gray";
caneta.fillRect(150, 50, 100, 280);

function desenharLuz(x, y, cor) {
    caneta.fillStyle = cor;

    caneta.beginPath();
    caneta.arc(x, y, 35, 0, 2 * Math.PI);
    caneta.fill();
}

// Luz vermelha
desenharLuz(200, 100, "red");

// Luz amarela
desenharLuz(200, 190, "yellow");

// Luz verde
desenharLuz(200, 280, "green");
