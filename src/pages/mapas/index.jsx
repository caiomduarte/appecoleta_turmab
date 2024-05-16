
import { View,
         Text,
         TouchableOpacity,
         ScrollView,
         Image } from 'react-native';

import { Feather } from '@expo/vector-icons';

import MapView from 'react-native-maps';

import styles from '../../styles';

export default function Mapas() {
 return (
   <View style={styles.container}>
        <TouchableOpacity>
             <Feather name="arrow-left-circle" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Text style={styles.title}>Bem vindo.</Text>
        <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>
   
        <View>
            <MapView style={{width:'100%', height:'100%'}}>

            </MapView>
        </View>

    </View>
  );
}