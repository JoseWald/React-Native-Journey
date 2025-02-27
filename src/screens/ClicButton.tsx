import React , {useState} from 'react'
import { View  , Text , Button , StyleSheet } from 'react-native'

const ClicButton : React.FC = ()=>{
    const [count , setCount] = useState<number>(0);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Vous avez cliqué {count} fois</Text>
            <Button title="Cliquez moi" onPress={()=>setCount(count+1)} />
        </View>
    )
}

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color:"white"
    }
});

export default ClicButton;