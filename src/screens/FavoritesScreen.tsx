import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {ArticleItem} from '../components/ArticleItem';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import {loadFavorites} from '../services/storage';
import {useDispatch} from 'react-redux';
import {setFavorites} from '../redux/actions';

type FavoritesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Favorites'
>;

interface FavoritesScreenProps {
  navigation: FavoritesScreenNavigationProp;
}

export const FavoritesScreen: React.FC<FavoritesScreenProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  useEffect(() => {
    const initializeFavorites = async () => {
      const savedFavorites = await loadFavorites();
      dispatch(setFavorites(savedFavorites));
    };
    initializeFavorites();
  }, [dispatch]);

  const handleArticlePress = (article: Article) => {
    navigation.navigate('Details', {article});
  };

  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Aucun favori pour le moment</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ArticleItem
            article={item}
            onPress={() => handleArticlePress(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
  },
});