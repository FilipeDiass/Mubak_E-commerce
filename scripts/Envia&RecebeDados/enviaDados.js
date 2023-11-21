import { Produtos } from "../Cards/insereCards.js";

export default function enviaDados(){
    const dados = Produtos()
    localStorage.setItem('dados', JSON.stringify(dados))

    nameCard('pages/produtoInfo.html')
}

// Envia o nome do card e acessa a pagina ProdutoInfo
export function nameCard(caminho){
    const cards = document.querySelectorAll('.corpoCard')
    cards.forEach(el => {
        el.addEventListener('click', pegaNome)
    })

    function pegaNome(event){
        const nome = event.currentTarget.querySelector('.tituloCard').innerHTML
        localStorage.setItem('nomeCard', nome)
        window.location.href = caminho
    }
}