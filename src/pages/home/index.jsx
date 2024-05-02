import React from 'react';

import { View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';

import {Feather as Icon} from '@expo/vector-icons';

import styles from '../../styles';

export default function Home() {
 return (
   <ImageBackground source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{width:274, height:368}}
   >

    <View style={styles.main}>
        <Image style={{width:180, height:42}} source={require('../../assets/logo.png')} />
        
        <Text style={styles.title}>Seu markteplace de coleta de residuos</Text>
        
        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Text>

    </View>

    <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
            <View style={styles.buttonIcon}>
                <Icon name="arrow-right" color="#FFF" size={24}/>
            </View>
            
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
    </View>
    
  
   </ImageBackground>

  );
}