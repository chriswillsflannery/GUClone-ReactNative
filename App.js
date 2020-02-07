/* eslint-disable prettier/prettier */
import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
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

// const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
      <GUClone />
      // </Provider>
    );
  }
}

export default App;
