import * as React from 'react';
import { View, Text } from 'react-native';
import { listaUsuarios } from '../../services/data';
import { listaUsuariosProps } from '../../services/interface';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ChatsProps {}

const Chats = ({}: ChatsProps) => {
    const renderItem = ({item} : {item:listaUsuariosProps}) => {
        return (
          <View>
            <Text>{item.nome}</Text>
          </View>
        ); 
    };

    return (
      <View>
        <SafeAreaView>
          <FlatList data={listaUsuarios} renderItem={renderItem}>
            data={listaUsuarios}
            keyExtractor={(item: { id: { toString: () => any; }; }) => item.id.toString()}
            renderItem={renderItem}
          </FlatList>
        </SafeAreaView>
      </View>
    );
};

export default Chats;
