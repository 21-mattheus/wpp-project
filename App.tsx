import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './container/Main';
import LoginScreen from './screens/Login/Login';

import Navigation from './navigation/Navigation';
import CadastroScreen from './screens/Login/Cadastro';

export default function App() {
  return (
    <Main></Main>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


