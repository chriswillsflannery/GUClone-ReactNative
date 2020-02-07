/* eslint-disable prettier/prettier */
import React from 'react';
import { reduxForm } from 'redux-form';
import LoginFormView from './LoginFormView/LoginFormView';

const LoginForm = ({ active }) => {
  let FORM;
  FORM = active === 'login' ? 'login' : 'sign up';

  const LoginFormRF = reduxForm({
    form: FORM,
  })(LoginFormView);

  const handleSubmit = () => {
    console.log('submitted!');
  };

  return <LoginFormRF onSubmit={handleSubmit} />;
};

export default LoginForm;
