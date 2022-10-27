import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const UploadForms = () => {
  return (
    <View style={styles.textContainer}>
      <View>
        <TextInput
          style={styles.formTextInput}
          placeholder="Title"
          placeholderTextColor={'#131515'}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder="Type something"
          numberOfLines={4}
          multiline={true}
          placeholderTextColor={'#131515'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.myButtonOne}>
          <Text style={styles.buttonText}>Select File</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myButtonTwo}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  textStyle: {
    fontSize: responsiveScreenFontSize(2.4),
    fontWeight: 'bold',
    color: '#000',
  },
  formTextInput: {
    width: responsiveScreenWidth(90),
    margin: 10,
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 10,
  },
  myButtonOne: {
    backgroundColor: '#00a6fb',
    padding: 10,
    borderRadius: 5,
  },
  myButtonTwo: {
    backgroundColor: '#006494',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FCFCFC',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default UploadForms;
