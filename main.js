import iniciarMenu from './scripts/Menu/menu.js';
import iniciaSlideBanner from './scripts/Slide/slideBanner.js';
import { criaCardsDestaque, criaCardsEstoque } from './scripts/Cards/insereCards.js';
import iniciaFavorito from './scripts/Favorito/favorito.js';

//Habilita as funções do Menu/Header
iniciarMenu();

//Habilita as funções do slideBanner
iniciaSlideBanner()

async function mainCard(){
    //Habilitas a Função para Criar os Cards
    await criaCardsDestaque()
    await criaCardsEstoque()

    //Habilita a Função de favoritos e Carrinho
    iniciaFavorito()
}
mainCard()