import React from 'react';
import { Text, View, TextInput } from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
  render() {
    return (
      <View>
        <FormRow>
          <TextInput />
        </FormRow>
      </View>
    );
  }
}
