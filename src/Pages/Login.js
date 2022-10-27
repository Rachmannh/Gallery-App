import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import MainContent from '../Components/MainContent';

const Login = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const getApiData = async () => {
    if (username === '' || password === '') {
      console.error('Username or password not filled');
      return null;
    }

    try {
      setIsLoading(true);
      const getData = await fetch(
        'https://playgroundapi.com/bootcamp/api/web/user/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        },
      );
      if (getData.status === 200) {
        const results = await getData.json();
        setData(results);
        setIsLoading(false);
        AsyncStorage.setItem('token', results.data.token);
        AsyncStorage.setItem('username', results.data.username);
        AsyncStorage.setItem('avatar_url', results.data.avatar_url);
        navigation.navigate('Home');
      }
    } catch (e) {
      console.error(e);
    }

    return null;
  };

  useEffect(() => {
    setData(data);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <MainContent />
      </View>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.formTextHeading}>Login Page</Text>
        </View>
        <View>
          <TextInput
            style={styles.formTextInput}
            onChangeText={value => setUsername(value)}
            value={username}
            placeholder="username"
            placeholderTextColor={'#131515'}
          />
          <TextInput
            style={styles.formTextInput}
            onChangeText={value => setPassword(value)}
            value={password}
            placeholder="password"
            secureTextEntry={true}
            placeholderTextColor={'#131515'}
          />
        </View>
        <View style={{padding: 10}}>
          <TouchableOpacity
            style={styles.formButton}
            onPress={() => getApiData()}>
            <Text style={styles.myButtonText}>Login</Text>
          </TouchableOpacity>
          {isLoading ? (
            <ActivityIndicator size={'large'} style={styles.loader} />
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    height: responsiveScreenHeight(50),
    backgroundColor: '#FBFEF9',
  },
  mainContainer: {
    flex: 1,
  },
  headingContainer: {
    display: 'flex',
    flex: 1.1,
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(15),
    backgroundColor: '#000000',
    borderWidth: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  formTextHeading: {
    padding: 20,
    margin: 20,
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(8),
    fontSize: responsiveScreenFontSize(2.5),
    color: '#FCFCFC',
    fontWeight: 'bold',
  },
  formTextInput: {
    margin: 10,
    backgroundColor: 'white',
    borderColor: '#F7F7FF',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  formButton: {
    backgroundColor: '#FF3F00',
    padding: 15,
    marginTop: 5,
    borderRadius: 30,
  },
  myButtonText: {
    color: '#FCFCFC',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loader: {
    display: 'flex',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default Login;
