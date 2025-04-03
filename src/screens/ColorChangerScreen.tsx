import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const ColorChangerScreen = () => {
  const [currentColor, setCurrentColor] = useState('rouge');

  const colors = {
    rouge: '#FF0000',
    vert: '#00FF00',
    bleu: '#0000FF'
  };

  return (
    <ImageBackground style={[styles.container, { backgroundColor: colors[currentColor] }]}>
      <Text style={styles.title}>Couleur actuelle : {currentColor}</Text>
      
      <View style={[styles.colorBox, { backgroundColor: colors[currentColor] }]} />

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: colors.rouge }]} 
        onPress={() => setCurrentColor('rouge')}
      >
        <Text style={styles.buttonText}>Rouge</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: colors.vert }]} 
        onPress={() => setCurrentColor('vert')}
      >
        <Text style={styles.buttonText}>Vert</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: colors.bleu }]} 
        onPress={() => setCurrentColor('bleu')}
      >
        <Text style={styles.buttonText}>Bleu</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  colorBox: {
    width: 100,
    height: 100,
    marginBottom: 30,
    borderRadius: 10,
    elevation: 3,
  },
  button: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    width: 200,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorChangerScreen;
