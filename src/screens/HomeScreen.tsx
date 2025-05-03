import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {ArticleItem} from '../components/ArticleItem';
import {RootStackParamList} from '../navigation/AppNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {Article} from '../redux/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Introduction à React Native',
    description: 'Découvrez les bases de React Native',
    content: 'Contenu détaillé sur React Native...',
    imageUrl: 'https://reactnative.dev/img/logo-og.png',
  },
  {
    id: '2',
    title: 'Redux pour la gestion d état',
    description: 'Apprenez à utiliser Redux dans vos applications',
    content: 'Contenu détaillé sur Redux...',
    imageUrl: 'https://redux.js.org/img/redux-logo-landing.png',
  },
  {
    id: '3',
    title: 'TypeScript avec React',
    description: 'Comment intégrer TypeScript dans React',
    content: 'Contenu détaillé sur TypeScript...',
    imageUrl: 'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
  },
];

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Simuler un chargement asynchrone
    setTimeout(() => {
      setArticles(mockArticles);
    }, 500);
  }, []);

  const handleArticlePress = (article: Article) => {
    navigation.navigate('Details', {article});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
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
});