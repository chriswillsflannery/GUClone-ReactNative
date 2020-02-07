import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, View, TextInput } from 'react-native';
import { Field } from 'redux-form';
import RTFtextInput from '../../RTFtextInput/RTFtextInput';

const LoginFormView = ({ handleSubmit }) => (
  <View>
    <Field name="username" component={RTFtextInput} />
    <Field name="password" component={RTFtextInput} />
    <Button title="Submit Login" onPress={handleSubmit} />
  </View>
);

LoginFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginFormView;
