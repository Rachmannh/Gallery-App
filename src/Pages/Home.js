import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import BioCard from '../Components/BioCard';
import PhotoList from '../Components/PhotoList';

const Homepage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.biocardStyle}>
          <BioCard navigation={navigation} />
        </View>
        <View style={{flex: 2}}>
          <PhotoList navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  biocardStyle: {
    flex: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Homepage;
