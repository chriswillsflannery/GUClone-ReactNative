/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AuthForm from './components/AuthForm/AuthForm';
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
  constructor(props) {
    super(props);
    const path = props.match.path === '/signup' ? 'sign up' : 'login';
    this.state = {
      activeForm: path,
    };
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
          <AuthForm style={styles.form} active={activeForm} />
          <View style={styles.buttonContainer}>
            <Button color="gray" style={styles.button} title={activeForm === 'login' ? 'Switch to Sign up' : 'Switch to Log in'} onPress={this.handleAuthSwitch} />
          </View>
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
  buttonContainer: {
    marginTop: 40,
    width: 200,
  },
  button: {
  },
});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(GUClone);

export default GUClone;
