export default async function pegaDados(){
    try {
        const response = await fetch('scripts/Cards/itens.json');
        if (!response.ok) {
            throw new Error('Falha na solicitação');
        }
        const item = await response.json();
        return item;
    }catch (error) {
        console.error('Ocorreu um erro ao carregar o arquivo JSON:', error);
    }
} 
