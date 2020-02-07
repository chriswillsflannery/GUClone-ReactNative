/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { NativeRouter, Route, Link } from 'react-router-native';
import GUClone from './src/GUClone';


// const initialState = {
//   counter: 0,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREASE':
//       return { counter: state.counter + 1 };
//     case 'DECREASE':
//       return { counter: state.counter - 1 };
//   }
//   return state;
// };

const rootReducer = combineReducers({ form: formReducer });
const store = createStore(rootReducer);

const Home = () => (
  <>
    <View style={styles.options}>
      <Link style={styles.button} to="/signup">
        <Text>Sign up</Text>
      </Link>
      <Link style={styles.button} to="/login">
        <Text>Log in</Text>
      </Link>
    </View>
  </>
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.main}>
            <Route exact path="/" component={Home} />
            <Route name="sign up" path="/signup" component={GUClone} />
            <Route name="login" path="/login" component={GUClone} />
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  options: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 30,
  },
});

export default App;
