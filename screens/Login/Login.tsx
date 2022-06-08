import iconSet from '@expo/vector-icons/build/Fontisto';
import { useLinkProps } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Vibration, Button, ToastAndroid } from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
//import { HomeWelcome } from '../screens/Login/HomeWelcome';


import Inputs from '../../components/Inputs';
import Submit from '../../components/Submit';
import { useEffect, useState } from 'react';

const LoginScreen = props => {

  const [email, setEmail] = useState('')
  const [senha, setPassword] = useState('')

  const nav = useNavigation();

  const auth = getAuth(); 
    signInWithEmailAndPassword(auth, email, senha)
	  .then(usuarioLogado => {
	  }).catch(erro => {
       })

  const logar = async (dados) => {
      //Loga o usuário usando email e senha
      await signInWithEmailAndPassword(auth, dados.email, dados.senha)
            //.then(() => nav.navigate('app'))
            .catch(() => ToastAndroid.show("Email ou senha incorreta", 3000))
}


//export function LoginScreen (props: LoginScreenProps) {
//  const nav = useNavigation();
//
//    const logar = async(dados:any) =>{
        
//       await new Promise(resolve => setTimeout(resolve,1000));
//        if (dados.email == 'teste@teste.com' && dados.senha == '123456'){
//            nav.navigate('home');
//            Vibration.vibrate();
//        }
//        else{
//            Vibration.vibrate();
//            console.log("Email ou senha incorreta"); 
//        }

//    }
  
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>App Menssager!</Text>
        <Text style={styles.textBody}>Entre se você possui uma conta!</Text>
        <View style={{marginTop: 20}}></View>
        <Inputs name="Email" icon="user"></Inputs>
        <Inputs name="Senha" icon="lock"></Inputs>
        <View style={{width: '90%'}}>
          <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>Esqueceu sua senha?</Text>
        </View>
        <Button title='LOGAR' color='teal' onPress={() => props.navigation.navigate('Home')} ></Button>
        <View style={{flexDirection: 'row'}}>
              <Text style={styles.textBody}></Text>
              <Text style={[styles.textBody, {color: 'teal'}]} onPress={() => props.navigation.navigate('Cadastro')}>Cadastrar-se Aqui!</Text>
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


