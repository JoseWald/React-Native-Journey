import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {addFavorite, removeFavorite} from '../redux/actions';
import {Article} from '../redux/types';
import {saveFavorites} from '../services/storage';

interface FavoriteButtonProps {
  article: Article;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({article}) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const isFavorite = favorites.some(fav => fav.id === article.id);

  const toggleFavorite = async () => {
    if (isFavorite) {
      dispatch(removeFavorite(article.id));
    } else {
      dispatch(addFavorite(article));
    }
    const updatedFavorites = isFavorite
      ? favorites.filter(fav => fav.id !== article.id)
      : [...favorites, article];
    await saveFavorites(updatedFavorites);
  };

  return (
    <TouchableOpacity onPress={toggleFavorite} style={styles.button}>
      <Icon
        name={isFavorite ? 'favorite' : 'favorite-border'}
        size={24}
        color={isFavorite ? 'red' : '#333'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
  },
});