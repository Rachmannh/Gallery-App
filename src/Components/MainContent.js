import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const MainContent = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://1.bp.blogspot.com/-mNPimefwIZ0/YSBq-YRfuqI/AAAAAAAATVA/PCnhqCvEn-cGkgYtSZeVDntnKWJJqT7NwCLcBGAsYHQ/s1181/Telkomsel%2BTerbaru.png',
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
  },
  image: {
    width: 250,
    height: 250,
  },
});

export default MainContent;
