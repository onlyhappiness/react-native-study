import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

function App() {
  const [state, setState] = useState({
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    password: '',
  });

  function submit() {
    let rjx = /^[a-zA-z]+$/;
    let isValid = rjx.test(state.name);
    console.warn(isValid);

    if (!isValid) {
      setState({...state, nameError: 'name field must be alphabatic'});
    } else {
      setState({...state, nameError: ''});
    }
  }

  function emailValidator() {
    if (!state.email) {
      setState({...state, emailError: 'Email field can not be empty'});
    } else {
      setState({...state, emailError: ''});
    }
  }

  return (
    <View style={{margin: 20, marginTop: 100}}>
      <TextInput
        placeholder="enter Name"
        onChangeText={text => {
          setState({...state, name: text});
        }}
        style={{borderWidth: 2, borderColor: 'skyblue', margin: 20}}
      />
      <Text style={{color: 'red', marginLeft: 20}}>{state.nameError}</Text>

      <TextInput
        placeholder="enter email"
        onBlur={() => {
          emailValidator();
        }}
        onChangeText={text => {
          setState({...state, email: text});
        }}
        style={{borderWidth: 2, borderColor: 'skyblue', margin: 20}}
      />
      <Text style={{color: 'red', marginLeft: 20}}>{state.emailError}</Text>

      <TextInput
        placeholder="enter password"
        secureTextEntry={true}
        keyboardType="numeric"
        maxLength={5}
        onChangeText={text => {
          setState({...state, password: text});
        }}
        style={{borderWidth: 2, borderColor: 'skyblue', margin: 20}}
      />

      <Button
        title="submit"
        onPress={() => {
          submit();
        }}
      />
    </View>
  );
}

export default App;
