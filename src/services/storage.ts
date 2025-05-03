import AsyncStorage from '@react-native-async-storage/async-storage';
import {Article} from '../redux/types';

const FAVORITES_KEY = 'favorites';

export const saveFavorites = async (favorites: Article[]) => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites', error);
  }
};

export const loadFavorites = async (): Promise<Article[]> => {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error loading favorites', error);
    return [];
  }
};