import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const LogText = () => {
  return (
    <>
      <View>
        <Text style={styles.teks}>Login</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  teks: {
    fontSize: 18,
    padding: 14,
    fontWeight: 'bold',
    color: '#131515',
    backgroundColor: '#fcfcfc',
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 6,
  },
});

export default LogText;
