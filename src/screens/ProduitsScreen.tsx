
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Produit } from '../types';

const produits: Produit[] = [
    { id: 1, nom: 'Ordinateur portable', prix: 999.99, description: 'PC haut de gamme' },
    { id: 2, nom: 'Smartphone', prix: 699.99, description: 'Dernier modèle' },
    { id: 3, nom: 'Tablette', prix: 399.99, description: 'Parfaite pour les lectures' },
    { id: 4, nom: 'Casque audio', prix: 199.99, description: 'Qualité sonore exceptionnelle' },
    { id: 5, nom: 'Souris sans fil', prix: 49.99, description: 'Précision optimale' },
];

type ProduitsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Produits'>;

export default function ProduitsScreen() {
    const navigation = useNavigation<ProduitsScreenNavigationProp>();

    const renderItem = ({ item }: { item: Produit }) => (
        <TouchableOpacity 
            style={styles.item}
            onPress={() => navigation.navigate('DetailsProduit', { produit: item })}
        >
            <Text style={styles.itemTitle}>{item.nom}</Text>
            <Text style={styles.itemPrice}>{item.prix.toFixed(2)} €</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={produits}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    list: {
        padding: 20,
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 2,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    itemPrice: {
        fontSize: 16,
        color: '#3498db',
        fontWeight: 'bold',
    },
});