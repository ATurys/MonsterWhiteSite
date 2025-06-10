document.addEventListener("DOMContentLoaded", () => {
    const mediaQueryMobile = window.matchMedia("(min-width:767px)");
    const divTextoInformativo = document.getElementById("textoIntordutorio");
    const paragrafoTextoInformativo = divTextoInformativo.querySelector("p");

    function ajustarFonte() {
        const alturaMaxima = 140;
        let tamanhoFonte = 25;
        /*line-height * font-size == tamanho por linha
        5 linhas = 1.1 * 25 (aprox 140px)*/

        paragrafoTextoInformativo.style.fontSize = tamanhoFonte + "px"
        if (!mediaQueryMobile.matches) { //Executa se for em uma tela mobile (767px)
            
            while (paragrafoTextoInformativo.scrollHeight > alturaMaxima && tamanhoFonte > 13) {
                tamanhoFonte--;
                paragrafoTextoInformativo.style.fontSize = tamanhoFonte + "px"

            }

        }
    }

    ajustarFonte();

    window.addEventListener("resize", ajustarFonte()) //Ajusta a fonte toda vez que a tela for redimensionada
    
    mediaQueryMobile.addEventListener("change", ajustarFonte);
});