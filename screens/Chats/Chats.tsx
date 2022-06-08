import * as React from 'react';
import { View, Text, Dimensions, StyleSheet, Button } from 'react-native';
import { listaUsuarios } from '../../services/data';
import { listaUsuariosProps } from '../../services/interface';
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Feather as Icon} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ChatRoom from '../ChatRoom/ChatRoomScreen';
import Contacts from '../Contacts/Contacts';
import {AdMobBanner, AdMobInterstitial, AdMobRewarded} from "expo-ads-admob";

const {width:wWidth, height:wHeight} = Dimensions.get('window');

interface ChatsProps {}

const Chats = ({}: ChatsProps) => {
    const renderItem = ({item} : {item:listaUsuariosProps}) => {
    
    //const onClick = () => {
      //console.log(onmessage, 'clicado em ${listaUsuarios.nome}')
    //}
      
      return (
          <TouchableWithoutFeedback>
            <View style={styles.cardContainer}>

              <View style={styles.avatarContainer}>
            
                <View style={styles.avatarBox}></View>

                <View style={{paddingHorizontal: 12}}>
                  <Text>{item.nome}</Text>
                  <Text style={styles.silentText}>{item.ultimaMensagem}</Text>
                </View>

              </View>

              <View>
                <Text style={styles.silentText}>{item.ultimoVisto}</Text>
              </View>

            </View>
          </TouchableWithoutFeedback>
        ); 
    };

    <AdMobBanner
      adUnitID='	ca-app-pub-3940256099942544/6300978111'
      bannerSize='fullBanner'
      >
    </AdMobBanner>

    const navigation = useNavigation

  const newLocal = "contacts";
    return (

      <View style={styles.root}>
        <SafeAreaView>
          <FlatList data={listaUsuarios} renderItem={renderItem}>
            data={listaUsuarios}
            keyExtractor={(item: { id: { toString: () => any; }; }) => item.id.toString()}
            renderItem={renderItem}
          </FlatList>
        </SafeAreaView>

        <TouchableOpacity onPress={() => console.log('Contatos Iniciado')}>
          <View>
            <View 
              style={styles.floatingContainer}>
              <View style={styles.iconBox}>
                <Button 
                icon = {{name: 'message-square', color: '#fff'}} 
                size={30} 
                color={'#ffffff'}></Button>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
};

export default Chats;

const styles = StyleSheet.create({

  iconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  floatingContainer: {
    backgroundColor: 'teal',
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    right: 10,
    bottom: -270,
  },

  root: {
    flex: 1, 
    backgroundColor: '#fff',
  },

  cardContainer: {
    flexDirection:'row', 
    alignItems: 'center', 
    justifyContent:'space-between',
    widht: wWidth - 20,
    marginVertical: 5,
    marginHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 12,
  },

  avatarContainer: {
    flexDirection:'row', 
    alignItems:'center',
  },

  avatarBox: {
    width: 60,
    height: 60, 
    borderRadius: 30, 
    backgroundColor: 'grey',
  },

  silentText: {
    color: 'grey',
  },
})



