import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class Inputs extends Component {

    state = {isFocused: false};

    onFocusChange = () => {
        this.setState({isFocused: true})
    }

    render() {
        return(
            <View style={[styles.container,  {borderColor: this.state.isFocused ? '#6b6b6b': 'teal'}]}>
                <Input placeholder={this.props.name} 
                       onFocus={this.onFocusChange} 
                       inputContainerStyle={styles.inputContainer}
                       inputStyle={styles.inputText}
                       secureTextEntry={this.props.pass}
                       leftIcon={
                           <Icon
                           name={this.props.icon}
                           size={14}
                           color={this.state.isFocused ? '#6b6b6b' : 'grey'}>
                           </Icon>
                       }>
                </Input>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: 50,
        borderRadius: 100,
        marginVertical: 10,
        borderWidth: 3.5,
    },
    
    inputContainer:{
        borderBottomWidth: 0,
    },

    inputText:{
        color: '#6b6b6b',
        marginLeft: 5,
    },
});

export default Inputs;