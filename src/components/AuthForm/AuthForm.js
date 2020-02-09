/* eslint-disable prettier/prettier */
import React from 'react';
import { reduxForm } from 'redux-form';
import AuthFormView from './AuthFormView/AuthFormView';
import { AsyncStorage, Alert } from 'react-native';

const AuthForm = ({ active }) => {
  let FORM;
  FORM = active === 'login' ? 'login' : 'sign up';

  const AuthFormRF = reduxForm({
    form: FORM,
  })(AuthFormView);

  const handleSubmit = (e) => {
    const [phoneNumber, password] = Object.values(e);

    if (String(phoneNumber).length !== 10 || isNaN(Number(phoneNumber)) || typeof Number(phoneNumber) !== 'number') {
      Alert.alert(
        'error: Phone number must be 10 numerical digits',
        null,
        [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ],
        { cancelable: false },
      );
    }

    const signupHandler = async (pn, pw) => {

      // normally you would never want to hash passwords on the frontend
      // but just imagine that we're doing this on the server:
      const mockBcryptHasher = (pass) => {
        const alpha = 'abcdefghijklmnopqrstuvwxyz';
        let newPass = pass
          .split('')
          .map(char => {
            let index = alpha.indexOf(char);
            let newIndex = (index + 13) % 26;
            return alpha[newIndex];
          })
          .join('');

        return newPass;
      };

      const hashedPw = mockBcryptHasher(pw);
      console.log('hashedPw', hashedPw);

    };

    // if signup
    if (active === 'sign up') {
      signupHandler(phoneNumber, password)
        .then(res => {
          console.log('res', res);
        })
        .catch(err => {
          console.log('err: ', err.stack);
        });
    }

  };

  return <AuthFormRF onSubmit={handleSubmit} />;
};

export default AuthForm;
