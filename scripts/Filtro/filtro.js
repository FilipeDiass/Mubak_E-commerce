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

    // Pega todos os cards da aba estoque e filtra
    const [...cardEstoque] = document.querySelectorAll('.cardEstoque')
    const arrayFiltro = produtos.filter(el => el.categoria === button[indice].innerHTML)

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

    const containerEstoque = document.querySelectorAll('.campEstoque')
    containerEstoque[0].innerHTML = ''
    containerEstoque[1].innerHTML = ''
    console.log(filtroFinal)
    filtroFinal.forEach((el, i)=>{
        const indice = i % 2 === 0? 0 : 1
        containerEstoque[indice].appendChild(el)
    })

}

export default function iniciaFiltro(){
    const buttonFiltro = document.querySelectorAll('.campFiltro > span')
    buttonFiltro.forEach((el)=>{
        el.addEventListener('click', filtro)
        el.addEventListener('touchend', filtro)

    })
}