export default function recebeDadosInfo(){
    // Recebendo Dados(Objeto/Json) do protuto
    const produtoString = localStorage.getItem('dados')
    const produto = JSON.parse(produtoString)

    // Recebendo Dados do nome do Card
    const nomeCard = localStorage.getItem('nomeCard')

    // Recebe o objeto do produto que deve ser colocado na página
    const objetoProduto = produto.find(el => el.nome === nomeCard)
    colocaProduto(objetoProduto)
    preco(objetoProduto)
    cores(objetoProduto)

    // Button Voltar
    const voltar = document.querySelector('.voltar > button')
    voltar.addEventListener('click', (event)=>{
        window.history.back()
    })
}


function colocaProduto(objeto){
    const tituloProduto = document.querySelector('.InfoTitulo')
    const tituloProdutoPC = document.querySelector('.pcInfoTitulo')
    
    tituloProduto.innerHTML = objeto.nome
    tituloProdutoPC.innerHTML = objeto.nome

    // Insere Imagem produto
    const imgSlide = document.querySelectorAll('.imgSlide')
    const imgThumb = document.querySelectorAll('.imgThumb')
    const arrayImg = [objeto.imagem, objeto.subImagem.sub1, objeto.subImagem.sub2, objeto.subImagem.sub3]
    imgSlide.forEach((el, i) => {
        // Imagem principal
        el.src = '../' + arrayImg[i]

        // Imagem secundaria
        imgThumb[i].src = '../' + arrayImg[i]
    })
}

function preco(objeto){
    const numeroQuant = document.querySelector('.number')
    const buttonInfo = document.querySelectorAll('.buttonInfo')

    const PrecoProduto = document.querySelector('#PrecoProduto')
    const converte = objeto.preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    PrecoProduto.innerHTML = converte

    buttonInfo.forEach(el =>{
        el.addEventListener('click', buttonQuant)
        el.addEventListener('touchend', buttonQuant)
    })

    function buttonQuant(event){
        event.preventDefault()
        const preco = Number(objeto.preco)
        if(event.currentTarget === buttonInfo[0]){
            if(numeroQuant.innerHTML > 1){
                numeroQuant.innerHTML --
                
                // Fazendo a multiplicação do preço do produto e convertendo
                const total = preco * numeroQuant.innerHTML

                const converteTotal = total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })
                PrecoProduto.innerHTML = converteTotal
            }
        }else if(event.currentTarget === buttonInfo[1]){
            if(numeroQuant.innerHTML < 10){
                numeroQuant.innerHTML ++

                 // Fazendo a multiplicação do preço do produto e convertendo
                const total = preco * numeroQuant.innerHTML

                const converteTotal = total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })
                PrecoProduto.innerHTML = converteTotal
            }else{
                alert('Você atingiu o maximo de produtos.')
            }
        }
    }
    
}

function cores(objeto){
    const nomeCor = document.querySelector('#nomeCor')
    const buttonCor = document.querySelectorAll('.buttonCor')
    buttonCor.forEach(el =>{
        if(objeto.cor === 'não'){
            el.style.background = 'rgb(74, 84, 95)'
            nomeCor.innerHTML = 'Não possui'
        }else{
            el.addEventListener('click', produtoCor)
            el.addEventListener('touchend', produtoCor)
        }
    })

    function produtoCor(event){
        event.preventDefault()
        nomeCor.innerHTML = event.target.id
    }
}