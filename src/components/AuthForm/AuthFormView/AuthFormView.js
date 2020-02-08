/* eslint-disable prettier/prettier */
import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Field } from 'redux-form';
import RTFtextInput from '../../RTFtextInput/RTFtextInput';

const AuthFormView = ({ handleSubmit }) => (
  <View style={styles.AuthContainer}>
    <Field name="(555) 555-5555" component={RTFtextInput} />
    <Field name="password" component={RTFtextInput} />
    <View style={styles.buttonContainer}>
      <Button style={styles.button} title="Submit" onPress={handleSubmit} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  AuthContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    width: 200,
  },
});

AuthFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AuthFormView;
