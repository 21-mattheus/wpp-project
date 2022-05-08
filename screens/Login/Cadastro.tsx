import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';

import Inputs from '../../components/Inputs';
import Submit from '../../components/Submit';

const CadastroScreen = props => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={styles.container}>
            <Text style={styles.textTitle}>Vamos começar!</Text>
            <Text style={styles.textBody}>Crie uma conta para acessar ao Menssager!</Text>
          <View style={{marginTop: 20}}></View>
          <Inputs name="Nome" icon="user"></Inputs>
          <Inputs name="Email" icon="user"></Inputs>
          <Inputs name="Senha" icon="lock" pass={true}></Inputs>
          <Submit title='CRIAR CONTA' color='teal'></Submit>
          <View style={{flexDirection: 'row'}}>
              <Text style={[styles.textBody, {color: 'teal'}]} onPress={() => props.navigation.navigate('login')}>Clique aqui para Logar.</Text>
          </View>
          </View>
        </ScrollView>
      )
    }
  
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
      padding: 95,
    },
  
    textBody:{
      fontSize: 16,
      color: 'teal',
      textAlign: 'center',
      padding: -200,
    },
  })
  
  export default CadastroScreen;