import React from 'react';
import { StyleSheet, View,  Text  } from 'react-native';

export const Ingredient = ({name,cant}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{cant}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282828',
        borderBottomColor: '#ffffff33',
        borderBottomWidth: 1,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingTop: 10,
    },
    text:{
        color:'white',
        fontSize: 20
    }
});