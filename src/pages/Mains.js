/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';

class Mains extends React.Component {
  constructor() {
    super();
    this.state = {
      mains: [],
    };
  }

  componentDidMount() {
    fetch('https://s3.amazonaws.com/staginggooduncledigests/products_istcki0x000h28d97a9rv9jp.json')
      .then(res => res.json())
      .then(suc => {
        this.setState(prevState => {
          const mains = [...prevState.mains];
          suc.digestData.mains.forEach(main => {
            mains.push(<Text>{main.name}</Text>);
          });
          return {
            mains: mains,
          };
        });
      });
  }

  render() {

    return (
      <>
        {this.state.mains}
      </>
    );
  }
}

export default Mains;
