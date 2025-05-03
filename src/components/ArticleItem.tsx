import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Article} from '../redux/types';
import {FavoriteButton} from './FavoriteButton';

interface ArticleItemProps {
  article: Article;
  onPress: () => void;
}

export const ArticleItem: React.FC<ArticleItemProps> = ({article, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {article.imageUrl && (
        <Image source={{uri: article.imageUrl}} style={styles.image} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
      </View>
      <FavoriteButton article={article} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});