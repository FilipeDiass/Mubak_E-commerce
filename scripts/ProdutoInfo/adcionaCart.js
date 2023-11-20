import { objetoProduto } from "./iconCartInfo.js";
import carrinhoInfo from "../CarrinhoInfo/carrinhoInfo.js";
import RemoveCartCarrinho from "../CarrinhoInfo/RemoveCartCarrinho.js";

export default function iniciaAdcionaCart(prodAdiciona){
    const adiciona = document.querySelectorAll('.adiciona')
    adiciona.forEach(el=>{
        el.addEventListener('click', adicionaCart)
        el.addEventListener('touchend', adicionaCart)
    });
}


function adicionaCart(event){
    event.preventDefault()

    const button = event.currentTarget

    // Pegando o objeto Produto
    const cardFavo = button.closest('.containerCardFavo')
    const nomeFavo = cardFavo.querySelector('.textFavo').innerHTML
    const produto = objetoProduto(nomeFavo)

    button.classList.toggle('foiParaCart')
    const verifica = button.classList.contains('foiParaCart')

    const iconRemove = '../Imagem/Icones/remove_shopping_cart-white.svg'
    const iconAdd = '../Imagem/Icones/add_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'

    if(verifica){
        const imgButton = button.querySelector('.imgCart')
        const txtButton = button.querySelector('p')
        imgButton.src = iconRemove
        txtButton.innerHTML = 'Remover'
    }else{
        const imgButton = button.querySelector('.imgCart')
        const txtButton = button.querySelector('p')
        imgButton.src = iconAdd
        txtButton.innerHTML = 'Adicionar'
    }

    // Verifica se o item está no carrinho
    const cardDestaque = [...document.querySelectorAll('.cardDestaque')]
    const iconPrincipais = document.querySelectorAll('div.cart')

    const card = cardDestaque.find(el=>{
        const nomeCard = el.querySelector('.tituloCard').innerHTML
        return nomeCard === produto.nome
    })

    const txtPrincipal = document.querySelector('.pcInfoTitulo').innerHTML
    const nomeCard = card.querySelector('.tituloCard').innerHTML

    const cartAdd = '../Imagem/Icones/add_shopping_cart.svg'
    const cartRemove = '../Imagem/Icones/remove_shopping_cart.svg'

    if(txtPrincipal === nomeCard){
        const iconCard = card.querySelector('.cartDestaque')

        // Adicionando as classes
        iconCard.classList.toggle('clicou')
        iconPrincipais[0].classList.toggle('clicou')
        iconPrincipais[1].classList.toggle('clicou')

        // Mudando os icones
        const imgcard = iconCard.querySelector('img')
        const imgCardP1 = iconPrincipais[0].querySelector('img')
        const imgCardP2 = iconPrincipais[1].querySelector('img')
        const verifica = iconCard.classList.contains('clicou')
        if(verifica){
            imgcard.src = cartRemove
            imgCardP1.src = cartRemove
            imgCardP2.src = cartRemove
        }else{
            imgcard.src = cartAdd
            imgCardP1.src = cartAdd
            imgCardP2.src = cartAdd
        }
    }else{
        const iconCard = card.querySelector('.cartDestaque')

        // Adicionando as classes
        iconCard.classList.toggle('clicou')

        // Mudando os icones
        const imgcard = iconCard.querySelector('img')
        const verifica = iconCard.classList.contains('clicou')
        verifica? imgcard.src = cartRemove : imgcard.src = cartAdd
    }

    // Adiciona ao Carrinho
    carrinhoInfo(produto)

    // Remove do Carrinho
    RemoveCartCarrinho()
}