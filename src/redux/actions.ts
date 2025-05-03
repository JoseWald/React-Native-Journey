import {Article} from './types';

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const SET_FAVORITES = 'SET_FAVORITES';

export const addFavorite = (article: Article) => ({
  type: ADD_FAVORITE,
  payload: article,
});

export const removeFavorite = (articleId: string) => ({
  type: REMOVE_FAVORITE,
  payload: articleId,
});

export const setFavorites = (favorites: Article[]) => ({
  type: SET_FAVORITES,
  payload: favorites,
});