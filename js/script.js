const text = "juntem-se a nós na missão de limpar os mares, transformando cada reciclagem em uma onda de mudança positiva";

const speed = 50;
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.querySelector('#text-animado').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();