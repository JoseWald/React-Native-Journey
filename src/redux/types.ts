export interface Article {
    id: string;
    title: string;
    description: string;
    content: string;
    imageUrl?: string;
  }
  
  export interface FavoritesState {
    favorites: Article[];
  }