export default function IniciaPrecoQuant(){
    const buttons = document.querySelectorAll('.maisMenos')
    buttons.forEach(el=>{
        el.addEventListener('click', precoQuant)
        el.addEventListener('touchend', precoQuant)
    })
}

function precoQuant(event){
    // Pegando todos os produtos(Json)
    const produtoString = localStorage.getItem('dados')
    const produtos = JSON.parse(produtoString)

    // Criando o button e verificando a class
    const button = event.currentTarget
    const verifica = button.classList.contains('buttonMenos')
    
    // Pegando o objeto(produto) no qual o botão foi clicado
    const corpoCard = button.closest('.containerCardCarrinho')
    const nomeCard = corpoCard.querySelector('.textCart').innerHTML
    const produto = produtos.find(el=> el.nome === nomeCard)

    // Adicionando quantidade ao produto
    const spanNumber = corpoCard.querySelector('.spanNumber')
    if(verifica && spanNumber.innerHTML > 1) spanNumber.innerHTML --
    if(!verifica && spanNumber.innerHTML < 10) spanNumber.innerHTML ++

    // Atualizando o preço do produto
    const preco = corpoCard.querySelector('.precoProduto')
    const precoConverter = produto.preco * spanNumber.innerHTML

    const converteTotal = precoConverter.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    preco.innerHTML = converteTotal

    precoTotal()
}

export function precoTotal(){
    const precoTotal = document.querySelector('#totalProduto')

    // Pegando todos os produtos(Json) e filtrando apenas o que estão na aba Carrinho
    const produtoString = localStorage.getItem('dados')
    const produtos = JSON.parse(produtoString)
    
    const cardsCart = [...document.querySelectorAll('.containerCardCarrinho')]
    const nomesCart = cardsCart.map(el=> el.querySelector('.textCart').innerHTML)
    const spanNumber = [...document.querySelectorAll('.spanNumber')]
    
    const produtoCart = []
    for(let i = 0; i < nomesCart.length; i++){
        for(let j = 0; j < produtos.length; j++){
            if(nomesCart[i] === produtos[j].nome){
                produtoCart.push(produtos[j])
                break;
            }
        }
    }
    
    const total = produtoCart.reduce((accumulator, el, i)=>{
        const contaTotal = accumulator + (el.preco * spanNumber[i].innerHTML)
        return contaTotal
    }, 0)

    const converteTotal = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })    

    precoTotal.innerHTML = converteTotal
}