
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type DetailsProduitScreenRouteProp = RouteProp<RootStackParamList, 'DetailsProduit'>;

type Props = {
    route: DetailsProduitScreenRouteProp;
};

export default function DetailsProduitScreen({ route }: Props) {
    const { produit } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{produit.nom}</Text>
                <Text style={styles.price}>{produit.prix.toFixed(2)} €</Text>
                <Text style={styles.description}>{produit.description || 'Aucune description disponible'}</Text>
                <View style={styles.idContainer}>
                    <Text style={styles.idText}>ID: {produit.id}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    price: {
        fontSize: 20,
        fontWeight: '600',
        color: '#3498db',
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        lineHeight: 24,
    },
    idContainer: {
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    idText: {
        color: '#555',
        fontSize: 14,
    },
});