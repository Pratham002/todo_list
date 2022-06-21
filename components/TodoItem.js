import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function TodoItem({item, pressHandler}) {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.text}</Text>
            <TouchableOpacity
                style={styles.delete}
                onPress={() => pressHandler(item.key)}
            >
                <FontAwesome5
                    name={'trash'}
                    size={20}
                    color='#EF9F9F'
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 15, 
        marginTop: 15, 
        borderColor: '#bbb', 
        borderWidth: 1, 
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }, 
    delete: {
        flex: 1,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        flex: 7,
        fontSize: 18,
        justifyContent: 'center',
        color: '#333',
    }
});