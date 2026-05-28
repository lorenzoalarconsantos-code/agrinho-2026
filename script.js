document.addEventListener("DOMContentLoaded", () => {
    // 1. Efeito de Revelação (Fade-in) do Cartão
    const card = document.getElementById("meuCard");
    setTimeout(() => {
        if(card) card.classList.add("visivel");
    }, 200);

    // 2. Efeito Máquina de Escrever (Typewriter) no Título
    const tituloElemento = document.getElementById("tituloDigitado");
    const textoCompleto = "O Agro é Forte";
    let index = 0;

    function digitarTexto() {
        if (tituloElemento && index < textoCompleto.length) {
            tituloElemento.textContent += textoCompleto.charAt(index);
            index++;
            setTimeout(digitarTexto, 100); // Velocidade da digitação
        }
    }

    // Inicia a digitação após o cartão aparecer
    setTimeout(digitarTexto, 800);
});
