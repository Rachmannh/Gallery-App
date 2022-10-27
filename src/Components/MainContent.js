import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const MainContent = () => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require('../Img/main-content-img.png')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 80,
  },
  image: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(30),
  },
});

export default MainContent;
