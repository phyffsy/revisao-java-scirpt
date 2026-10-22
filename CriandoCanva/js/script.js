const tela = document.getElementById("minhaTela");
const caneta = tela.getContext('2d');

// Quadrado
caneta.fillStyle = 'blue';
caneta.fillRect(300, 300, 100, 100);

// Circulo
caneta.fillStyle = 'red';
caneta.beginPath();
caneta.arc(200, 200, 50, 0, 2 * Math.PI);
caneta.fill();

// Triangulo
caneta.fillStyle = 'orange';
caneta.beginPath();
caneta.moveTo(100, 50);
caneta.lineTo(150, 150);
caneta.lineTo(50, 150);
caneta.closePath();
caneta.fill();
