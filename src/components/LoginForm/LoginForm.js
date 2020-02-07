import React from 'react';
import { reduxForm } from 'redux-form';
import LoginFormView from './LoginFormView/LoginFormView';

const FORM = 'login';

const LoginFormRF = reduxForm({
  form: FORM,
})(LoginFormView);

class LoginForm extends React.Component {
  handleSubmit = () => {
    console.log('submitted!');
  };

  render() {
    return <LoginFormRF onSubmit={this.handleSubmit} />;
  }
}

export default LoginForm;
