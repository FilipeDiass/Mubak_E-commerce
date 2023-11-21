import { objetoProduto } from "../ProdutoInfo/iconCartInfo.js"
import adcionaFavo from "./adcionaFavo.js"
import removeCartFavorito from "./removeCartFavorito.js"
import iniciaAdcionaCart from "../ProdutoInfo/adcionaCart.js"

function favoritoInfo(event){
    event.preventDefault()

    const iconeFavo = event.currentTarget
    const iconeImg = iconeFavo.querySelector('img')

    const favoAdd = '../Imagem/Icones/CoracaoCheio.svg'
    const favoRemove = '../Imagem/Icones/CoracaoVazio.svg'

    iconeFavo.classList.toggle('Favoritou')
    const verifica = iconeFavo.classList.contains('Favoritou')
    verifica? iconeImg.src = favoAdd : iconeImg.src = favoRemove

    const verifica2 = event.currentTarget.classList.contains('favo')
    let nomeProduto = undefined
    if(verifica2){
        nomeProduto = document.querySelector('.InfoTitulo').innerHTML

        const outroProduto = document.querySelectorAll('.tituloCard')
        outroProduto.forEach(nome=>{
            if(nome.innerHTML === nomeProduto){
                const iconeFavorito = nome.closest('.cardDestaque').querySelector('.coraDestaque')
                iconeFavorito.classList.toggle('Favoritou')
                iconeFavorito.querySelector('img').src = iconeImg.src
            }
        })
    }else{
        const cardProduto = event.currentTarget.closest('.cardDestaque')
        nomeProduto = cardProduto.querySelector('.tituloCard').innerHTML

        const outroProduto = document.querySelector('.InfoTitulo').innerHTML
        if(outroProduto === nomeProduto){
            const iconeFavorito = document.querySelector('.favoPrinicipal')
            iconeFavorito.classList.toggle('Favoritou')
            iconeFavorito.querySelector('img').src = iconeImg.src
            const iconeFavorito2 = document.querySelector('.favoPrinicipal2')
            iconeFavorito2.classList.toggle('Favoritou')
            iconeFavorito2.querySelector('img').src = iconeImg.src
        }
    }
    
    //Favo Duplo
    const favoDuplo = document.querySelectorAll('.favoDuplo')
    if(favoDuplo[0] === event.currentTarget){
        favoDuplo[1].classList.toggle('Favoritou')
        const verificaClass = favoDuplo[1].classList.contains('Favoritou')
        favoDuplo[1].querySelector('img').src = verificaClass? favoAdd : favoRemove
    }else if(favoDuplo[1] === event.currentTarget){
        favoDuplo[0].classList.toggle('Favoritou')
        const verificaClass = favoDuplo[1].classList.contains('Favoritou')
        favoDuplo[0].querySelector('img').src = verificaClass? favoAdd : favoRemove
    }

    // pega o objeto
    const produtoObjeto = objetoProduto(nomeProduto)

    adcionaFavo(produtoObjeto)

    // Remove cartCarrinho
    removeCartFavorito(produtoObjeto)

    // Aciona o botão de adcionar cards na aba favoritos
    iniciaAdcionaCart()

    // Verifica se o item está na aba carrinho
    verificaAdc()

    // Incrementa o preço dos produtos 
}

export default function iniciaFavoInfo(){
    const iconCoracao = document.querySelectorAll('.iconCoracao')
    iconCoracao.forEach(el=>{
        el.addEventListener('click', favoritoInfo)
        el.addEventListener('touchend', favoritoInfo)
    })
}

export function verificaAdc(){
    const listaFavo = document.querySelector("#listaFavo")
    const listaCart = document.querySelector("#listaCart")

    const iconRemove = '../Imagem/Icones/remove_shopping_cart-white.svg'
    const iconAdd = '../Imagem/Icones/add_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'

    const cardFavo = [...listaFavo.children]
    const cardCart = [...listaCart.children]

    for(let i = 0; i < cardFavo.length; i++){
        const cardF = cardFavo[i].querySelector('.textFavo').innerHTML

        const imgCart = cardFavo[i].querySelector('.imgCart')
        const button = cardFavo[i].querySelector('.adiciona')
        const txtButton = cardFavo[i].querySelector('.adiciona > p')

        button.classList.remove('foiParaCart')
        imgCart.src = iconAdd
        txtButton.innerHTML = 'Adicionar'
        for(let j = 0; j < cardCart.length; j++){
            const cardC = cardCart[j].querySelector('.textCart').innerHTML
            if(cardF === cardC){
                const imgCart = cardFavo[i].querySelector('.imgCart')
                const button = cardFavo[i].querySelector('.adiciona')
                const txtButton = cardFavo[i].querySelector('.adiciona > p')

                button.classList.add('foiParaCart')
                imgCart.src = iconRemove
                txtButton.innerHTML = 'Remover'
                break;
            }
        }
    }
}