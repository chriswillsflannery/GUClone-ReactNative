import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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
  render() {
    return (
      <>
        <View style={styles.main}>
          <Text style={styles.mainText}>Log in</Text>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput style={styles.input} placeholder="Password" />
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
  input: {
    height: 50,
    width: '95%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 5,
  },
});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(GUClone);

export default GUClone;
