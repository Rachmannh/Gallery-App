import React from 'react';
import {View} from 'react-native';
import Forms from '../Components/Forms';
import LogText from '../Components/LogText';
import MainContent from '../Components/MainContent';

const Landing = () => {
  return (
    <>
      <View style={{flexDirection: 'column', height: 100, flex: 1}}>
        <View>
          <LogText />
        </View>
        <View style={{flex: 1}}>
          <MainContent />
        </View>
        <View>
          <Forms />
        </View>
      </View>
    </>
  );
};

export default Landing;
