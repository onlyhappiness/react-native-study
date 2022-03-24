import React from 'react';
import {View, Text} from 'react-native';
import Profile from './components/Profile';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 100}}>Props</Text>
      <Profile data={'bread'} />
    </View>
  );
};

export default App;
