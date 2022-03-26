import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileCard from '../../components/ProfileCard';

export interface CallsProps {
}

export function Calls (props: CallsProps) {
    return (
      <View style={styles.rootCalls}>
         
         <ProfileCard 
         title={'Luiz'} 
         subTitle={'Segunda-feira, 8:00 pm'} 
         create={false}>
         </ProfileCard>

      </View>
    );
}

export default Calls;

const styles = StyleSheet.create({

  rootCalls: {
    flex: 1,
    backgroundColor: '#fff',
  },

})
