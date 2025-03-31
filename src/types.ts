
export type Produit = {
    id: number;
    nom: string;
    prix: number;
    description?: string;
};

export type RootStackParamList = {
    Accueil: undefined;
    Produits: undefined;
    DetailsProduit: { produit: Produit };
};