import * as React from 'react';
import { View, Text } from 'react-native';

export interface StatusProps {
}

export function Status (props: StatusProps) {
    return (
      <View>
         <Text>Status Screen</Text>
      </View>
    );
}

export default Status;