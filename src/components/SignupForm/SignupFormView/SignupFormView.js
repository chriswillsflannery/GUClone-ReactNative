import { Field } from 'redux-form';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';
import RTFtextInput from '../../RTFtextInput/RTFtextInput';

const SignupFormView = ({ handleSubmit }) => (
  <View>
    <Field name="username" component={RTFtextInput} />
    <Field name="password" component={RTFtextInput} />
    <Button title="Submit Signup" onPress={handleSubmit} />
  </View>
);

SignupFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupFormView;
