import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80, 
        paddingTop: 28,
        backgroundColor: '#F47C7C',
    }, 
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    }
});