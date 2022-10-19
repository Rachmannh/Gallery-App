import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const Forms = () => {
  return (
    <>
      <View style={{height: 290, backgroundColor: '#003049'}}>
        <View>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              padding: 20,
              fontSize: 20,
              color: '#FCFCFC',
              fontWeight: 'bold',
            }}>
            Login with your Credential
          </Text>
          <TextInput
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              margin: 10,
              backgroundColor: '#FCFCFC',
              borderColor: 'lightgray',
              borderWidth: 1,
              padding: 10,
            }}
            placeholder="Username"
            placeholderTextColor={'#131515'}
          />
          <TextInput
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              margin: 10,
              backgroundColor: 'white',
              borderColor: 'lightgray',
              borderWidth: 1,
              padding: 10,
            }}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={'#131515'}
          />
        </View>
        <View style={{padding: 10, marginTop: 5, width: 395, height: 700}}>
          <Button
            title="Login"
            onPress={() => console.log('Anda Menekan Tombol Login')}
            color={'#0582ca'}
          />
        </View>
      </View>
    </>
  );
};

export default Forms;
