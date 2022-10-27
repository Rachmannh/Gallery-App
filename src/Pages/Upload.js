import React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import UploadForms from '../Components/UploadForms';

const UploadComponent = () => {
  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.textContainer}>
        <View>
          <UploadForms />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FBFEF9',
  },
  textContainer: {
    flex: 2,
  },
});

export default UploadComponent;
