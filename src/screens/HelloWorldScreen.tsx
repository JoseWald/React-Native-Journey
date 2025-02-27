import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const HelloWorldScreen: React.FC = () =>{
  return(
    <View style={styles.container}>
        <Text style={styles.text}>Bienvenue sur React Native</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#333",
      },
})

export default HelloWorldScreen;
