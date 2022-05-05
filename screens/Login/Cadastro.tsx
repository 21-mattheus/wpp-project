import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';

import Inputs from '../../components/Inputs';
import Submit from '../../components/Submit';

const CadastroScreen = props => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={styles.container}>
            <Text style={styles.textTitle}>Vamos Começar!</Text>
            <Text style={styles.textBody}>Crie uma Conta Para Acessar o Menssager!</Text>
          </View>
          <Input name="Nome" icon="user"></Input>
          <Input name="Email" icon="envelope"></Input>
          <Input name="Telefone" icon="phone"></Input>
          <Input name="Senha" icon="lock" pass={true}></Input>
          <Submit title='CRIAR CONTA' color='teal'></Submit>
          <View style={{flexDirection: 'row'}}>
              <Text style={styles.textBody}>Já Possuo Uma Conta</Text>
              <Text style={[styles.textBody, {color: 'teal'}]} onPress={() => props.navigation.navigate('Home')}>Login Aqui</Text>
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