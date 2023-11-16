export default function fichaTecnica(){
     // Recebendo Dados(Objeto/Json) do protuto
     const produtoString = localStorage.getItem('dados')
     const produto = JSON.parse(produtoString)
 
     // Recebendo Dados do nome do Card
     const nomeCard = localStorage.getItem('nomeCard')
     objetoProduto = produto.find(el => el.nome === nomeCard)

     const spanFicha = document.querySelector('.campTitulo')
     spanFicha.addEventListener('click', verFichaTecnica)
     spanFicha.addEventListener('touchend', verFichaTecnica)
}

let objetoProduto
function verFichaTecnica(event){
    event.preventDefault()

    const fichaTecnica = document.querySelector('.fichaTecnica')
    fichaTecnica.classList.toggle('abreFicha')

    const tituloFicha = document.querySelectorAll('.tituloFicha')
    const especificacao = document.querySelectorAll('.especificacao')

    let teste = 0
    for(const key in objetoProduto.especificacoesTecnicas){
        tituloFicha[teste].innerHTML = key + ':'
        especificacao[teste].innerHTML ='- ' + objetoProduto.especificacoesTecnicas[key]
        teste ++
    }
    

}