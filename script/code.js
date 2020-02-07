const Api_key="0b18466303b44c64aa356389f464c7b2";
let minhaPagina = document.getElementById("news")

let config = {
    method: "get"
    }
    
let resposta = fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey="+Api_key,config)
.then((resposta)=>{
    return resposta.json()
})
.then((json)=>{
    let btncarregar = document.getElementById("exibir")
    btncarregar.onclick=(event)=>{
    mostrarNaTela(json.articles)}

})


function mostrarNaTela(listaNoticias){
    listaNoticias.forEach((texto,index) => {
    let informacao = ` <div class="col-md-4 informacoes">
    <div class="card ">
        <img class="card-img"
            src=${listaNoticias[index].urlToImage}
            alt="imagem" title="imagem" width="200px">
        <h2 class="text-center">${listaNoticias[index].title}</h2>
        <div class="resumo text-wrap card-body text-justify">${listaNoticias[index].description}</div>
            <button onclick="window.open('  ${listaNoticias[index].url}');" class="btn btn-primary">ver noticia completa</button>
    </div>
</div>`

minhaPagina.insertAdjacentHTML("beforeend",informacao)

    });
}


