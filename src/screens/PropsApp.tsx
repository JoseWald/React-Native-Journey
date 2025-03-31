import React from "react";
import { Text, View } from "react-native";
type MessageProps = {
    texte: string;
};
const Message: React.FC<MessageProps> = ({ texte }) => {
    return <Text style={{ fontSize: 18  , color:'white'}}>{texte}</Text>;
};
const PropsApp: React.FC = () => {
    return (
    <View>
        <Message texte="Bienvenue sur React Native!" />
        <Message texte="Apprenons les composants fonctionnels" />
    </View>
    );
};
export default PropsApp;
