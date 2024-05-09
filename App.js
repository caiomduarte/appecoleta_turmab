import { StatusBar } from 'expo-status-bar';

//Importando o AppLoading
import AppLoading from 'expo-app-loading';
import React from 'react';

//Importando as fontes do google fontes
import {Ubuntu_700Bold} from '@expo-google-fonts/ubuntu';
import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import {useFonts} from 'expo-font';

import Home from './src/pages/home';

//Importar o componente de Rotas
import Routes from './src/routes';

export default function App() {

  //Carregar as fontes que vamos utilizar
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if(!fontsLoaded){
     return <AppLoading/> 
  }

  else{
    return (
        <Routes/>
      );
  }
  
}

