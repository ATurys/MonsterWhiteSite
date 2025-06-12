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

    var fundoImg = document.getElementById("fundoLataMonsterInterno");
    let animationFrameId = null; //Define o frame inicial
    let mouseX = 0; // Posição inicial do eixo Y do mouse
    let mouseY = 0; // Posição inicial do eixo Y do mouse
        function movimentoMouseFundoIMG(e){
            //posição do mouse na tela
            console.log("Mouse se moveu!");
            mouseX = e.clientX
            mouseY = e.clientY

            //Isso evita que a função seja chamada a todo movimento, sendo chamada apenas em um frame novo no site, reduzindo o consumo computacional [De acordo com o Gemini]
            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(atualizarShadowBoxFundoImg)
            }
        }
        function atualizarShadowBoxFundoImg() {
            //atenuação pela posição do mouse
            console.log("Atualizando sombra!");
            let atenuacao = 0.5;

            //posição da div em relação ao centro da tela
            let posicaoDiv = fundoImg.getBoundingClientRect()
            let posicaoDivX = posicaoDiv.left + posicaoDiv.width / 2;
            let posicaoDivY = posicaoDiv.top + posicaoDiv.height / 2;

            //calcula a diferença entre o mouse e a posição da div
            let deltaX = mouseX - posicaoDivX
            let deltaY = mouseY - posicaoDivY

            //define a nova posição da box-shadow em posição oposta a posição do mouse
            let posicaoSombraNovaX = -deltaX * atenuacao; 
            let posicaoSombraNovaY = -deltaY * atenuacao;
            
            //Limita o quanto a box-shadow pode se mover (evita q fique muito para fora)
            const limite = 50;
            posicaoSombraNovaX = Math.max(-limite, Math.min(limite, posicaoSombraNovaX));
            posicaoSombraNovaY = Math.max(-limite, Math.min(limite, posicaoSombraNovaY));

    
            const blur = 20;
            const spreadBoxShadow = 10;
            const boxShadowCor = "#4A727E"

            
            fundoImg.style.boxShadow = `${posicaoSombraNovaX} ${posicaoSombraNovaY} ${blur} ${spreadBoxShadow} ${boxShadowCor}`

            animationFrameId = null;
            
        }
    document.addEventListener("mousemove", movimentoMouseFundoIMG);

    window.addEventListener('resize', () => {
    if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(atualizarShadowBoxFundoImg);
    }
    });

    //Ocultar barra lateral de navegação
    const linkIconeNavegacao = document.getElementById("linkIconeNavegacao")
    const divNavegacaoLateral = document.getElementById("barraNavegacaoLateral");

    linkIconeNavegacao.addEventListener("click", () => {
        divNavegacaoLateral.classList.toggle("visible")
    });
});