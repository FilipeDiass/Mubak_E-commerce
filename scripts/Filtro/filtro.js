import { Produtos } from "../Cards/insereCards.js"

function filtro(event){
    event.preventDefault()

    // Pega os Botões de click que aciona o filtro
    const campFiltro = document.querySelector('.campFiltro')
    const button = [...campFiltro.children]

    // Pega o indice do botão
    const indice = button.findIndex(el => el === event.currentTarget)

    // Pega os Produtos do arquivo Json
    const produtos = Produtos()

    // Pega todos os cards da aba estoque e filtra o json
    const [...cardEstoque] = document.querySelectorAll('.cardEstoque')
    const arrayFiltro = produtos.filter(el => el.categoria === button[indice].innerHTML)
    
    // Me da os Cards filtrados
    const filtroFinal = []
    for(let i = 0; i < arrayFiltro.length; i++){
        for(let j = 0; j < cardEstoque.length; j++){
            const nomeEstoque = cardEstoque[j].querySelector('.tituloCardEstoque').innerHTML
            if(arrayFiltro[i].nome === nomeEstoque){
                filtroFinal.push(cardEstoque[j])
                break;
            }
        }
    }
    
    // Filtra os cards
    cardEstoque.forEach(el => el.style.display = 'none')
    filtroFinal.forEach(el => el.style.display = 'block')

    // Volta todos o itens
    if(filtroFinal.length === 0)cardEstoque.forEach(el => el.style.display = 'block')

}

export default function iniciaFiltro(){
    const buttonFiltro = document.querySelectorAll('.campFiltro > span')
    buttonFiltro.forEach((el)=>{
        el.addEventListener('click', filtro)
        el.addEventListener('touchend', filtro)

    })
}