import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Text, Platform, StatusBar, ImageBackground , TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-elements';
import VerticalList from '../components/VerticalList';

export const DetailsScreen = ({navigation,route}) => {
    const { tittle,name,imageUri,recipe } = route.params;
    return (
        <SafeAreaView style={{...styles.container, paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 10}}>
            <View style={styles.container}>
                <View style={{position:'relative',height:400,alignItems:'center', paddingTop: 20}}>
                    <ImageBackground source={imageUri} style={styles.image}></ImageBackground>
                    <View style={{width:'95%', height:340, justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <TouchableHighlight onPress={() => navigation.goBack()}>
                                <Icon
                                    style = {styles.icons}
                                    name = 'close'
                                    color = 'white'
                                />
                            </TouchableHighlight>
                            <View style={{flexDirection:'row'}}>
                                <Icon
                                style = {styles.icons}
                                name = 'share'
                                color = 'white'
                                />
                                <Icon
                                style = {styles.icons}
                                name = 'favorite'
                                color = 'white'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{color:'#fff',fontSize:20}} >{tittle}</Text>
                            <Text style={{color:'#fff',fontSize:25}}>{name}</Text>
                        </View>
                    </View>
                </View>
                <View style={{width:'100%',alignItems:'center',marginTop:10}}>
                    <View style={{width:'95%'}}>
                        <View>
                            <Text style={{color:'#fff',fontSize:27}}>Ingredients</Text>
                            <Text style={{color:'#fff',fontSize:22}}>for {recipe.diners} servings</Text>
                        </View>
                        <VerticalList ingredients={recipe.ingredients}/>
                    </View>
                </View>
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
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: .6
    },
    icon:{
        paddingTop: 7
    },
});
