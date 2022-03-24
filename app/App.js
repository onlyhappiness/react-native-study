import React from 'react';
import {View, Text} from 'react-native';
import externalStyle from './style/externalStyle';

const App = () => {
  return (
    <View>
      <Text style={[externalStyle.textStyle, externalStyle.textBg]}>
        Style in React Native
      </Text>
    </View>
  );
};

export default App;
