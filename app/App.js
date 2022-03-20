import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [data, setData] = useState(0);

  return (
    <View>
      <Text style={{fontSize: 100}}>{data}</Text>
      <Button onPress={() => setData(data - 1)} title="Update state"></Button>
      <Button onPress={() => setData(data + 1)} title="Update state"></Button>
    </View>
  );
};

export default App;
