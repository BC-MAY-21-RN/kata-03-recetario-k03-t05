import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import HorizontalList from '../components/HorizontalList';
import data from '../data';
import recentData from '../data/recentData';

export default function HomeScreen({navigation}){

  const handleNavigation = (tittle,name,imageUri,recipe) => {
    navigation.navigate('Details',{
      tittle,
      name,
      imageUri,
      recipe
    })
  }

  return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <SearchBar />
            <HorizontalList
              handleNavigation = {handleNavigation}
              tittle = 'TRENDING' 
              data={data}
            />
            <HorizontalList
              handleNavigation = {handleNavigation}
              tittle = 'RECENT' 
              data={recentData}
              big = {true}
            />
        </View>
      </SafeAreaView>
  )
}
  
const styles = StyleSheet.create({
    container: {
    backgroundColor: '#282828',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    },
});