import React from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight,recipe} from 'react-native';

export default function ListItem({big,imageUri,name,handleNavigation,tittle,recipe}) {
    return(
        <View 
            style={big ? stylesBig.box: styles.box}
        >
            <TouchableHighlight onPress={() => handleNavigation(tittle,name,imageUri,recipe)}>
                <View>
                    <Image 
                        source = {imageUri} 
                        style = {big ? stylesBig.images: styles.images}
                    />
                    <Text 
                        style = {big ? stylesBig.imageText: styles.imageText}
                    >
                        {name}
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
      );
}

const styles = StyleSheet.create({
    box:{
        width: 140,
        paddingLeft: 10,
        marginRight: 15,
        paddingTop: 15
    },
    images:{
        borderRadius: 10,
        height: 140,
        resizeMode:'cover',
        width: '100%'
    },
    imageText:{
        color: 'white',
        fontSize: 20,
        marginTop: 5
    },

});


const stylesBig = StyleSheet.create({
    box:{
        ...styles.box,
        width: 155,
    },
    images:{
        ...styles.images,
        height: 170

    },
    imageText:{
        ...styles.imageText,
        fontSize: 22

    },

});