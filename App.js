/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
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

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GUClone />
      </Provider>
    );
  }
}

export default App;
