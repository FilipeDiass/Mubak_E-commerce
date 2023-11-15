export default function recebeDadosInfo(){
    // Recebendo Dados(Objeto/Json) do protuto
    const produtoString = localStorage.getItem('dados')
    const produto = JSON.parse(produtoString)

    // Recebendo Dados do nome do Card
    const nomeCard = localStorage.getItem('nomeCard')

    // Recebe o objeto do produto que deve ser colocado na página
    const objetoProduto = produto.find(el => el.nome === nomeCard)
    colocaProduto(objetoProduto)
}


function colocaProduto(objeto){
    const tituloProduto = document.querySelector('.InfoTitulo')

    tituloProduto.innerHTML = objeto.nome
}