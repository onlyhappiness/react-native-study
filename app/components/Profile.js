import React from 'react';
import {View, Text} from 'react-native';

const Profile = props => {
  console.warn('props', props);
  return (
    <View>
      <Text
        style={{
          fontSize: 50,
        }}>
        Profile Components
      </Text>
    </View>
  );
};

export default Profile;
