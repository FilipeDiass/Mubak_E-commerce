import pegaDados from "./produto.js";

export default async function criaCards() { 
    const data = await pegaDados();

    console.log(data);
}

// Chame a função criaCards() quando quiser iniciar o processo assíncrono.

