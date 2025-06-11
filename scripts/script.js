document.addEventListener("DOMContentLoaded", () => {

    //Ajuste da Fonte do texto informativo
    const mediaQueryMobile = window.matchMedia("(min-width:767px)");
    const divTextoInformativo = document.getElementById("textoIntordutorio");
    const paragrafoTextoInformativo = divTextoInformativo.querySelector("p");

    function ajustarFonteTextoInformativo() {
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

    ajustarFonteTextoInformativo();

    window.addEventListener("resize", ajustarFonteTextoInformativo) //Ajusta a fonte toda vez que a tela for redimensionada
    mediaQueryMobile.addEventListener("change", ajustarFonteTextoInformativo);

    //Fazer o fundo da imagem de landing page responsiva [TODO]
    var fundoImg = document.getElementById("fundoLataMonster"); 
        function movimentoMouseFundoIMG(e){
            let mouse = e.clientX
            let mouseY = e.clientY

            let posicaoNovaX; 
            let posicaoNovaY;
        }
    document.addEventListener("mousemove", movimentoMouseFundoIMG);

    //Ocultar barra lateral de navegação
    const linkIconeNavegacao = document.getElementById("linkIconeNavegacao")
    const divNavegacaoLateral = document.getElementById("barraNavegacaoLateral");

    linkIconeNavegacao.addEventListener("click", () => {
        divNavegacaoLateral.classList.toggle("visible")
    });
});