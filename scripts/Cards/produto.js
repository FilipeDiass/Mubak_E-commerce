export default function pegaDados(){
    return fetch('scripts/Cards/itens.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha na solicitação');
            }
            return response.json();
        })
        .then(item => item.itensDestaque)
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o arquivo JSON:', error);
        });
} 