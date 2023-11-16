import { Produtos } from "../Cards/insereCards.js";

export default function enviaDados(){
    const dados = Produtos()
    localStorage.setItem('dados', JSON.stringify(dados))

    nameCard()
}

function nameCard(){
    const cards = document.querySelectorAll('.corpoCard')
    cards.forEach(el => {
        el.addEventListener('click', pegaNome)
        el.addEventListener('touchend', pegaNome)
    })

    function pegaNome(event){
        const nome = event.currentTarget.querySelector('.tituloCard').innerHTML
        localStorage.setItem('nomeCard', nome)
        window.location.href = 'pages/produtoInfo.html'
    }
}