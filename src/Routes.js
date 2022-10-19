import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LearnNetworking from './Components/LearnNetworking';
import Landing from './Pages/Landing';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Login" component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
