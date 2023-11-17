import carrinhoInfo from "../CarrinhoInfo/carrinhoInfo.js"
import RemoveCartCarrinho from "../CarrinhoInfo/RemoveCartCarrinho.js"

function iconCartInfo(event){
    event.preventDefault()
    
    const cartAdd = '../Imagem/Icones/add_shopping_cart.svg'
    const cartRemove = '../Imagem/Icones/remove_shopping_cart.svg'
    
    event.currentTarget.classList.toggle('clicou')
    const verifica = event.currentTarget.classList.contains('clicou')

    const cartImg = event.currentTarget.querySelector('img')
    verifica? cartImg.src = cartRemove : cartImg.src = cartAdd 

    // descobre o nome
    const verifica2 = event.currentTarget.classList.contains('cart')
    let nomeProduto = undefined
    if(verifica2){
        nomeProduto = document.querySelector('.InfoTitulo').innerHTML

        const outroProduto = document.querySelectorAll('.tituloCard')
        outroProduto.forEach(nome=>{
            if(nome.innerHTML === nomeProduto){
                const iconeCarrinho = nome.closest('.cardDestaque').querySelector('.cartDestaque')
                iconeCarrinho.classList.toggle('clicou')
                iconeCarrinho.querySelector('img').src = cartImg.src
            }
        })
    }else{
        const cardProduto = event.currentTarget.closest('.cardDestaque')
        nomeProduto = cardProduto.querySelector('.tituloCard').innerHTML

        const outroProduto = document.querySelector('.InfoTitulo').innerHTML
        if(outroProduto === nomeProduto){
            const iconeCarrinho = document.querySelector('.cartPrincipal')
            iconeCarrinho.classList.toggle('clicou')
            iconeCarrinho.querySelector('img').src = cartImg.src
        }
    }

    
    // pega o objeto
    const produtoObjeto = objetoProduto(nomeProduto)
    carrinhoInfo(produtoObjeto)

    // Remove cartCarrinho
    RemoveCartCarrinho(produtoObjeto)
}

export default function iniciaCartInfo(){
    const iconCart = document.querySelectorAll('.iconCart')
    iconCart.forEach(el=>{
        el.addEventListener('click', iconCartInfo)
        el.addEventListener('touchend', iconCartInfo)
    })
}

function objetoProduto(nomeProduto){
    const produtoString = localStorage.getItem('dados')
    const produto = JSON.parse(produtoString)

    const objetoProduto = produto.find(el => el.nome === nomeProduto)
    return objetoProduto
}

