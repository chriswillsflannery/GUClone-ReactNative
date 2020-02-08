/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
      <Image style={styles.image} source={require('./images/goodUncle.png')} />
      <Link component={TouchableOpacity} style={styles.link} to="/signup">
        <Text style={styles.text}>Sign up</Text>
      </Link>
      <Link component={TouchableOpacity} style={styles.link} to="/login">
        <Text style={styles.text}>Log in</Text>
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
  image: {
    width: 160,
    height: 70,
    marginBottom: 50,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  options: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    borderWidth: 0.5,
    borderColor: 'black',
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    margin: 30,
  },
});

export default App;
