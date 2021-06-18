import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import HorizontalList from '../components/HorizontalList';
import data from '../data';
import recentData from '../data/recentData';

export default class MainScreen extends React.Component {

    render(){
    return (
      <SafeAreaView style={{flex: 1, /*paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 1*/}}>
        <View style={styles.container}>
            <SearchBar />
            <HorizontalList
              tittle = 'TRENDING' 
              data={data}
            />
            <HorizontalList
              tittle = 'RECENT' 
              data={recentData}
              big = {true}
            />
        </View>
      </SafeAreaView>
    );
  }
}
  
const styles = StyleSheet.create({
    container: {
    backgroundColor: '#282828',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    },
});