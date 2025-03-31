import React  , {useState , useEffect} from "react";
import { View ,  Text , StyleSheet} from "react-native";

const Horloge : React.FC = () =>{
    const [hour , setHour] = useState<string>(new Date().toLocaleDateString());
    useEffect(() => {
       const timer = setInterval(()=>{
            setHour(new Date().toLocaleTimeString());
       },1000);
       return ()=>{clearInterval(timer)}
    },[hour]);
    return(
        <View >
            <Text style={styles.text}>
                Current time : {hour}
            </Text>         
        </View>
    )

}
const styles = StyleSheet.create({
    text:{
        color:'white',
    }
});

export default Horloge;