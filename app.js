// Esta função é responsável por realizar uma pesquisa e exibir os resultados na página.
function pesquisar() {
    
    // Obtém a seção onde os resultados serão exibidos pelo seu ID.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p class='aviso'>Para encontrar um jogador, preencha o campo acima!</p>"
        return 
    }

    //Transforma em letra minúscula tudo o que for digitado no campo de pesquisa
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = '';
    let titulo = '';
    let descricao = '';
    let tags = '';

    // Itera sobre cada elemento do array 'dados' (que não foi mostrado no código).
    // Para cada elemento, cria um novo elemento HTML 'div' com as informações do dado.
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        //Verifica se a palavra digitada está contida na base de dados
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}
                </p>
                <a href=${dado.link} target="_blank">Saiba mais</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p class='aviso'>Nenhum resultado foi encontrado!</p>"
    }

    // Atribui o conteúdo da string 'resultados' ao elemento HTML 'section'.
    // Isso substitui o conteúdo anterior da seção pelos novos resultados da pesquisa.
    section.innerHTML = resultados;

}
