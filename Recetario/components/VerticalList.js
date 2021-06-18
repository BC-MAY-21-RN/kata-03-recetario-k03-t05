import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {Ingredient} from './Ingredient';


export default function VerticalList({ingredients}){
    return( 
        <View style={{height:300}}>
            <ScrollView >
                {
                    ingredients.map(ingredient => (
                        <Ingredient {...ingredient}/>
                    ))
                }
            </ScrollView>
        </View>
    );
}
