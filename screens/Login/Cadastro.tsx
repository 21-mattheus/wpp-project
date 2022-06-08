import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import Inputs from '../../components/Inputs';
import Submit from '../../components/Submit';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CadastroScreen = props => {

  const [email, setEmail] = useState('')
  const [senha, setPassword] = useState('')

  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, senha)
    .then(usuario => console.log('Usuario criado com sucesso'))
    .catch(error => console.log('Usuario não criado'))

    return (
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={styles.container}>
            <Text style={styles.textTitle}>Vamos começar!</Text>
            <Text style={styles.textBody}>Crie uma conta para acessar ao Menssager!</Text>
          <View style={{marginTop: 20}}></View>
          
          <Input style={{backgroundColor: 'white',  paddingHorizontal: 15, paddingVertical: 10, borderRadius: 10, marginTop: 5}}
          placeholder='Email'
          icon="user" 
          value={email}
          onChangeText={text => setEmail(text)}
          ></Input>
          
          <Input style={{backgroundColor: 'white',  paddingHorizontal: 15, paddingVertical: 10, borderRadius: 10, marginTop: 5}}
          placeholder='Senha'
          icon="lock" 
          value={senha}
          onChangeText={text => setPassword(text)}
          ></Input>
          <Button title='CRIAR CONTA' color='teal'></Button>
          <View style={{flexDirection: 'row'}}>
              <Text style={[styles.textBody, {color: 'teal'}]} onPress={() => props.navigation.navigate('Login')}>Clique aqui para Logar.</Text>
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