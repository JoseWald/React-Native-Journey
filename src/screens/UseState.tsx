import React  , {useState} from "react";
import { View ,  Text , Button , StyleSheet } from "react-native";
import { useEffect } from 'react';
const Computer : React.FC = () =>{
    const [count , setCount] = useState<number>(0);
    useEffect(() => {
        console.log("Computer increased");
    },[count]);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Computer : {count}
            </Text>
            <Button title="Increment" onPress={() => setCount(count+1)}/>
            
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10,
        color:'white'
    },
})
export default Computer;