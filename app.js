function pesquisar (){
    let section = document.getElementById
    ("resultados-pesquisa")
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if(campoPesquisa == ""){
        section.innerHTML = "Nenhum jogador encontrado.."
return
    }
    campoPesquisa = campoPesquisa.toLowerCase()


    console.log(campoPesquisa);


let resultados = "";
let titulo = "";
let descricao = "";
for(let dado of dados){
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
        <h1>${dado.titulo}</h1>
        <p><img src="${dado.imagem}" width="300" height="200">Divulgaçao/ ${dado.divulgaçao} //<a href="${dado.perfil}"target="_blank">${dado.titulo} Social</a></p> <p>${dado.descricao}</p>
        <a href="${dado.link}"target="_blank">Mais Informações</a>
        </div> `;
    }
}
section.innerHTML = resultados
}


