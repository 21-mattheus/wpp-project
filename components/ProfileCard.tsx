import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Feather as Icon, Entypo} from '@expo/vector-icons';

interface profileCardProps {
    title: string;
    subTitle: string;
    create: boolean;
  }
  
  const ProfileCard = ({title, subTitle, create} : profileCardProps ) => {
    return (
      <View style={styles.profileCardContainer}>
            
            <View style={styles.avatar}>
              {create ?
                 <View style={styles.plusContainer}>
                  <Icon name='plus' size={22} color={'#fff'}></Icon>
               </View>
              :null
              }
            </View>
  
            <View style={styles.textContainer}>
              <Text style={styles.label}>{title}</Text>
              <Text style={styles.silent}>{subTitle}</Text>
            </View>
  
          </View>
    )
}

export default ProfileCard;

const styles = StyleSheet.create({
  
    avatar: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: 'grey',
    },
  
    profileCardContainer: {
      marginVertical: 10,
      marginHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    plusContainer:{
      backgroundColor: 'teal',
      width: 20,
      height: 20,
      borderRadius: 10,
      position: 'absolute',
      bottom: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    textContainer: {
      paddingHorizontal: 10,
    },
  
    label: {
      fontSize: 17,
    },
  
    silent: {
      color: 'grey',
    },
  
});
