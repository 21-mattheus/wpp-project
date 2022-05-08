import iconSet from '@expo/vector-icons/build/Fontisto';
import { useLinkProps } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Input } from 'react-native-elements';

import Inputs from '../../components/Inputs';
import Submit from '../../components/Submit';

const LoginScreen = props => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>App Menssager!</Text>
        <Text style={styles.textBody}>Entre se você possui uma conta!</Text>
        <View style={{marginTop: 20}}></View>
        <Inputs name="Email" icon="user"></Inputs>
        <Inputs name="Senha" icon="lock" pass={true}></Inputs>
        <View style={{width: '90%'}}>
          <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>Esqueceu sua senha?</Text>
        </View>
        <Submit title='LOGAR' color='teal' onPress={() => props.navigation.navigate('main')} ></Submit>
        <View style={{flexDirection: 'row'}}>
              <Text style={styles.textBody}></Text>
              <Text style={[styles.textBody, {color: 'teal'}]} onPress={() => props.navigation.navigate('cadastro')}>Cadastrar-se Aqui!</Text>
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

export default LoginScreen;


