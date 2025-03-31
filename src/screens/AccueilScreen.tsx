
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type AccueilScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Accueil'>;

export default function AccueilScreen() {
    const navigation = useNavigation<AccueilScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue dans notre boutique</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Produits')}
            >
                <Text style={styles.buttonText}>Voir les produits</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333',
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        elevation: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});