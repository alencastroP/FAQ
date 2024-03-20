const elementoTopicos  = document.getElementById('topicos')
const botaoExpandir = document.querySelectorAll('.botao')
const conteudoTopico = document.querySelectorAll('.topico-conteudo')

async function inserirTopicos(listaDeTopicos) {
    elementoTopicos.innerHTML = ''
    listaDeTopicos.forEach(topicos => {
        elementoTopicos.innerHTML += `
            <div class="topicos">
            <h3 class="topico-titulo">${topicos.titulo}<img src="./icons/icon-plus.svg" class="botao"></h3>
            <p class="topico-conteudo">${topicos.conteudo}</p>
            </div>
        `         
    })
};

//Expandir botão

elementoTopicos.addEventListener("click", (event) => { 
    if (event.target.classList.contains('botao')){
        const topico = event.target.closest('.topicos');
        const conteudo = topico.querySelector('.topico-conteudo');
        const botaoImg = topico.querySelector('img');
            
        console.log(botaoImg)

        if(conteudo.classList.toggle('expandido')){
            conteudo.style.display = "block";
            botaoImg.src = "./icons/icon-minus.svg";
        }else{
            conteudo.style.display = "none";
            botaoImg.src = "./icons/icon-plus.svg";
        }

        console.log(topico)
    }});
    

//Função de pesquisa

const barraDePesquisa = document.querySelector(".search");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa(){
    const topicos = document.querySelectorAll(".topicos")

    if(barraDePesquisa.value != "" && barraDePesquisa.value != null){
        for(let topico of topicos){
            let titulo = topico.querySelector(".topico-titulo").textContent.toLowerCase();
            let valorFiltro = barraDePesquisa.value.toLowerCase();

            if(!titulo.includes(valorFiltro)){
                topico.style.display = "none";
            }else{
                topico.style.display = "block";
            }
        }
    }else{
        topicos.style.display = "block";
    }
}


