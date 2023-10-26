function ItemQuantidade(event){
    const spanNumber = document.querySelectorAll('.spanNumber')

    console.log(spanNumber)
}
export default function iniciaItemQuantidade(){
    const buttonMenos = document.querySelectorAll('.buttonMenos')
    const buttonMais = document.querySelectorAll('.buttonMais')

    buttonMenos.forEach(el=>{
        el.addEventListener('click', ItemQuantidade)
        el.addEventListener('touchend', ItemQuantidade)
    })
    buttonMais.forEach(el=>{
        el.addEventListener('click', ItemQuantidade)
        el.addEventListener('touchend', ItemQuantidade)
    })
}