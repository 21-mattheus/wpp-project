import { Entypo, Ionicons } from '@expo/vector-icons';
import { AdMobBanner } from 'expo-ads-admob';
import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import ProfileCard from '../../components/ProfileCard';

const {width:wWidth, height:wHeight} = Dimensions.get('window');
export interface CallsProps {
}

export function Calls (props: CallsProps) {
  
    return (
      <View style={styles.rootCalls}>
         <View style= {styles.iconCallsContainer}>
          
          <ProfileCard 
          title={'Luiz'} 
          subTitle={'Ontem, 8:00 am'} 
          create={false}>
          </ProfileCard>

          <View style={styles.iconCalls}>
            <Entypo name='chevron-thin-up' size={15} color='green'></Entypo>
            <Entypo name='phone' size={30} color='teal'></Entypo>
          </View>

         </View>

         <View style= {styles.iconCallsContainer}>
          
          <ProfileCard 
          title={'Luiz'} 
          subTitle={'Terça-feira, 22:00 pm'} 
          create={false}>
          </ProfileCard>

          <View style={styles.iconCalls}>
            
            <Entypo name='chevron-thin-down' size={15} color='red'></Entypo>
            <Entypo name='phone' size={30} color='teal'></Entypo>
            
          </View>

         </View>

         <View style= {styles.iconCallsContainer}>
          
          <ProfileCard 
          title={'Ane'} 
          subTitle={'Quarta-feira, 22:55 pm'} 
          create={false}>
          </ProfileCard>

          <View style={styles.iconCalls}>
            
            <Entypo name='chevron-thin-down' size={15} color='red'></Entypo>
            <Entypo name='phone' size={30} color='teal'></Entypo>
            
          </View>

         </View>

         <View style= {styles.iconCallsContainer}>
          
          <ProfileCard 
          title={'Felipe'} 
          subTitle={'Sexta-feira, 21:55 pm'} 
          create={false}>
          </ProfileCard>

          <View style={styles.iconCalls}>
            
            <Entypo name='chevron-thin-down' size={15} color='red'></Entypo>
            <Entypo name='phone' size={30} color='teal'></Entypo>
            
          </View>

         </View>

      </View>
    );
}

    <AdMobBanner
      adUnitID='ca-app-pub-3940256099942544/6300978111'
      bannerSize='fullBanner'
      >
    </AdMobBanner>

export default Calls;

const styles = StyleSheet.create({

  rootCalls: {
    flex: 1,
    backgroundColor: '#fff',
  },

  iconCalls: {
    marginVertical: 5,
    marginHorizontal: 5,
    alignItems: 'center', 
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal: 15,
  },

  iconCallsContainer: {
    flexDirection:'row', 
    alignItems: 'center', 
    justifyContent:'space-between',
    widht: wWidth - 20,
    marginVertical: 5,
    marginHorizontal: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 0,
  },

})
