/* eslint-disable prettier/prettier */
import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Field } from 'redux-form';
import RTFtextInput from '../../RTFtextInput/RTFtextInput';

const LoginFormView = ({ handleSubmit }) => (
  <View style={styles.loginContainer}>
    <Field name="username" component={RTFtextInput} />
    <Field name="password" component={RTFtextInput} />
    <View style={styles.buttonContainer}>
      <Button style={styles.button} title="Submit" onPress={handleSubmit} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    width: 200,
  },
});

LoginFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginFormView;
