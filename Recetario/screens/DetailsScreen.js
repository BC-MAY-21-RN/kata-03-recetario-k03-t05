import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Text, Platform, StatusBar } from 'react-native';

//navigation.goBack()
export const DetailsScreen = ({navigation,route}) => {
    const { tittle,name,imageUri,recipe } = route.params;
    return (
        <SafeAreaView style={{...styles.container, paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 10}}>
            <View style={styles.container}>
                <Text style={{color:'#F00'}}>{name}</Text>    
            </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282828',
        flex: 1,
        justifyContent: 'flex-start',
    },
});
