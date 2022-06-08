import { useLinkProps } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

const HomeWelcome = () => {


    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Email: (auth.currentUser?.email)</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontText} onPress={() => {
                    const auth = getAuth();
                    auth.signOut
                    props.navigation.navigate('Login')
                }}>SAIR
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeWelcome;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    button:{
        backgroundColor: 'teal',
        width: '120%',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 40,
    },

    buttontText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})