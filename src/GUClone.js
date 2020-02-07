/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
// import { connect } from 'react-redux';

// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     increaseCounter: () => dispatch({ type: 'INCREASE' }),
//     decreaseCounter: () => dispatch({ type: 'DECREASE' }),
//   };
// }


class GUClone extends React.Component {
  state = {
    activeForm: 'login',
  }

  handleAuthSwitch = () => {
    this.setState(prevState => {
      return (prevState.activeForm === 'login') ?
        { activeForm: 'sign up' } :
        { activeForm: 'login' };
    });
  }

  render() {
    const { activeForm } = this.state;
    return (
      <>
        <View style={styles.main}>
          <Text style={styles.mainText}>{activeForm === 'login' ? 'Log in' : 'Sign up'}</Text>
          <LoginForm style={styles.form} active={activeForm} />
          <Button title={activeForm === 'login' ? 'Switch to Sign up' : 'Switch to Log in'} onPress={this.handleAuthSwitch} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  mainText: {
    margin: 50,
  },
});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(GUClone);

export default GUClone;
