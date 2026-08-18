function mostrarEstilo(estilo) {

    const resultado = document.getElementById("resultado");

    if (estilo === "Y2K") {

        resultado.innerHTML = `
            <strong>Seu estilo é Y2K!</strong>
            <br>
            Você combina com peças clássicas,
            sofisticadas e atemporais. Brinque com as proporções, 
            invista em acessórios marcantes, aposte em texturas, brilho e sapatos destaque 
            como botas e sandálias de plataforma.
        `;

    } else if (estilo === "streetwear") {

        resultado.innerHTML = `
            <strong>Seu estilo é Streetwear!</strong>
            <br>
            Você combina com looks modernos,
            urbanos e cheios de personalidade. Aposte em moletons e camisas oversized, 
            faça sobreposição de peças e lembre-se que o calçado costuma ser o ponto focal nesse estilo.
        `;

    } else if (estilo === "casual") {

        resultado.innerHTML = `
            <strong>Seu estilo é Casual!</strong>
            <br>
            Você combina com peças versáteis e práticas que priorizam conforto.
            Foque em peças coringa como camisetas de algodão e blazers, utilize
            cores neutras, calçados confortaveis e invista na mistura de peças
            despojadas e sofisticadas.
        `;
    }

    resultado.style.display = "block";
}