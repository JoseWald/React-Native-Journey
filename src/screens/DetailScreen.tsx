import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator';
import {FavoriteButton} from '../components/FavoriteButton';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface DetailScreenProps {
  route: DetailScreenRouteProp;
}

export const DetailScreen: React.FC<DetailScreenProps> = ({route}) => {
  const {article} = route.params;

  return (
    <ScrollView style={styles.container}>
      {article.imageUrl && (
        <Image source={{uri: article.imageUrl}} style={styles.image} />
      )}
      <View style={styles.header}>
        <Text style={styles.title}>{article.title}</Text>
        <FavoriteButton article={article} />
      </View>
      <Text style={styles.description}>{article.description}</Text>
      <Text style={styles.content}>{article.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  description: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
});