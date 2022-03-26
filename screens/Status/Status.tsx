import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {Feather as Icon, Entypo} from '@expo/vector-icons';
import ProfileCard from '../../components/ProfileCard';

const {width:wWidht, height:wHeight} = Dimensions.get('window');

export interface StatusProps {
}

export function Status (props: StatusProps) {
    return (
      <View style={styles.rootStatus}>
        
        <ProfileCard 
        title={'Meu Status'} 
        subTitle={'Adicionar Statuss'} 
        create={true}>
        </ProfileCard>

        <View style={styles.section}>

          <View style={{marginHorizontal: 12}}>
            <Text>Ataualizações</Text> 
          </View>

        </View>

        <ProfileCard 
        title={'Matheus'} 
        subTitle={'Hoje, 9;30 am'} 
        create={false}>
        </ProfileCard>

        <ProfileCard
        title={'Luiz'} 
        subTitle={'Ontem, 10;30 am'} 
        create={false}>
        </ProfileCard>

        <ProfileCard
        title={'Carlos'} 
        subTitle={'Ontem, 10;30 pm'} 
        create={false}>
        </ProfileCard>

        <View style={styles.floatingActionContainer}>
          <View style={styles.create}>
            <Entypo name='edit' size={26} color='teal'></Entypo>
          </View>

          <View style={styles.camera}>
          <Entypo name='camera' size={26} color='teal'></Entypo>
          </View>
        </View>

      </View>
    );
}

export default Status;

const styles = StyleSheet.create({
  
  create: {
    backgroundColor: 'lightgrey',
    height: 50,
    width: 50,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  camera: {
    backgroundColor: 'lightgrey',
    height: 50,
    width: 50,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginVertical: 12,
  },
  
  floatingActionContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignItems: 'center',
  },
  
  rootStatus: {
    flex: 1,
    backgroundColor: '#fff',
  },

  section: {
    backgroundColor: 'lightgrey',
    height: 30,
    justifyContent: 'center',
  },

});
