const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)
    const texto = `
        Aproximadamente <span>${pessoasConectadas} bilhões</span> de pessoas estão conectadas à internet,
        o que representa <span>${porcentagemConectada}%</span> da população mundial. Essas pessoas 
        passam em média <span>${horas} horas e ${minutos} minutos</span> online todos os dias.
    `
    incluirTexto(texto)
}

vizualizarInformacoesGlobais()
