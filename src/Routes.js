import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';

import Login from './Pages/Login';
import Home from './Pages/Home';
import BioCard from './Components/BioCard';
import PhotoList from './Components/PhotoList';
import Upload from './Pages/Upload';
import Detail from './Pages/Detail';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="myApp">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: '#FF3F00',
            },
            headerTintColor: '#FCFCFC',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: responsiveScreenFontSize(2.5),
            },
          }}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="BioCard" component={BioCard} />
        <Stack.Screen name="PhotoList" component={PhotoList} />
        <Stack.Screen
          name="Upload"
          component={Upload}
          options={{
            headerStyle: {
              backgroundColor: '#FF3F00',
            },
            headerTintColor: '#FCFCFC',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: responsiveScreenFontSize(2.5),
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerStyle: {
              backgroundColor: '#FF3F00',
            },
            headerTintColor: '#FCFCFC',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: responsiveScreenFontSize(2.5),
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
