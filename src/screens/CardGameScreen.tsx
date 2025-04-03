import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Card = {
  value: number;
  family: 'carreau' | 'coeur' | 'pique' | 'trefle';
};

const CardGameScreen = () => {
  const [cards, setCards] = useState<Card[]>([
    { value: 1, family: 'carreau' },
    { value: 2, family: 'carreau' },
    { value: 3, family: 'carreau' },
    { value: 7, family: 'carreau' },
    { value: 4, family: 'carreau' },
    { value: 5, family: 'carreau' },
    { value: 6, family: 'carreau' },
    { value: 7, family: 'carreau' },
    { value: 8, family: 'carreau' },
  ]);

  const handleCardPress = (index: number) => {
    if (index === 4) {
      setCards(prevCards => 
        prevCards.map((card, i) => 
          i === index 
            ? { ...card, value: card.value === 1 ? 7 : card.value + 1 }
            : card
        )
      );
    } else {
      setCards(prevCards => 
        prevCards.map((card, i) => 
          i === index 
            ? { ...card, family: getNextFamily(card.family) }
            : card
        )
      );
    }
  };

  const getNextFamily = (currentFamily: Card['family']): Card['family'] => {
    switch(currentFamily) {
      case 'carreau': return 'coeur';
      case 'coeur': return 'pique';
      case 'pique': return 'trefle';
      case 'trefle': return 'carreau';
    }
  };

  const renderCard = (card: Card, index: number) => {
    const cardSymbols = {
      carreau: '♦',
      coeur: '♥',
      pique: '♠',
      trefle: '♣'
    };

    return (
      <TouchableOpacity 
        key={`card-${index}`}
        style={styles.card}
        onPress={() => handleCardPress(index)}
      >
        <Text style={styles.cardValue}>{card.value}</Text>
        <Text style={[
          styles.cardFamily,
          { color: card.family === 'coeur' || card.family === 'carreau' ? 'red' : 'black' }
        ]}>
          {cardSymbols[card.family]}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <View style={styles.row}>
          {renderCard(cards[0], 0)}
          {renderCard(cards[1], 1)}
          {renderCard(cards[2], 2)}
        </View>
        <View style={styles.row}>
          {renderCard(cards[3], 3)}
          {renderCard(cards[4], 4)}
          {renderCard(cards[5], 5)}
        </View>
        <View style={styles.row}>
          {renderCard(cards[6], 6)}
          {renderCard(cards[7], 7)}
          {renderCard(cards[8], 8)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  grid: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  card: {
    width: 80,
    height: 120,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardFamily: {
    fontSize: 36,
  },
});

export default CardGameScreen;
