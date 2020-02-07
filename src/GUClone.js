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

  handlePressLogin = () => this.setState({ activeForm: 'login' });
  handlePressSignup = () => this.setState({ activeForm: 'sign up' });

  render() {
    const { activeForm } = this.state;
    return (
      <>
        <View style={styles.main}>
          {activeForm === 'login' && <Text style={styles.mainText}>Log in</Text>}
          {activeForm === 'login' && <LoginForm />}
          {activeForm === 'sign up' && <Text style={styles.mainText}>Sign up</Text>}
          {activeForm === 'signup' && <SignupForm />}
          <Button title="Login" onPress={this.handlePressLogin} />
          <Button title="Sign up" onPress={this.handlePressSignup} />
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
