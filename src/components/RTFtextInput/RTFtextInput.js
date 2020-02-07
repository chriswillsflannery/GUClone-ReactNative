import PropTypes from 'prop-types';
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const RTFtextInput = ({ input: { onChange, value } }) => (
  <TextInput onChangeText={onChange} value={value} style={styles.text} />
);

RTFtextInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  text: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    padding: 10,
  },
});

export default RTFtextInput;
