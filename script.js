function mostrarEstilo(estilo) {
    const resultado = document.getElementById("resultado");

    if (estilo === "Y2K") {
        resultado.innerHTML = `
            <strong>Seu estilo é Y2K!</strong>
            <br><br>
            Você combina com peças clássicas,
            sofisticadas e atemporais. Brinque com as proporções,
            invista em acessórios marcantes, aposte em texturas,
            brilho e sapatos destaque como botas e sandálias
            de plataforma.

            <br><br>

            <button onclick="buscarInspiracao('Y2K')">
                Descubra sua cor do dia
            </button>

            <div id="resultado-api"></div>
        `;

    } else if (estilo === "streetwear") {
        resultado.innerHTML = `
            <strong>Seu estilo é Streetwear!</strong>
            <br><br>
            Você combina com looks modernos,
            urbanos e cheios de personalidade. Aposte em moletons
            e camisas oversized, faça sobreposição de peças e
            lembre-se que o calçado costuma ser o ponto focal
            nesse estilo.

            <br><br>

            <button onclick="buscarInspiracao('Streetwear')">
                Descubra sua cor do dia
            </button>

            <div id="resultado-api"></div>
        `;

    } else if (estilo === "casual") {
        resultado.innerHTML = `
            <strong>Seu estilo é Casual!</strong>
            <br><br>
            Você combina com peças versáteis e práticas que
            priorizam conforto. Foque em peças coringa como
            camisetas de algodão e blazers, utilize cores neutras,
            calçados confortáveis e invista na mistura de peças
            despojadas e sofisticadas.

            <br><br>

            <button onclick="buscarInspiracao('Casual')">
                Descubra sua cor do dia
            </button>

            <div id="resultado-api"></div>
        `;
    }

    resultado.style.display = "block";
}


async function buscarInspiracao(estilo) {
    const resultadoApi = document.getElementById("resultado-api");

    resultadoApi.innerHTML =
        "<p>Gerando paleta de cores para o seu look...</p>";

    try {
        const resposta = await fetch(
            "https://www.thecolorapi.com/random"
        );

        if (!resposta.ok) {
            throw new Error("Erro ao consultar a API.");
        }

        const dadosCor = await resposta.json();

        const corHex = dadosCor.hex.value;
        const nomeCor = dadosCor.name.value;

        resultadoApi.innerHTML = `
            <div style="
                margin-top: 20px;
                padding: 15px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background: #fff;
                text-align: center;
            ">
                <h3>✨ Inspiração de cor para o estilo ${estilo}</h3>

                <p>
                    Aposte nesta cor como destaque
                    na sua composição hoje:
                </p>

                <div style="
                    width: 100px;
                    height: 100px;
                    background-color: ${corHex};
                    margin: 15px auto;
                    border-radius: 50%;
                    border: 2px solid #ccc;
                "></div>

                <p style="
                    font-weight: bold;
                    font-size: 16px;
                ">
                    ${nomeCor}
                </p>

                <p style="
                    color: #666;
                    font-size: 14px;
                ">
                    Código: ${corHex}
                </p>
            </div>
        `;

    } catch (erro) {
        resultadoApi.innerHTML =
            "<p>Não foi possível carregar a cor. Tente novamente.</p>";

        console.error("Erro ao buscar API de cores:", erro);
    }
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register("./service-worker.js")
            .then(function() {
                console.log("Service Worker registrado com sucesso!");
            })
            .catch(function(erro) {
                console.error("Erro ao registrar o Service Worker:", erro);
            });
    });
}