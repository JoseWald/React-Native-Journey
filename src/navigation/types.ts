import { Article } from '../types/article';

export type RootStackParamList = {
  Home: undefined;
  Details: { article: Article };
  Favorites: undefined;
};

// Extension des types globaux de React Navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}