import iniciarMenu from './scripts/Menu/menu.js';
import iniciaSlideBanner from './scripts/Slide/slideBanner.js';
import { criaCards } from './scripts/Cards/insereCards.js';
import iniciaFavorito from './scripts/Favorito/favorito.js';
import iniciaCarrinho from './scripts/Carrinho/Carrinho.js';
import iniciaFiltro from './scripts/Filtro/filtro.js';
import enviaDados from './scripts/Envia&RecebeDados/enviaDados.js';

// Habilita as funções do Menu/Header
iniciarMenu();

// Habilita as funções do slideBanner
iniciaSlideBanner()

async function mainCard(){
    // Habilitas a Função para Criar os Cards
    await criaCards()

    // Habilita a Função de favoritos e Carrinho
    iniciaFavorito()
    iniciaCarrinho()

    // Envia Dados para outra parte do site
    enviaDados()
}
mainCard()

// Habilita a Função de Filtro
iniciaFiltro()
