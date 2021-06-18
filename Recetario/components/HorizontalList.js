import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import ListItem from './ListItem';

export default class HorizontalList extends React.Component {
    render(){
        return( 
        <View>
            <Text style={styles.text}>{this.props.tittle}</Text>
            <ScrollView horizontal = {true}
            showsHorizontalScrollIndicator = {false}>
                {
                    this.prop.data.map(food => (
                        <ListItem 
                            key={food.title}
                            title={this.props.tittle}
                            name={food.title}
                            imageUri={food.src}
                            big={this.props.big}
                            recipe={food.recipe}
                        />
                    ))
                }
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        color:'#CC1C63',
        fontSize: 24,
        paddingTop: 20
    }
});