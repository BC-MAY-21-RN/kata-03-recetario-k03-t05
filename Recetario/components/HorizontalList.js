import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import ListItem from './ListItem';

export default function HorizontalList({tittle,big,data,handleNavigation}){
        return( 
        <View>
            <Text style={styles.text}>{tittle}</Text>
            <ScrollView 
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
            >
                {
                    data.map(food => (
                        <ListItem 
                            key={food.title}
                            title={tittle}
                            name={food.title}
                            imageUri={food.src}
                            big={big}
                            handleNavigation={handleNavigation}
                            recipe={food.recipe}
                        />
                    ))
                }
            </ScrollView>
        </View>
        );

}

const styles = StyleSheet.create({
    text:{
        color:'#CC1C63',
        fontSize: 24,
        paddingTop: 20
    }
});