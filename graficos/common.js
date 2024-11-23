const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--primary-color'),
    size: 16,
    family: getCSS('--font')
}

function criarGrafico(data, layout) {
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    const config = {
        responsive: true,
        displayModeBar: false
    }
    Plotly.newPlot(grafico, data, layout, config)
}

function incluirTexto(texto) {
    const container = document.getElementById('graficos-container');
    
    // Verificando se o container foi encontrado
    if (!container) {
        console.error('Não foi possível encontrar o container "graficos-container".');
        return;
    }

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    
    // Verificando se o texto não está vazio
    if (texto.trim() === '') {
        console.error('Texto vazio detectado!');
        return;
    }

    paragrafo.innerHTML = texto;
    container.appendChild(paragrafo);
    console.log('Texto inserido com sucesso!');
}

export { getCSS, tickConfig, criarGrafico, incluirTexto }

