import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const Detail = (route, navigation) => {
  let results = route.params;

  console.log('TESTERAN PARAMS', full_image_url);

  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <Image style={styles.images} source={{uri: results.full_image_url}} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Image Title</Text>
        <Text style={styles.uploadText}>Upload Date</Text>
        <Text style={styles.descText}>Description Text</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  imagesContainer: {
    flex: 1,
  },
  images: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(40),
    backgroundColor: '000',
    aspectRatio: 1,
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'flex-start',
    marginHorizontal: 10,
  },
  uploadText: {
    color: '#000',
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  descText: {
    color: '#000',
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default Detail;
