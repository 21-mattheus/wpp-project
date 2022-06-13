import { AdMobBanner } from 'expo-ads-admob';
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Inputs from '../../components/Inputs';
import Submit from '../../components/Submit';

export interface ContactScreenProps {
}

export function ContactScreen (props: ContactScreenProps) {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
        <Text style={styles.textTitle}>Adicione um Contato</Text>
        <View style={{marginTop: 20}}></View>
        <Inputs name="Nome" icon="user"></Inputs>
        <Inputs name="Número" icon="number"></Inputs>
        <Button title='SALVAR' color='teal' onPress={() => console.log('Contato Salvo')}></Button>
      </View>
      </ScrollView>
    );
}

    <AdMobBanner
      adUnitID='ca-app-pub-3940256099942544/6300978111'
      bannerSize='fullBanner'
      >
    </AdMobBanner>

const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTitle: {
    color: 'teal', 
    fontSize: 30, 
    textAlign: 'center',
    marginVertical: 10,
    padding: 20,
  },

})

export default ContactScreen;

