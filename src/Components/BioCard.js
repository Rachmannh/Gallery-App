import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const BioCard = props => {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  AsyncStorage.getItem('username', (err, result) => {
    setUsername(result);
  });

  AsyncStorage.getItem('avatar_url', (err, result) => {
    setAvatar(result);
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.myContainer}>
        <View>
          <Image style={styles.homeImage} source={{uri: avatar}} />
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.usernameTitle}>{username}</Text>
          <View>
            <TouchableOpacity style={styles.myButtonOne}>
              <Text
                style={styles.myButtonText}
                onPress={() => props.navigation.navigate('Upload')}>
                Upload
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 10}}>
            <TouchableOpacity
              style={styles.myButtonTwo}
              onPress={() => props.navigation.replace('Login')}>
              <Text style={styles.myButtonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  myContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(12),
    backgroundColor: '#FBFEF9',
  },
  homeImage: {
    width: responsiveScreenWidth(25),
    height: responsiveScreenHeight(12),
    borderRadius: 100,
  },
  usernameTitle: {
    marginBottom: 10,
    fontSize: responsiveScreenFontSize(2),
    color: '#000000',
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
    padding: 10,
  },
  myButtonOne: {
    backgroundColor: '#006494',
    padding: 5,
    borderRadius: 30,
  },
  myButtonTwo: {
    backgroundColor: '#D80032',
    padding: 5,
    borderRadius: 30,
  },
  myButtonText: {
    color: '#FCFCFC',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default BioCard;
