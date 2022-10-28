import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Detail = ({route}) => {
  let results = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <Image
          style={styles.images}
          source={{uri: results.item?.full_image_url}}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{results.item?.title}</Text>
        <Text style={styles.uploadText}>{results.item?.created_at}</Text>
        <Text style={styles.descText}>{results.item?.description}</Text>
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
    height: responsiveScreenHeight(47),
    backgroundColor: '000',
    aspectRatio: 1,
  },
  textContainer: {
    flex: 0.6,
    marginVertical: 90,
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
    marginVertical: 2,
  },
});

export default Detail;
