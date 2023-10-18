import iniciarMenu from './scripts/Menu/menu.js';
import iniciaSlideBanner from './scripts/Slide/slideBanner.js';
import { criaCardsDestaque, criaCardsEstoque } from './scripts/Cards/cards.js';

//Habilita as funções do Menu/Header
iniciarMenu();

//Habilita as funções do slideBanner
iniciaSlideBanner()

//Habilitas a Função para Criar os Cards
criaCardsDestaque()
criaCardsEstoque()