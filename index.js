const texto = "Seu texto aqui..."; // Texto que será digitado
const delay = 100; // Atraso entre cada caractere em milissegundos

let index = 0;

function typeWriter() {
    document.getElementById("texto-digitado").innerHTML += texto.charAt(index);
    index++;
    if (index < texto.length) {
        setTimeout(typeWriter, delay);
    } else {
        index = 0;
        document.getElementById("texto-digitado").innerHTML = "";
        setTimeout(typeWriter, delay);
    }
}

typeWriter(); // Inicia o loop
