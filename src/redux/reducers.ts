import {FavoritesState, Article} from './types';
import {ADD_FAVORITE, REMOVE_FAVORITE, SET_FAVORITES} from './actions';

const initialState: FavoritesState = {
  favorites: [],
};

type Action =
  | {type: typeof ADD_FAVORITE; payload: Article}
  | {type: typeof REMOVE_FAVORITE; payload: string}
  | {type: typeof SET_FAVORITES; payload: Article[]};

export default function favoritesReducer(
  state = initialState,
  action: Action,
): FavoritesState {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          article => article.id !== action.payload,
        ),
      };
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
}