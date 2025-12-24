// Definições de tipo centralizadas 

export interface Destino {
    id: number;
    nome: string;
    imagem: string;
    descricao: string;
    localizacao: string;
    melhorEpoca: string;
    preco: string;
}

export interface CardDestinoProps {
    destino: Destino;
    priority?: boolean;
}

export interface DestinoDetalhesProps {
    params: Promise<{ id: string }>;
}