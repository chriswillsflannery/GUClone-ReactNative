/* eslint-disable no-catch-shadow */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React from 'react';
import { reduxForm } from 'redux-form';
import AuthFormView from './AuthFormView/AuthFormView';
import mockBcryptHasher from './AuthUtils/mockBcryptHasher.js';
import { AsyncStorage, Alert } from 'react-native';

const AuthForm = ({ active }) => {
  let FORM;
  FORM = active === 'login' ? 'login' : 'sign up';

  const AuthFormRF = reduxForm({
    form: FORM,
  })(AuthFormView);

  const handleSubmit = (e) => {
    const [phoneNumber, password] = Object.values(e);



    const handleSignup = async (pn, pw) => {

      // sanitize phone number and password input
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
      } else if (password.length < 6) {
        Alert.alert(
          'error: Password must be at least 6 characters',
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

      // normally you would never want to hash passwords on the frontend
      // but just imagine that we're doing this on the server:
      const hashedPw = mockBcryptHasher(pw);
      console.log('hashedPw', hashedPw);

      // store phone number and hashed PW in AsyncStorage
      const storeData = async () => {
        //check if that number already exist in storage
        try {
          const value = await AsyncStorage.getItem(phoneNumber);
          if (value === null) {
            try {
              await AsyncStorage.setItem(phoneNumber, hashedPw);
            } catch (e) {
              console.log('error: ', e.stack);
            }
          } else {
            Alert.alert(
              'error: Account with this phone number already exists!',
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
        } catch (e) {
          console.log(e.stack);
        }
      };

      storeData()
        .then(res => {
          console.log('successfully stored phone # and pw in db');
          //navigate to the mains page

        })
        .catch(err => {
          console.log('err: ', err);
        });

    };

    // if signup
    if (active === 'sign up') {
      handleSignup(phoneNumber, password)
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
