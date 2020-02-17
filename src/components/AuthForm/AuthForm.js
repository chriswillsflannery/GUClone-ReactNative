/* eslint-disable no-catch-shadow */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React from 'react';
import { reduxForm } from 'redux-form';
import AuthFormView from './AuthFormView/AuthFormView';
import mockBcryptHasher from './AuthUtils/mockBcryptHasher.js';
import { AsyncStorage, Alert } from 'react-native';
import { useHistory } from 'react-router-dom';

const AuthForm = ({ active }) => {
  let FORM;
  FORM = active === 'login' ? 'login' : 'sign up';

  const AuthFormRF = reduxForm({
    form: FORM,
  })(AuthFormView);

  const history = useHistory();
  const alertButtons = {
    text: 'Ok',
    style: 'cancel',
  };

  const handleSubmit = (e) => {
    const [phoneNumber, password] = Object.values(e);

    const handleSignup = async (pn, pw) => {

      // normally you would never want to hash passwords on the frontend
      // but just imagine that we're doing this on the server:
      const hashedPw = mockBcryptHasher(pw);

      // store phone number and hashed PW in AsyncStorage
      const storeData = async () => {
        //check if that number already exist in storage
        try {
          const value = await AsyncStorage.getItem(phoneNumber);
          if (value === null) {
            try {
              await AsyncStorage.setItem(phoneNumber, hashedPw);
            } catch (e) {
              throw new Error('unable to setItem in AsyncStorage', e.stack);
            }
          } else {
            Alert.alert(
              'error: Account with this phone number already exists!',
              null,
              [alertButtons],
              { cancelable: false },
            );

            return 'Account with this phone number already exists!';
          }
        } catch (e) {
          throw new Error('error attempting to store data: ', e.stack);
        }
      };

      // sanitize phone number and password input - usually on backend we would do more to protect against SQL injection / XSS attacks but for these purposes we'll just check for corrent formatting
      if (String(phoneNumber).length !== 10 || isNaN(Number(phoneNumber)) || typeof Number(phoneNumber) !== 'number') {
        Alert.alert(
          'error: Phone number must be 10 numerical digits',
          null,
          [alertButtons],
          { cancelable: false },
        );
      } else if (password.length < 6) {
        Alert.alert(
          'error: Password must be at least 6 characters',
          null,
          [alertButtons],
          { cancelable: false },
        );
      } else {
        storeData()
          .then(res => {
            if (!res) {
              // if no error thrown, redirect to next page.
              history.push('/mains');
              // set state to logged in?
            }
          })
          .catch(err => {
            throw new Error('error attempting to store data: ', err.stack);
          });
      }


    };

    const handleLogin = async (pn, pw) => {

      // sanitize phone number and password input - usually on backend we would do more to protect against SQL injection / XSS attacks but for these purposes we'll just check against items currently in AsyncStorage
      // check passed-in pn and pw are already in async storage
      // if already exist, success and redirect to next page

      const hashedPw = mockBcryptHasher(pw);

      if (!pn || !pw) {
        Alert.alert(
          'error: Please input a phone number and password',
          null,
          [alertButtons],
          { cancelable: false },
        );
      } else {
        try {
          const value = await AsyncStorage.getItem(phoneNumber);
          if (mockBcryptHasher(pw) === value) {
            // redirect to mains page
            history.push('/mains');
            // set state to logged in?
          } else {
            Alert.alert(
              'error: Wrong # or password!',
              null,
              [alertButtons],
              { cancelable: false },
            );
          }
        } catch (err) {
          throw new Error('Error: unable to retrieve item from AsyncStorage');
        }
      }
    };

    if (active === 'sign up') {
      handleSignup(phoneNumber, password)
        .then(res => {
          console.log('attempted sign up.');
        })
        .catch(err => {
          throw new Error('error attempting to handle Signup: ', err.stack);
        });
    }

    if (active === 'login') {
      handleLogin(phoneNumber, password)
        .then(res => {
          console.log('attempted login.');
        })
        .catch(err => {
          throw new Error('error attempting to handle Login: ', err.stack);
        });
    }

  };

  return <AuthFormRF onSubmit={handleSubmit} />;
};

export default AuthForm;
