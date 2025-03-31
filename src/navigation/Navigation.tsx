
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import AccueilScreen from '../screens/AccueilScreen';
import ProduitsScreen from '../screens/ProduitsScreen';
import DetailsProduitsScreen from '../screens/DetailsProduitScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
    return (
        <Stack.Navigator initialRouteName="Accueil">
            <Stack.Screen name="Accueil" component={AccueilScreen} options={{ title: 'Accueil' }} />
            <Stack.Screen name="Produits" component={ProduitsScreen} options={{ title: 'Nos Produits' }} />
            <Stack.Screen name="DetailsProduit" component={DetailsProduitsScreen} options={{ title: 'Détails du produit' }} />
        </Stack.Navigator>
    );
}