

//1 passo - Importar as bibliotecas de navegacao

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//2 passo - Importar as telas
import Home from './pages/home';
import Mapas from './pages/mapas';

const Stack = createNativeStackNavigator();

export default function Routes() {
 return (
   <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Mapas" component={Mapas} />       
        </Stack.Navigator>
   </NavigationContainer>
  );
}